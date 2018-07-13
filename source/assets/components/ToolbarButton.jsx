import React, { Component, PropTypes } from 'react';
import Label from './Label';
import Icon from './Icon';

class ToolbarButton extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<r-toolbarbutton data-active={this.props.active}>
				<Icon source={this.props.icon} />
				<Label text={this.props.title} />
			</r-toolbarbutton>
		)
	}
}

export default ToolbarButton;
