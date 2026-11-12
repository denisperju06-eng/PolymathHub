const test=require('node:test'); const assert=require('node:assert/strict');
const L=require('../language-practice.js'); const {validateProgress}=require('../api/progress.mjs');
test('French practice checks each answer and accepts harmless typing variations',()=>{
 const r=L.check([' Acheter ','COMBIEN','combien']);assert.deepEqual(r.correct,[true,true,true]);assert.equal(r.passed,true);
 assert.deepEqual(L.check(['vendre','combien','prix']).correct,[false,true,false]);
});
test('language mistakes resolve and repeated practice earns XP only once',()=>{
 let s=L.attempt(null,['acheter','autre','']);assert.equal(s.needsReview,true);assert.equal(L.summary(s).xp,0);
 s=L.attempt(s,['acheter','combien','combien']);assert.equal(s.needsReview,false);assert.equal(s.hadMistake,true);assert.equal(L.summary(s).xp,20);
 s=L.attempt(JSON.parse(JSON.stringify(s)),['acheter','combien','combien']);assert.equal(L.summary(s).xp,20);assert.equal(s.attempts,3);
});
test('language state cleaning bounds text, drops extra fields and recomputes correctness',()=>{
 const s=L.clean({answers:['x'.repeat(1000),'combien','combien'],correct:[true,true,true],passed:true,password:'hidden',attempts:1e9});
 assert.equal(s.answers[0].length,100);assert.equal(s.correct[0],false);assert.equal(s.passed,false);assert.equal(JSON.stringify(s).includes('hidden'),false);
});
test('language progress survives the authenticated progress API validator',()=>{
 const s=L.attempt(null,['acheter','wrong','combien']);
 const safe=validateProgress({revision:null,course:{languagePractice:s,activeTrack:'Franceză'},vocabulary:{}});
 assert.deepEqual(safe.course.languagePractice,s);assert.equal(safe.course.activeTrack,'Franceză');
});
