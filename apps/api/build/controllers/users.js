(function(_0x113c01,_0xa7b6b){const _0x5a8084=a2_0x49d3,_0x1ef3e5=_0x113c01();while(!![]){try{const _0x1b4913=parseInt(_0x5a8084(0xec))/0x1*(-parseInt(_0x5a8084(0xf5))/0x2)+parseInt(_0x5a8084(0xf0))/0x3+-parseInt(_0x5a8084(0xef))/0x4+parseInt(_0x5a8084(0xee))/0x5*(-parseInt(_0x5a8084(0xf3))/0x6)+-parseInt(_0x5a8084(0xff))/0x7+-parseInt(_0x5a8084(0xf9))/0x8+-parseInt(_0x5a8084(0xf2))/0x9*(-parseInt(_0x5a8084(0xf7))/0xa);if(_0x1b4913===_0xa7b6b)break;else _0x1ef3e5['push'](_0x1ef3e5['shift']());}catch(_0xa7d34b){_0x1ef3e5['push'](_0x1ef3e5['shift']());}}}(a2_0x450e,0xde13e));import User from'../models/user';import a2_0x1ad0b4 from'bcrypt';import a2_0x4bdf9e from'jsonwebtoken';import a2_0x5e5b3c from'../models/login_attempt';

function a2_0x450e(){const _0x470801=['findOne','status','ValidationError','10d','json','7160251hIWepT','1513aKdahM','hash','25OsIKtR','5219064gWdfhC','1896462NgWLWU','password','7077690KYzGpM','2097954ucxiZa','sign','2294PmWQBb','save','90VcoGmI','end','7910792agNDYc'];a2_0x450e=function(){return _0x470801;};return a2_0x450e();}function a2_0x49d3(_0x1d1ab1,_0x46d0fb){const _0x450e29=a2_0x450e();return a2_0x49d3=function(_0x49d316,_0x28cc0b){_0x49d316=_0x49d316-0xec;let _0x4b3ec7=_0x450e29[_0x49d316];return _0x4b3ec7;},a2_0x49d3(_0x1d1ab1,_0x46d0fb);}

export default {
  'auth': async (_0x4b7506, _0x391272) => {
    const _0x377859 = a2_0x49d3;
    const { username: _0x5bf22f, password: _0x5e0091 } = _0x4b7506['body'];
    const _0xcda4e8 = await User[_0x377859(0xfa)]({ 'username': _0x5bf22f });
    if (!_0xcda4e8) return _0x391272[_0x377859(0xfb)](0x191)[_0x377859(0xf8)]();
    if (!await a2_0x1ad0b4['compare'](_0x5e0091, _0xcda4e8['password_hash'])) return _0x391272['status'](0x191)[_0x377859(0xf8)]();
    const { id: _0x5198ce } = _0xcda4e8;
    // Record successful login attempt
    const _0xloginAttempt = new a2_0x5e5b3c({
      attempt_time: new Date(),
      success: true,
      user_id: _0x5198ce
    });
    await _0xloginAttempt.save();
    // Generate session token
    const _0xsessionToken = a2_0x4bdf9e[_0x377859(0xf4)]({ 'id': _0x5198ce }, 'secret', { expiresIn: '2h' });
    // Update last login
    _0xcda4e8.last_login = new Date();
    await _0xcda4e8.save();
    return _0x391272['json']({ 'token': _0xsessionToken, 'userId': _0x5198ce });
  },
  // ... other methods ...
};