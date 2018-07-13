import React, { Component, PropTypes } from 'react';
import Label from './Label';

class Button extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<button>
				ICON
				<Label text={this.props.children} />
			</button>
		)
	}
}

export default Button;
