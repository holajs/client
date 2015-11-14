import React from 'react';
import { Link } from 'react-router';
import IndexLink from 'react-router/lib/IndexLink';
import 'babel-core/polyfill';

class Main extends React.Component{
	render() {
		return (
			<div>
				{React.cloneElement(this.props.children, {...this.props})}
			</div>
		)
	}
};

export default Main;
