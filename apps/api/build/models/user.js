const a5_0x59da9e = a5_0x15cc;
(function(_0x3c7dda, _0x508f74) {
    const _0xb070cf = a5_0x15cc,
        _0x598244 = _0x3c7dda();
    while (!![]) {
        try {
            const _0x416c77 = parseInt(_0xb070cf(0xa1)) / 0x1 + -parseInt(_0xb070cf(0xa9)) / 0x2 * (-parseInt(_0xb070cf(0xab)) / 0x3) + parseInt(_0xb070cf(0xa6)) / 0x4 * (-parseInt(_0xb070cf(0xa5)) / 0x5) + parseInt(_0xb070cf(0xae)) / 0x6 * (-parseInt(_0xb070cf(0xa2)) / 0x7) + parseInt(_0xb070cf(0xa8)) / 0x8 + parseInt(_0xb070cf(0xa7)) / 0x9 + -parseInt(_0xb070cf(0xa4)) / 0xa * (parseInt(_0xb070cf(0xad)) / 0xb);
            if (_0x416c77 === _0x508f74) break;
            else _0x598244['push'](_0x598244['shift']());
        } catch (_0x44731c) {
            _0x598244['push'](_0x598244['shift']());
        }
    }
}(a5_0x559f, 0x94dad));
import a5_0x5c2871 from 'mongoose';
let User = new a5_0x5c2871[a5_0x59da9e(0xac)]({
    'name': {
        'type': String
    },
    'email': {
        'type': String,
        'unique': !![]
    },
    'password': {
        'type': String
    },
    'username': { // New column added
        'type': String,
        'required': true
    },
    'password_hash': { // New column added
        'type': String,
        'required': true
    },
    'last_login': { // This line is added from the new code
        'type': Date,
        'default': null
    }
}, {
    'versionKey': ![]
});
User.hasMany(a5_0x5c2871.model('LoginAttempt'), { foreignKey: 'user_id' });
User.hasMany(a5_0x5c2871.model('PasswordRecovery'), { foreignKey: 'user_id' });

export default a5_0x5c2871[a5_0x59da9e(0xa3)](a5_0x59da9e(0xaa), User);

function a5_0x15cc(_0x607053, _0x5198c1) {
    const _0x559f9e = a5_0x559f();
    return a5_0x15cc = function(_0x15ccc7, _0x40615f) {
        _0x15ccc7 = _0x15ccc7 - 0xa1;
        let _0x4e0b62 = _0x559f9e[_0x15ccc7];
        return _0x4e0b62;
    }, a5_0x15cc(_0x607053, _0x5198c1);
}

function a5_0x559f() {
    const _0x2d5289 = ['17021910mFHyiY', '5aWRaOZ', '3997104GomNjc', '5579280fhzHcc', '7381952bbSutu', '66pNpvbq', 'User', '79671iqjBny', 'Schema', '11OfwmBl', '12RJoMzl', '1033455ipUkql', '494634jARhTU', 'model'];
    a5_0x559f = function() {
        return _0x2d5289;
    };
    return a5_0x559f();
}