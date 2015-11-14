import React, { Component } from 'react';

class HolaComponent extends Component {
    _bind(...methods) {
        for (let method of methods) {
            if (this[method]) {
                this[method] = this[method].bind(this);
            }
        }
    }
}

export default HolaComponent;
