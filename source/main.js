'use strict';

/* Includes */
const Path				= require('path');
const Electron			= require('electron');
const Application		= Electron.app;
const Logger			= require('./classes/Logger');
const WindowManager		= require('./classes/WindowManager');
const Workspace			= require('./classes/Workspace');
const IPC				= Electron.ipcMain;

/* Globals */
global.Windows		= {};
global.Paths		= {
	APPLICATION:	Path.join(__dirname, 'assets')
};

/* API */
Application.on('window-all-closed', function OnClose() {
	if(process.platform != 'darwin') {
		Application.quit();
	}
});

Application.on('ready', function OnReady() {
	Application.commandLine.appendSwitch('js-flags', '--harmony');
	Application.commandLine.appendSwitch('--enable-experimental-web-platform-features');
	
	Logger.info('Reactive initializing...');
	
	//registerHandlers();
	IPC.on('project', (event, args) => {
		switch(args) {
			case 'get':
				event.sender.send('project', 'load');
				
				Workspace.list('D:/WhatsNear', function OnSuccess(files, directory) {
					event.sender.send('project', {
						directory:	directory,
						files:		files
					});
				});
			break;
		}
	});
	
	const Screen		= Electron.screen;
	const Size			= Screen.getPrimaryDisplay().workAreaSize;
	global.WindowSize	= Size;
	global.Version		= Application.getVersion();
	
	//installDevTools()
	WindowManager.create(800, 600, true);
});