import React, { Component } from 'react'

class Footer extends Component {
  state = {
    age: 27,
    name: 'John',
    text: 'Copy Rights'
  }


  render() {
    return (
      <div className="bg-dark text-center d-flex justify-content-center">
        <p>{this.state.text}</p>
        <button className='btn-light btn' onChange={() =>{ this.setState({...this.state, text: 'New Text'})}} >Change Text</button>
      </div>
    )
  }
}

export default Footer