(function (root) {
  'use strict';
  const ids=['s1-all','s1-columns','s2-select','s2-alias','s3-stock','s3-orders','s4-price','s4-limit','s5-inner','s5-left','s6-cities','s6-status','p1','p2','p3'];
  const object=v=>v&&typeof v==='object'&&!Array.isArray(v)?v:{};
  const bounded=(v,n)=>typeof v==='string'?v.slice(0,n):'';
  function clean(value){
    const raw=object(value);const records={};
    for(const id of ids){
      if(!Object.hasOwn(object(raw.records),id))continue;
      const r=object(raw.records[id]);
      records[id]={passed:r.passed===true,needsReview:r.needsReview===true,hadMistake:r.hadMistake===true,
        rewarded:r.rewarded===true,attempts:Number.isSafeInteger(r.attempts)?Math.max(0,Math.min(r.attempts,100000)):0,
        lastQuery:bounded(r.lastQuery,2000),lastFeedback:bounded(r.lastFeedback,600),
        lastAttemptAt:typeof r.lastAttemptAt==='string'&&Number.isFinite(Date.parse(r.lastAttemptAt))?new Date(r.lastAttemptAt).toISOString():'',variant:r.variant===1?1:0};
    }
    return {version:1,activeExerciseId:ids.includes(raw.activeExerciseId)?raw.activeExerciseId:ids[0],records};
  }
  function attempt(value,id,query,result,variant,now=new Date().toISOString()){
    if(!ids.includes(id))throw new Error('Exercițiu necunoscut');
    const state=clean(value);const r=state.records[id]||{}; const correct=result.correct===true;
    state.activeExerciseId=id;
    state.records[id]={passed:r.passed===true||correct,needsReview:!correct,hadMistake:r.hadMistake===true||!correct,
      rewarded:r.rewarded===true||correct,attempts:Math.min((r.attempts||0)+1,100000),lastQuery:bounded(query,2000),
      lastFeedback:bounded(correct?'Rezolvat corect.':result.error||'Rezultatul nu corespunde cerinței.',600),
      lastAttemptAt:now,variant:variant===1?1:0};
    return clean(state);
  }
  function summary(value){
    const state=clean(value);const rows=Object.entries(state.records);
    return {completed:rows.filter(([,r])=>r.passed).length,total:ids.length,
      xp:rows.filter(([,r])=>r.rewarded).length*20,toReview:rows.filter(([,r])=>r.needsReview).length,
      resolved:rows.filter(([,r])=>r.hadMistake&&!r.needsReview&&r.passed).length,
      projectDone:rows.filter(([id,r])=>id.startsWith('p')&&r.passed).length};
  }
  function resume(value){const s=clean(value);return !s.records[s.activeExerciseId]?.passed?s.activeExerciseId:(ids.find(id=>!s.records[id]?.passed)||s.activeExerciseId);}
  const api={ids,clean,attempt,summary,resume};
  if(typeof module!=='undefined'&&module.exports)module.exports=api;
  else root.SqlProgress=api;
})(typeof globalThis!=='undefined'?globalThis:this);
