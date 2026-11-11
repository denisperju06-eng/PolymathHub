const test=require('node:test'); const assert=require('node:assert/strict');
const progress=require('../sql-progress.js');
const {validateProgress}=require('../api/progress.mjs');
test('a first correct answer earns XP once, including after reload and data variant',()=>{
 let s=progress.attempt(null,'s1-all','SELECT * FROM customers',{correct:true},0);
 assert.equal(progress.summary(s).xp,20);
 s=progress.attempt(JSON.parse(JSON.stringify(s)),'s1-all','SELECT * FROM customers',{correct:true},1);
 assert.equal(progress.summary(s).xp,20);assert.equal(s.records['s1-all'].attempts,2);
});
test('mistakes store the actual query and feedback, resolve later and can reopen',()=>{
 let s=progress.attempt(null,'s1-all','SELECT city FROM customers',{correct:false,error:'Verifică coloanele'},0);
 assert.equal(progress.summary(s).toReview,1);assert.equal(s.records['s1-all'].lastQuery,'SELECT city FROM customers');
 s=progress.attempt(s,'s1-all','SELECT * FROM customers',{correct:true},1);
 assert.equal(progress.summary(s).resolved,1); assert.equal(progress.summary(s).toReview,0);
 s=progress.attempt(s,'s1-all','SELECT id FROM customers',{correct:false,error:'Coloane'},0);
 assert.equal(progress.summary(s).toReview,1);assert.equal(progress.summary(s).xp,20);
});
test('cleaning removes unknown IDs and credentials and bounds saved text',()=>{
 const clean=progress.clean({activeExerciseId:'alien',records:{alien:{passed:true},'s1-all':{passed:true,lastQuery:'x'.repeat(9000),lastFeedback:'y'.repeat(9000),attempts:1e9,password:'secret'}}});
 assert.equal(clean.activeExerciseId,'s1-all');assert.deepEqual(Object.keys(clean.records),['s1-all']);
 assert.equal(clean.records['s1-all'].lastQuery.length,2000);assert.equal(clean.records['s1-all'].lastFeedback.length,600);
 assert.equal(JSON.stringify(clean).includes('secret'),false);
});
test('server progress persistence retains SQL attempts and rejects unbounded or foreign fields',()=>{
 const s=progress.attempt(null,'s5-left','SELECT 1',{correct:false,error:'JOIN'},1);
 const body=validateProgress({revision:null,course:{sqlPractice:s},vocabulary:{}});
 assert.deepEqual(body.course.sqlPractice,s);
 assert.equal(validateProgress({revision:null,course:{sqlPractice:{records:{unknown:{lastQuery:'bad'}}}}}).course.sqlPractice.records.unknown,undefined);
});
test('continuation and project progress count exercise identities rather than repeated answers',()=>{
 let s=progress.attempt(null,'p1','SELECT 1',{correct:true},0);
 s=progress.attempt(s,'p1','SELECT 1',{correct:true},0);
 assert.equal(progress.summary(s).projectDone,1);assert.equal(progress.summary(s).completed,1);
 assert.equal(progress.resume(s),'s1-all');
 assert.throws(()=>progress.attempt(s,'bad','SELECT 1',{correct:true},0));
});
