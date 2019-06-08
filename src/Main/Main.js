import React, { Component } from 'react';
import './Main.css';
import CustomizeForm from '../CustomizeForm/CustomizeForm';
import Summary from '../Summary/Summary';

class Main extends Component {
    render() {
        return (
            <main>
                <CustomizeForm 
                    features={this.props.features}
                    selected={this.props.selected}
                    handleUpdateFeature={this.props.handleUpdateFeature}/>
                <Summary 
                    selected={this.props.selected}/>
            </main>
        )
    }
}

export default Main;