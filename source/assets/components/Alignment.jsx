import React, { Component, PropTypes } from 'react';

class Alignment extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<r-alignment data-position={this.props.position}>{this.props.children}</r-alignment>
		)
	}
}

export default Alignment;
