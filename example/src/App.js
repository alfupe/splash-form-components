import React, { Component } from 'react';
import {ColoredHeadingOne, ColoredHeadingTwo, ColoredHeadingThree} from 'splash-form-components';

export default class App extends Component {
    render() {
        return (
            <div>
                <ColoredHeadingOne text="Main title" color="blue"/>
                <ColoredHeadingTwo text="Secondary title" color="red"/>
                <ColoredHeadingThree text="Tertiary title" color="purple"/>
            </div>
        )
    }
}
