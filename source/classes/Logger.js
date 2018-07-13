'use strict';

const Application	= require('electron').app;
const Path			= require('path');

module.exports = (new function Logger() {
	this.time = function time() {
		var date	= new Date();
		var hour	= date.getHours();
		var min		= date.getMinutes();
		var sec		= date.getSeconds();
		var year	= date.getFullYear();
		var month	= date.getMonth() + 1;
		var day		= date.getDate();
		
		hour		= (hour < 10 ? '0' : '') + hour;
		min			= (min < 10 ? '0' : '') + min;
		sec			= (sec < 10 ? '0' : '') + sec;
		month		= (month < 10 ? '0' : '') + month;
		day			= (day < 10 ? '0' : '') + day;

		return year + ':' + month + ':' + day + ':' + hour + ':' + min + ':' + sec;
	};
	
	this.create = function create() {
		var file = Path.join(Application.getPath('appData'), 'Reactive', 'debug.log');
		
		arguments[0] = '[' + arguments[0] + ']';
		arguments[1] = arguments[1] + ' -';
		console.log.apply(this, arguments);
	};
	
	this.log = function log() {
		this.create.apply(this, [ ...[ 'LOG', this.time() ], ...arguments ]);
	};
	
	this.info = function info() {
		this.create.apply(this, [ ...[ 'INFO', this.time() ], ...arguments ]);
	};
	
	this.warn = function warn() {
		this.create.apply(this, [ ...[ 'WARN', this.time() ], ...arguments ]);
	};
	
	this.error = function error() {
		this.create.apply(this, [ ...[ 'ERROR', this.time() ], ...arguments ]);
	};
	
	this.debug = function debug() {
		this.create.apply(this, [ ...[ 'DEBUG', this.time() ], ...arguments ]);
	};
}());
