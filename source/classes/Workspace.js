'use strict';

const Path				= require('path');
const FileSystem		= require('fs');

module.exports = (new function Workspace() {
	var walk = function(dir, callback) {
		var results = [];
		
		FileSystem.readdir(dir, function(err, list) {
			if(err) {
				return callback(err);
			}
			
			var pending = list.length;
			
			if(!pending) {
				return callback(null, results);
			}
			
			list.forEach(function(file) {
				file = Path.resolve(dir, file);
				
				FileSystem.stat(file, function(err, stat) {
					if(stat && stat.isDirectory()) {
						walk(file, function(err, res) {
							results = results.concat({
								name:			Path.basename(file),
								path:			Path.dirname(file),
								isDirectory:	stat.isDirectory(),
								isFile:			stat.isFile(),
								files:			res
							});
							
							if(!--pending) {
								callback(null, results);
							}
						});
					} else {
						results.push({
							name:			Path.basename(file),
							path:			Path.dirname(file),
							isDirectory:	stat.isDirectory(),
							isFile:			stat.isFile()
						});
						
						if(!--pending) {
							callback(null, results);
						}
					}
				});
			});
		});
	};

	this.list = function list(directory, callback) {
		walk(directory, function(err, results) {
			if(err) {
				throw err;
			}
			
			callback(results, directory);
		});
	};
}());
