import React, { Component } from 'react'



export class Product extends Component {
  constructor(props){
    super(props)

    this.state= {
      product_id: props.product.product_id,
      product_name: props.product.product_name,
      price: props.product.price,
      image_url: props.product.image_url,
      edit: false
    }


  }
 

  handleDeleteClick = (e) => {
    this.setState({
      edit: true
    }, () => this.props.deleteProduct(this.state.product_id))
    
  }

  
  render() {
    return (
      <div>
        
       {this.props.product.product_name}
       <button>Edit</button>
       <button onClick={this.handleDeleteClick}>Delete</button>
      </div>
    )
  }
}

export default Product
