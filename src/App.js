import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'


class App extends Component {
  constructor() {
    super ()
    this.state = {
      products: []
    }
  }
  
  
  
  createProduct = product => {
    axios.post('/api/products', product).then(res => {
      
    }).catch(err => console.log('Shit', err))
  }
  
  deleteProduct = id => {
    axios.delete(`/api/products/${id}`, id).then(res => {
      console.log(res)
      
    }).catch(err => console.log('there was an error.', err))
  }

  updateProduct = product => {
    axios.put(`/api/products/${product.product_id}`, product).then(res => {
      console.log(res)
      this.setState({
        products: res.data
      })
      
    }).catch(err => console.log('there was an error.', err))
  }
  
  componentDidMount() {
    axios.get('/api/products').then(res => {
      this.setState({
        products: res.data
      })
      console.log(res.data)
    }).catch(err => {
      console.log('we have an issue', err)
    })
  }


  render() {
    return (
      <div className="App">
        <div>
          <Header />
        </div>
        <div>
          <Dashboard
          products={this.state.products}
          deleteProduct={this.deleteProduct} />
        </div>
        <div>
          <Form 
          createProduct={this.createProduct}/>
        </div>

      </div>
    );
  }
}

export default App;
