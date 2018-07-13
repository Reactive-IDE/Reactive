import React, { Component, PropTypes } from 'react';

class Header extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<r-header>{this.props.children}</r-header>
		)
	}
}

export default Header;
