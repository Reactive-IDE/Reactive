import React, { Component, PropTypes } from 'react';

class Icon extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<r-icon name={this.props.source} />
		)
	}
}

export default Icon;
