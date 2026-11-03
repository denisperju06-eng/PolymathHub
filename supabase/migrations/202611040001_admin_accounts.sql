begin;

create schema if not exists polymath_private;
revoke all on schema polymath_private from public, anon, authenticated;

create table if not exists polymath_private.administrators (
  user_id uuid primary key references auth.users(id) on delete cascade
);

alter table polymath_private.administrators enable row level security;
revoke all on polymath_private.administrators from public, anon, authenticated;

create or replace function public.polymath_admin_accounts(
  p_page integer,
  p_query text,
  p_access_only boolean
)
returns jsonb
language plpgsql
stable
security definer
set search_path = ''
as $function$
declare
  page_number integer := greatest(1, least(coalesce(p_page, 1), 1000000));
  page_size integer := 25;
  term text := lower(left(btrim(coalesce(p_query, '')), 120));
  result jsonb;
begin
  if not exists (
    select 1 from polymath_private.administrators
    where user_id = auth.uid()
  ) then
    return jsonb_build_object('allowed', false);
  end if;

  if p_access_only then
    return jsonb_build_object('allowed', true);
  end if;

  with accounts as (
    select u.id, u.email, u.created_at, u.last_sign_in_at,
           coalesce(nullif(left(btrim(u.raw_user_meta_data ->> 'display_name'), 60), ''),
                    nullif(split_part(u.email, '@', 1), ''), 'Cont fără nume') as name
    from auth.users u
  ),
  matches as (
    select * from accounts
    where term = '' or strpos(lower(name), term) > 0 or strpos(lower(email), term) > 0
  ),
  page as (
    select * from matches
    order by created_at desc nulls last, id
    limit page_size offset (page_number::bigint - 1) * page_size
  ),
  rows as (
    select a.id, a.name, a.email, a.created_at, a.last_sign_in_at,
           case when p.course ->> 'xp' ~ '^[0-9]{1,8}$' then (p.course ->> 'xp')::integer else 0 end as xp,
           case when jsonb_typeof(p.course -> 'completedLessons') = 'array'
                then jsonb_array_length(p.course -> 'completedLessons') else 0 end as lessons,
           case when jsonb_typeof(p.vocabulary -> 'saved') = 'array'
                then jsonb_array_length(p.vocabulary -> 'saved') else 0 end as saved_words
    from page a left join public.learning_progress p on p.user_id = a.id
  )
  select jsonb_build_object(
    'allowed', true,
    'page', page_number,
    'page_size', page_size,
    'matched', (select count(*) from matches),
    'summary', jsonb_build_object(
      'total', (select count(*) from accounts),
      'active_7d', (select count(*) from accounts where last_sign_in_at >= now() - interval '7 days'),
      'with_progress', (select count(*) from public.learning_progress)
    ),
    'accounts', coalesce(
      (select jsonb_agg(to_jsonb(r) - 'id' order by r.created_at desc nulls last, r.id) from rows r),
      '[]'::jsonb
    )
  ) into result;

  return result;
end;
$function$;

revoke all on function public.polymath_admin_accounts(integer, text, boolean) from public, anon, authenticated;
grant execute on function public.polymath_admin_accounts(integer, text, boolean) to authenticated;

commit;
