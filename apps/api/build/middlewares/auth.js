'use strict';const a3_0x2506e3=a3_0x5cba;function a3_0x5cba(_0x41c95c,_0x388a24){const _0x2d5d7e=a3_0x2d5d();return a3_0x5cba=function(_0x5cba08,_0x38d7cf){_0x5cba08=_0x5cba08-0x15b;let _0xcf9bb4=_0x2d5d7e[_0x5cba08];return _0xcf9bb4;},a3_0x5cba(_0x41c95c,_0x388a24);}(function(_0x1c3ecb,_0x58583f){const _0x45b8e2=a3_0x5cba,_0x1a2af2=_0x1c3ecb();while(!![]){try{const _0x45c093=parseInt(_0x45b8e2(0x164))/0x1*(parseInt(_0x45b8e2(0x15f))/0x2)+parseInt(_0x45b8e2(0x16c))/0x3+parseInt(_0x45b8e2(0x15d))/0x4*(-parseInt(_0x45b8e2(0x168))/0x5)+parseInt(_0x45b8e2(0x163))/0x6+parseInt(_0x45b8e2(0x16a))/0x7+-parseInt(_0x45b8e2(0x15c))/0x8*(parseInt(_0x45b8e2(0x162))/0x9)+-parseInt(_0x45b8e2(0x15e))/0xa;if(_0x45c093===_0x58583f)break;else _0x1a2af2['push'](_0x1a2af2['shift']());}catch(_0xd75c20){_0x1a2af2['push'](_0x1a2af2['shift']());}}}(a3_0x2d5d,0x8b9e3));function a3_0x2d5d(){const _0x5a6081=['verify','end','user','110fpdMvG','default','1010471LiLqYE','split','3242484bdMQkf','qax','533576lIeQYc','44196cFaiLV','8052470ZoGsPh','5692zGqWHd','json','status','144edtJFH','2471982UQirgj','369icTMzs'];a3_0x2d5d=function(){return _0x5a6081;};return a3_0x2d5d();}import a3_0x4de5d9 from'jsonwebtoken';import{promisify}from'util';import User from '../../models/user';Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports[a3_0x2506e3(0x169)]=async(_0x406c8c,_0x22dbd1,_0x4190db)=>{const _0x24703e=a3_0x2506e3,{authorization:_0x288b1d}=_0x406c8c['headers'];if(!_0x288b1d)return _0x22dbd1[_0x24703e(0x161)](0x191)[_0x24703e(0x166)]();const [_0x53888e]=_0x288b1d[_0x24703e(0x16b)]('\x20');try{const _0x34b365=await promisify(a3_0x4de5d9[_0x24703e(0x165)])(_0x53888e,_0x24703e(0x15b));_0x406c8c[_0x24703e(0x167)]=_0x34b365[_0x24703e(0x167)],_0x406c8c['id']=_0x34b365['id'];}catch(_0x17c65f){return _0x22dbd1[_0x24703e(0x161)](0x191)[_0x24703e(0x160)]({'error':'Expired\x20or\x20incorrect\x20token'});}return _0x4190db();};