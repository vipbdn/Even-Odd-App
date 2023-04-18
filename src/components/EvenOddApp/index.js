import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {number: 0}

  onIncrement = () => {
    const randomNumber = Math.ceil(Math.random() * 100)

    this.setState(prevState => ({number: prevState.number + randomNumber}))
  }

  render() {
    const {number} = this.state
    const noType = number % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="app-container">
        <div className="main-container">
          <h1 className="heading">Count {number}</h1>
          <p className="description">Count is {noType}</p>
          <button type="button" className="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="description-2">
            *Increase by random number between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
