import React, { Component, PropTypes } from 'react';

class Window extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<r-window>{this.props.children}</r-window>
		)
	}
}

export default Window;
