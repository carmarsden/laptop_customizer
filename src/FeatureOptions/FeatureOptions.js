import React, { Component } from 'react';
import './FeatureOptions.css';

class FeatureOptions extends Component {
    render() {
        const options = this.props.currentFeature.map((item, index) => {
            const selectedClass = item.name === this.props.selected.name ? 'feature__selected' : '';
            const featureClass = 'feature__option ' + selectedClass;
            return (
                <li key={index} className="feature__item">
                    <div 
                        className={featureClass}
                        onClick={e => this.props.handleUpdateFeature(this.props.featureKey, item)}>
                        { item.name }
                        ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                            .format(item.cost) })
                    </div>
                </li>
            )
        });  

        return (
            <div className="feature" key={this.props.featureKey}>
                <div className="feature__name">{this.props.featureKey}</div>
                <ul className="feature__list">
                { options }
                </ul>
            </div>
        )
    }
}

export default FeatureOptions;