const a1_0x59dee3=a1_0x1744;(function(_0x20160d,_0x5c8105){const _0xbffe87=a1_0x1744,_0x223235=_0x20160d();while(!![]){try{const _0x59ee3d=parseInt(_0xbffe87(0x88))/0x1+parseInt(_0xbffe87(0x89))/0x2*(-parseInt(_0xbffe87(0x8f))/0x3)+-parseInt(_0xbffe87(0x87))/0x4+parseInt(_0xbffe87(0x99))/0x5+parseInt(_0xbffe87(0x9d))/0x6*(-parseInt(_0xbffe87(0x9f))/0x7)+-parseInt(_0xbffe87(0xa6))/0x8*(-parseInt(_0xbffe87(0x91))/0x9)+-parseInt(_0xbffe87(0x8a))/0xa*(parseInt(_0xbffe87(0xa2))/0xb);if(_0x59ee3d===_0x5c8105)break;else _0x223235['push'](_0x223235['shift']());}catch(_0x1273f8){_0x223235['push'](_0x223235['shift']());}}}(a1_0x3523,0x73fef));import Task from '../models/task';
function a1_0x1744(_0xfcf5ce,_0x8b3d5b){const _0x3523d4=a1_0x3523();return a1_0x1744=function(_0x1744cd,_0x142edb){_0x1744cd=_0x1744cd-0x84;let _0x3c8805=_0x3523d4[_0x1744cd];return _0x3c8805;},a1_0x1744(_0xfcf5ce,_0x8b3d5b);}
import{publishToQueue}from'../services/mqservice';import'dotenv/config';const defaultQueue=process[a1_0x59dee3(0x84)][a1_0x59dee3(0x93)];export default{'create':async(_0x5b7b3a,_0x552150)=>{const _0x504436=a1_0x59dee3,{name:_0x9d610f,tags:_0x5a78f6}=_0x5b7b3a[_0x504436(0xa4)],{user:_0x703d24}=_0x5b7b3a,_0x503519=await Task[_0x504436(0x86)]({'name':_0x9d610f,'user':_0x703d24['_id']});if(_0x503519)return _0x552150[_0x504436(0x9a)](0x199)[_0x504436(0x94)]({'message':_0x504436(0x95)});const _0x202282=new Task({'name':_0x9d610f,'tags':_0x5a78f6,'user':_0x703d24['_id']});try{const _0x1f7cf0=await _0x202282[_0x504436(0xa7)]();let _0x10a489={'html':_0x504436(0x9b)+_0x703d24[_0x504436(0x96)][_0x504436(0x98)]('\x20')[0x0]+_0x504436(0x9c)+_0x202282[_0x504436(0x96)]+_0x504436(0x8d),'email':_0x703d24[_0x504436(0x97)]};return publishToQueue(defaultQueue,JSON[_0x504436(0x8e)](_0x10a489)),_0x552150[_0x504436(0x9a)](0xc9)[_0x504436(0x94)](_0x1f7cf0);}catch(_0x38075d){if(_0x38075d['name']===_0x504436(0x9e))return _0x552150[_0x504436(0x9a)](0x190)[_0x504436(0x94)](_0x38075d);return _0x552150[_0x504436(0x9a)](0x1f4)[_0x504436(0x94)](_0x38075d);}},'list':async(_0x22c14e,_0x5daf97)=>{const _0x3856be=a1_0x59dee3,{user:_0x36ba}=_0x22c14e;let _0x15a9a6={'user':_0x36ba['_id']};_0x22c14e[_0x3856be(0x90)][_0x3856be(0x96)]&&(_0x15a9a6[_0x3856be(0x96)]=new RegExp(_0x22c14e[_0x3856be(0x90)][_0x3856be(0x96)],'i'));const _0x3cb70e=await Task[_0x3856be(0xa0)](_0x15a9a6,{},{'sort':_0x3856be(0xa5)});return _0x5daf97['status'](0xc8)[_0x3856be(0x94)](_0x3cb70e);},'get':async(_0x46b4ef,_0x408da6)=>{const _0x581e12=a1_0x59dee3,{task_id:_0x114dec}=_0x46b4ef[_0x581e12(0x92)],{user:_0x3261c6}=_0x46b4ef,_0x93b408=await Task[_0x581e12(0xa1)]({'_id':_0x114dec,'user':_0x3261c6[_0x581e12(0x85)]},{},{'sort':'-date'});if(!_0x93b408)return _0x408da6[_0x581e12(0x9a)](0x194)['end']();return _0x408da6[_0x581e12(0x9a)](0xc8)[_0x581e12(0x94)](_0x93b408);},'remove':async(_0x2f310b,_0x4000fa)=>{const _0x16d193=a1_0x59dee3,{task_id:_0x435f6d}=_0x2f310b['params'],{user:_0x3356c8}=_0x2f310b,_0x3e04ed=await Task[_0x16d193(0x8c)]({'_id':_0x435f6d,'user':_0x3356c8[_0x16d193(0x85)]});if(!_0x3e04ed)return _0x4000fa['status'](0x194)['end']();return _0x4000fa['status'](0xcc)['end']();},'done':async(_0x162a25,_0x293e4e)=>{const _0x42ad77=a1_0x59dee3,{task_id:_0x37d186}=_0x162a25['params'],{user:_0x3a6539}=_0x162a25,_0x555145=await Task[_0x42ad77(0x86)]({'_id':_0x37d186,'user':_0x3a6539[_0x42ad77(0x85)]});if(!_0x555145)return _0x293e4e[_0x42ad77(0x9a)](0x194)[_0x42ad77(0xa3)]();try{return await Task[_0x42ad77(0x8b)]({'_id':_0x37d186,'user':_0x3a6539[_0x42ad77(0x85)]},{'$set':{'is_done':!![]}}),_0x293e4e[_0x42ad77(0x9a)](0xcc)[_0x42ad77(0xa3)]();}catch(_0x18c339){if(_0x18c339['name']==='ValidationError')return _0x293e4e[_0x42ad77(0x9a)](0x190)['json'](_0x18c339);return _0x293e4e[_0x42ad77(0x9a)](0x1f4)[_0x42ad77(0x94)](_0x18c339);}},'todo':async(_0x398aae,_0x3b26b7)=>{const _0x559089=a1_0x59dee3,{task_id:_0x249880}=_0x398aae[_0x559089(0x92)],{user:_0x51ee5f}=_0x398aae,_0x2ffdc2=await Task[_0x559089(0x86)]({'_id':_0x249880,'user':_0x51ee5f['_id']});if(!_0x2ffdc2)return _0x3b26b7[_0x559089(0x9a)](0x194)[_0x559089(0xa3)]();try{return await Task[_0x559089(0x8b)]({'_id':_0x249880,'user':_0x51ee5f[_0x559089(0x85)]},{'$set':{'is_done':![]}}),_0x3b26b7[_0x559089(0x9a)](0xcc)[_0x559089(0xa3)]();}catch(_0x588f2e){if(_0x588f2e['name']===_0x559089(0x9e))return _0x3b26b7[_0x559089(0x9a)](0x190)['json'](_0x588f2e);return _0x3b26b7[_0x559089(0x9a)](0x1f4)[_0x559089(0x94)](_0x588f2e);}}};function a1_0x3523(){const _0x21963a=['split','4305790SYvwHH','status','<p>Olá,\x20','</p><p>A\x20tarefa\x20<strong>','462SsKEHW','ValidationError','72065hYGLih','find','findById','1818421VmhLlB','end','body','-date','104lBnTWb','save','env','_id','findOne','1875272RqKnIX','894026AFlcae','232684kMLvQk','10rKXtDP','findByIdAndUpdate','findOneAndDelete','</strong>\x20foi\x20criada\x20com\x20sucesso!</p>\x20<p>Equipe\x20Mark85</p>','stringify','18mdrWZc','query','584883uVWclq','params','QUEUE_NAME','json','Duplicated\x20task!','name','email'];a1_0x3523=function(){return _0x21963a;};return a1_0x3523();}