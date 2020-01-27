import React, { Component } from 'react'
import slugify from 'slugify';

export default class Item extends Component {
    render() {
        const { USCurrencyFormat } = this.props
        const { feature } = this.props
        const { itemHash } = this.props
        const { item } = this.props
        return (
            <div key={itemHash} className="feature__item">
                <input
                    type="radio"
                    id={itemHash}
                    className="feature__option"
                    name={slugify(feature)}
                    checked={item.name === this.props.selected[feature].name}
                    onChange={e => this.props.updateFeature(feature, item)}
                />
                <label htmlFor={itemHash} className="feature__label">
                    {item.name} ({USCurrencyFormat.format(item.cost)})
                  </label>
            </div>
        )
    }
}