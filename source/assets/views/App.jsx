import React, { Component } from 'react';
import ReactDOM from 'react-dom';

require('../sass/App.scss');

import Toolbar from '../components/Toolbar';
import Alignment from '../components/Alignment';
import ToolbarButton from '../components/ToolbarButton';
import Window from '../components/Window';
import Workspace from '../components/Workspace';

ReactDOM.render(
	<Window>
		<Toolbar title="Project">
			<Alignment position="Left">
				<ToolbarButton icon="project" active="true" title="Project" />
				<ToolbarButton icon="console" active="true" title="Console" />
				<ToolbarButton icon="properties" active="true" title="Properties" />
			</Alignment>
			<Alignment position="Middle">
				<ToolbarButton icon="debug" title="Run" />
				<ToolbarButton icon="refresh" title="Refresh" />
			</Alignment>
			<Alignment position="Right">
				<ToolbarButton icon="docs" title="Docs" />
				<ToolbarButton icon="settings" title="Settings" />
			</Alignment>
		</Toolbar>
		<Workspace />
	</Window>,
	document.querySelector('r-app')
)