import React, { Component, PropTypes } from 'react';
import Label from './Label';
import Alignment from '../components/Alignment';

class Toolbar extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<r-toolbar>
				<Label text={this.props.title}></Label>
				<Alignment position="Main">
					{this.props.children}
				</Alignment>
			</r-toolbar>
		)
	}
}

export default Toolbar;
