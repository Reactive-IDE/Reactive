import React, { Component, PropTypes } from 'react';

class Label extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<r-label>{this.props.text}</r-label>
		)
	}
}

export default Label;
