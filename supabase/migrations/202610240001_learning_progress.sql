create table if not exists public.learning_progress (
  user_id uuid primary key references auth.users(id) on delete cascade,
  course jsonb not null default '{}'::jsonb,
  vocabulary jsonb not null default '{"saved":[],"learned":[],"cache":[]}'::jsonb,
  revision bigint not null default 0 check (revision >= 0),
  updated_at timestamptz not null default now(),
  constraint progress_size check (octet_length(course::text) + octet_length(vocabulary::text) <= 200000)
);

alter table public.learning_progress enable row level security;
revoke all on public.learning_progress from anon;
grant select, insert, update on public.learning_progress to authenticated;

create policy "Read own progress" on public.learning_progress
  for select to authenticated using ((select auth.uid()) = user_id);
create policy "Insert own progress" on public.learning_progress
  for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "Update own progress" on public.learning_progress
  for update to authenticated using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);
