var exec = require('cordova/exec');

exports.echo = function(arg0, success, error) {
    exec(success, error, "ModusEcho", "echo", [arg0]);
};

exports.echojs = function(arg0, success, error) {
	// Do something to check arg0...
    if (arg0 && typeof(arg0) === 'string' && arg0.length > 0) {
	   success(arg0);
    } else {
        error('Empty message!');
    }
};
