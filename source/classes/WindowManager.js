'use strict';

const { BrowserWindow } = require('electron');
const Path				= require('path');
const FileSystem		= require('fs');

module.exports = (new function WindowManager() {
	const WindowManager = this;
	
	this.create = function create(width, height, show) {
		return new Promise((resolve, reject) => {
			var window = new BrowserWindow({
				width:			width || global.WindowSize.width,
				height:			height || global.WindowSize.height,
				show:			false,
				titleBarStyle:	'hidden-inset',
				icon:			Path.join(Paths.APPLICATION, '/icons/reactive.png'),
				webPreferences: {
					experimentalFeatures: true
				}
			});

			this.add(window);

			window.webContents.on('did-finish-load', function() {
				resolve();
				
				if(show) {
					window.show();
				}
			})
		});
	};
	
	this.add = function add(window) {
		window.webContents.session.clearCache(function OnClearCache() {});
		window.setTitle('Reactive');
		window.loadURL(this.getBase());

		var id				= new Date().getTime().toString();
		global.Windows[id]	= window;

		window.on('close', (e) => {
			if(!WindowManager.close()) {
				e.preventDefault();
			}
		});

		window.on('closed', () => {
			delete global.Windows[id];
			
			if(global.Preferences) {
				global.Preferences.destroy();
				global.Preferences = null;
			}
		})
	};
	
	this.close = function close() {
		/*const watchedPath = fileHandler.getWatchedPath()
		
		if(watchedPath == TEMP_PROJECT_FOLDER) {
			return dialog.showMessageBox(QUESTION.shouldLoseTemporaryDirectory) == 0
		}
		
		if(projectHandler.hasUnsavedProgress()) {
			return dialog.showMessageBox(QUESTION.shouldLoseUnsavedProgress) == 0
		}*/

		return true;
	};
	
	this.getBase = function getBase() {
		var localFile = Path.join(Paths.APPLICATION, 'html', 'index.html')
		
		if(global.__DEV__) {
			return 'http://0.0.0.0:8080/'
		} else {
			return 'file://' + localFile
		}
	};
}());
