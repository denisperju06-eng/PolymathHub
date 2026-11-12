(function(root){
  'use strict';
  const expected=['acheter','combien','combien'];
  const explanations=[
    'Acheter înseamnă „a cumpăra”. După „je voudrais” folosim infinitivul: je voudrais acheter.',
    'Combien întreabă „cât / câte”. „Combien en voulez-vous ?” se referă aici la cantitate.',
    '„C’est combien ?” este o întrebare uzuală despre preț: „Cât costă?”.'
  ];
  const normalize=v=>String(v||'').normalize('NFKC').trim().toLocaleLowerCase('fr').replace(/[.!?]+$/g,'').trim();
  function check(values){
    const answers=Array.from({length:3},(_,i)=>typeof values?.[i]==='string'?values[i].slice(0,100):'');
    const correct=answers.map((value,i)=>normalize(value)===expected[i]);
    return {answers,correct,passed:correct.every(Boolean),explanations};
  }
  function clean(value){
    const raw=value&&typeof value==='object'&&!Array.isArray(value)?value:{};
    const result=check(raw.answers);
    const attempts=Number.isSafeInteger(raw.attempts)?Math.max(0,Math.min(raw.attempts,100000)):0;
    return {version:1,answers:result.answers,correct:result.correct,passed:result.passed,
      completed:raw.completed===true||result.passed,rewarded:raw.rewarded===true||result.passed,
      attempts,hadMistake:raw.hadMistake===true,needsReview:attempts>0&&!result.passed,
      lastAttemptAt:typeof raw.lastAttemptAt==='string'&&Number.isFinite(Date.parse(raw.lastAttemptAt))?new Date(raw.lastAttemptAt).toISOString():''};
  }
  function attempt(value,answers,now=new Date().toISOString()){
    const previous=clean(value),result=check(answers);
    return clean({...previous,answers:result.answers,attempts:Math.min(previous.attempts+1,100000),
      completed:previous.completed||result.passed,rewarded:previous.rewarded||result.passed,
      hadMistake:previous.hadMistake||!result.passed,lastAttemptAt:now});
  }
  function summary(value){const s=clean(value);return {xp:s.rewarded?20:0,completed:s.completed?1:0,correct:s.correct.filter(Boolean).length,toReview:s.needsReview?1:0,resolved:s.hadMistake&&!s.needsReview&&s.passed?1:0};}
  const api={check,clean,attempt,summary};
  if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.LanguagePractice=api;
})(typeof globalThis!=='undefined'?globalThis:this);
