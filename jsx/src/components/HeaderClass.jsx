import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div style={ { backgroundColor: this.props.bg } }>
        <h1>{ this.props.title }</h1>
      </div>
    );
  }
}


export default Header;