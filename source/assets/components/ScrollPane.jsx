import React, { Component, PropTypes } from 'react';

class ScrollPane extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<r-scrollpane data-empty={this.props.empty}>{this.props.children}</r-scrollpane>
		)
	}
}

export default ScrollPane;
