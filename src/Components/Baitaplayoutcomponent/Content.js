import React, { Component } from 'react'
import Carousel from './Carousel.js'
import ProductList from './ProductList.js'


export default class Content extends Component {
  render() {
    return (
        <div className="container">
        <Carousel.js />
        <ProductList.js />
    </div>
    )
  }
}
