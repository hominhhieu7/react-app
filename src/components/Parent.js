import React, { Component } from 'react'

export default class Parent extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

