import React, { Component, PropTypes } from 'react';

class FileTree extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			directory:	this.props.directoy || null,
			files:		this.props.files || []
		};
	}

	componentDidMount() {
		if(!this.props.isMain) {
			return;
		}
		
		const instance = this;
		
		IPC.send('project', 'get');
		IPC.on('project', (event, args) => {
			switch(args) {
				case 'load':
					console.info('FileTree is loading...');				
				break;
				default:
					instance.setState({
						directory:	args.directory,
						files:		args.files
					});
				break;
			}
		});
	}
	
	componentWillUnmount() {
		
	}
	
	render() {
		const files = this.state.files;
		
		return (
			<r-filetree>
				{files && files.map(file => {
					if(file.isDirectory) {
						return <r-directory key={file.path + file.name + ' Directory'}>{`${file.name}`} <FileTree directory={file.path} files={file.files} /></r-directory>;
					} else {
						return <r-file key={file.path + file.name}>{`${file.name}`}</r-file>;
					}
				})}
			</r-filetree>
		)
	}
}

export default FileTree;
