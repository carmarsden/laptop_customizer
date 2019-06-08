import React, { Component } from 'react';
import './Summary.css';
import FeatureSummary from '../FeatureSummary/FeatureSummary';
import TotalPrice from '../TotalPrice/TotalPrice';


class Summary extends Component {
    render() {
        const summary = Object.keys(this.props.selected).map((key, index) => {
            return (
                <FeatureSummary
                    key={index}
                    featureKey={key}
                    selected={this.props.selected[key]}
                />
            )
        })

        return (
            <section className="main__summary">
                <h3>NEW GREENLEAF 2018</h3>
                {summary}
                <TotalPrice 
                    selected={this.props.selected}
                />
            </section>
        )
    }
}

export default Summary;