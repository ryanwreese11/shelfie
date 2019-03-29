import React, { Component } from 'react'

export class Form extends Component {
  constructor() {
    super()

    this.state = {
      product_name: '',
      price: '',
      image_url: ''
    }
  }

  handleCancelClick = () => {
    this.setState = ({
      product_name: '',
      price: '',
      imag_url: '',
    })
  }

  handleChange = e => {
    let { name, value } = e.target

    this.setState({
      [name]: value
    })
  }

  handleClick = () => {
    let product = this.state

    this.props.createProduct(product)
    
  }

  render() {
    console.log(this.props.products)
    return (
      <div>
        <div>Place holder for image</div>
        <div>Image URL:</div>
        <div>
          <input type="text" name="image_url" onChange={this.handleChange}/>
        </div>
        <div>Product Name:</div>
        <div>
        <input  type="text" name="product_name" onChange={this.handleChange}/>
        </div>
        <div>Price:</div>
        <div>
        <input type="number" name="price" onChange={this.handleChange}/>
        </div>
        <div>
          <button onClick={this.handleCancelClick}>Cancel</button>
          <button onClick={this.handleClick}>Add to Inventory</button>
        </div>
        Form
      </div>
    )
  }
}

export default Form
