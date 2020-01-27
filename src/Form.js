import React, { Component } from 'react';
import slugify from 'slugify';
import Item from './Item'
import './App.css';

export default class Form extends Component {
    render() {
        const { USCurrencyFormat } = this.props
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = this.props.features[feature].map(item => {
                const itemHash = slugify(JSON.stringify(item));
                return (
                    <Item
                        USCurrencyFormat={USCurrencyFormat}
                        feature={feature}
                        itemHash={itemHash}
                        item={item}
                        updateFeature={this.props.updateFeature}
                    />
                );
            });

            return (
                <fieldset className="feature" key={featureHash}>
                    <legend className="feature__name">
                        <h3>{feature}</h3>
                    </legend>
                    {options}
                </fieldset>
            );
        });
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {features}
            </form>
        )
    }
}