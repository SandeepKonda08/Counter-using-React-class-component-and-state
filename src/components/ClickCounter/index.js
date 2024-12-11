// Write your code here
import './index.css'
import {Component} from 'react'

class ClickCounter extends Component {

  onincrement = () => {
    console.log("event clicked")
    this.setState(prev => {
      console.log(prev.counter)
      return {counter: prev.counter + 1}
    })
  }

  state = {counter:0}
  render() {
    const {counter} = this.state ;
    return (
      <div className="bg-container">
        <h1 className="heading">
          The Button has been clicked
          <br />
          <span className="spec"> {counter} </span>
          times
        </h1>
        <p className="para">Click the button to increase the count!</p>
        <button onClick = {this.onincrement} className="button">Click Me</button>
      </div>
    )
  }
}

export default ClickCounter
