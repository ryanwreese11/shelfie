import React, { Component } from 'react'

import Product from '../Product/Product'

export class Dashboard extends Component {
  render() {
    return (
      <div>
        Dashboard
        {this.props.products.map(product => {
          return <Product
            key={product.product_id} product={product}
            deleteProduct={this.props.deleteProduct} />
        })}
      </div>
    )
  }
}

export default Dashboard
