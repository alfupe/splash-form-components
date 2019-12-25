import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './colored-heading-one.scss';

export default class ColoredHeadingOne extends Component {
    static propTypes = {
        text: PropTypes.string,
        color: PropTypes.string
    };

    render() {
        const {text, color} = this.props;

        return (
            <h1 className="colored-heading-one" style={{color}}>{text}</h1>
        );
    }
}
