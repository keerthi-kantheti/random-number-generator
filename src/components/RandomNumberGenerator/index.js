// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  generateNumber = () => {
    const b = Math.ceil(Math.random() * 99)
    this.setState({count: b})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="counter-container">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a Random Number in the range of 0 to 100
          </p>
          <button
            className="generate-button"
            type="button"
            onClick={this.generateNumber}
          >
            Generate
          </button>
          <p className="count">{count}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
