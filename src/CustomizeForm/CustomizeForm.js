import React, { Component } from 'react';
import './CustomizeForm.css';
import FeatureOptions from '../FeatureOptions/FeatureOptions';


class CustomizeForm extends Component {
    render() {
        const features = Object.keys(this.props.features)
        .map((key, index) => {
            return (
                <FeatureOptions
                    key={index}
                    featureKey={key}
                    currentFeature={this.props.features[key]}
                    selected={this.props.selected[key]}
                    handleUpdateFeature={this.props.handleUpdateFeature}
                />
            )
        });

        return (
            <section className="main__form">
                <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
                {features}
            </section>
        )
    }
}

export default CustomizeForm;