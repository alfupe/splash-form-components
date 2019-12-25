import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ColoredHeadingThree extends Component {
    static propTypes = {
        text: PropTypes.string,
        color: PropTypes.string
    };

    render() {
        const {text, color} = this.props;

        return (
            <h3 style={{color}}>{text}</h3>
        );
    }
}
