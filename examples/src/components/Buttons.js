import React from 'react';
import Components, { Component } from 'hola-client';

let { Button } = Components;

class Buttons extends React.Component {
	handleClick() {
		console.log("...clicked");
	}
	render() {
		return (
			<div>
				<h1>Buttons</h1>
				<Button type="primary" label="Accept" onClick={this.handleClick} />
			</div>
		)
	}
}

export default Buttons;
