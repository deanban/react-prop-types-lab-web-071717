// Code Product Component Here
import React from 'react'
import PropTypes from 'prop-types'

class Product extends React.Component {

  render() {
    return (
      <div>
        <ul>
          <li>Product: {this.props.name}</li>
          <li>Producer: {this.props.producer}</li>
          <li>Watermark: {this.props.hasWatermark}</li>
          <li>Color: {this.props.color}</li>
          <li>Weight: {this.props.weight}</li>
        </ul>
      </div>
    )
  }
}

Product.defaultProps = {
	hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight(props, propName){
      if (!props[propName]){
        return new Error("no weight included")
      }
      else if (isNaN(props[propName])){
        return new Error("weight is not a number")
      }
      if ( props[propName] < 80 || props[propName] > 300){    
        return new Error ("invalid weight")
    }
  }
}

export default Product