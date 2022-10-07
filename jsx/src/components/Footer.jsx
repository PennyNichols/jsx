import React, { Component } from 'react'

class Footer extends Component {

  state = {
    age: 27, 
    name: 'John', 
    text: 'Copy Rights',
    counter: 0
  }

  render() {
    return (
      <div className="bg-dark text-center d-flex justify-content-between">
        <p className='text-light'> { this.state.counter}</p>
        <button className="btn-light btn"
          onClick={ () => { this.setState({ ...this.state, counter: this.state.counter+1 }) } }>
          Increase Counter</button>
      </div>
    )
  }
}

export default Footer