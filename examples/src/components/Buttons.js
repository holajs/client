import React from 'react';
import Components, { Component, EventHandler } from 'hola-client';
let { Button } = Components;

class Buttons extends React.Component {
	constructor() {
		super();
		this.handler = EventHandler.create();
	}
	render() {
		this.handler
			.subscribe(event => console.log('ok'));

		return (
			<div>
				<h1>Buttons</h1>
				<Button type="primary" label="Accept" onClick={this.handler} />
			</div>
		)
	}
}

export default Buttons;
