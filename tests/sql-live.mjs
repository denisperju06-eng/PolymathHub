// Opt-in: creates two disposable QA accounts in the isolated laboratory database.
import assert from 'node:assert/strict';
import {randomBytes} from 'node:crypto';
const base=process.env.POLYMATH_SQL_TEST_URL;
if(!base||!/^http:\/\/127\.0\.0\.1:8012$/.test(base))throw new Error('Run only against the isolated local laboratory on port 8012.');
const stamp=Date.now().toString(36);const password=randomBytes(24).toString('base64url');
const clients=[{email:`qa-a-${stamp}@example.invalid`,cookie:''},{email:`qa-b-${stamp}@example.invalid`,cookie:''}];
async function call(client,path,{method='GET',body,user}={}){
 const response=await fetch(base+path,{method,headers:{Origin:base,'Content-Type':'application/json',...(client.cookie?{Cookie:client.cookie}:{}),...(user?{'X-Polymath-Account':user}:{})},...(body?{body:JSON.stringify(body)}:{})});
 const cookies=response.headers.getSetCookie();if(cookies.length)client.cookie=cookies.map(v=>v.split(';')[0]).join('; ');
 return {status:response.status,body:await response.json()};
}
for(const c of clients){const r=await call(c,'/api/account?action=register',{method:'POST',body:{email:c.email,password}});assert.equal(r.status,200,JSON.stringify(r.body));c.id=r.body.user.id;}
const [a,b]=clients;
const progress={version:1,activeExerciseId:'s3-stock',records:{'s3-stock':{passed:false,needsReview:true,hadMistake:true,rewarded:false,attempts:1,lastQuery:'SELECT * FROM products',lastFeedback:'Verifică filtrul.',lastAttemptAt:new Date().toISOString(),variant:1}}};
assert.equal((await call(a,'/api/progress',{method:'PUT',user:a.id,body:{revision:null,course:{sqlPractice:progress,xp:0},vocabulary:{}}})).status,200);
assert.deepEqual((await call(a,'/api/progress',{user:a.id})).body.progress.course.sqlPractice,progress);
assert.equal((await call(b,'/api/progress',{user:b.id})).body.progress,null);
assert.equal((await call(a,'/api/progress',{user:b.id})).status,412);
assert.equal((await call(b,'/api/admin-accounts',{user:b.id})).status,403);
assert.equal((await call(a,'/api/account?action=logout',{method:'POST',user:a.id,body:{}})).status,200);
assert.equal((await call(a,'/api/progress')).status,401);
assert.equal((await call(a,'/api/account?action=login',{method:'POST',body:{email:a.email,password:'wrong-password-long'}})).status,401);
assert.equal((await call(a,'/api/account?action=login',{method:'POST',body:{email:a.email,password}})).status,200);
assert.deepEqual((await call(a,'/api/progress',{user:a.id})).body.progress.course.sqlPractice,progress);
console.log(JSON.stringify({passed:true,checks:['signup-two-accounts','SQL-mistakes-roundtrip','account-isolation','stale-account-denied','nonadmin-denied','logout','wrong-password','login-reloads-progress'],accounts:clients.map(c=>({email:c.email,id:c.id}))}));
