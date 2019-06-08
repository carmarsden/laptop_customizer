import React, { Component } from 'react';
import './FeatureSummary.css';

class FeatureSummary extends Component {
    render() {
        return (
            <div className="summary__option" key={this.props.featureKey}>
                <div className="summary__option__label">{this.props.featureKey}</div>
                <div className="summary__option__value">{this.props.selected.name}</div>
                <div className="summary__option__cost">
                    { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                        .format(this.props.selected.cost) }
                </div>
            </div>
        )
    }
}

export default FeatureSummary;