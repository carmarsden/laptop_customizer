import React, { Component } from 'react';
import './Summary.css';
import FeatureSummary from '../FeatureSummary/FeatureSummary';
import TotalPrice from '../TotalPrice/TotalPrice';


class Summary extends Component {
    render() {
        const total = 4050
        const summary = {  Processor: [
            {
              name: 'Professor X AMD Fire Breather with sidewinder technology',
              cost: 1200
            }
          ],
          "Operating System": [
            {
              name: 'Bodhi Linux',
              cost: 300
            }
          ],
          "Video Card": [
            {
              name: 'Mind mild breeze 2000',
              cost: 1345
            }
          ],
          Display: [
            {
              name: '15.3" HGTV (3840 x 2160) Home makeover edition',
              cost: 1400
            },
        ]}

        return (
            <section className="main__summary">
                <h3>NEW GREENLEAF 2018</h3>
                <p>summary</p>
                <div className="summary__total">
                    <div className="summary__total__label">Your Price: </div>
                    <div className="summary__total__value">
                        { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                            .format(total) }
                    </div>
                </div>
            </section>
        )
    }
}

export default Summary;