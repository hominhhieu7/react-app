import React, { Component } from 'react'
import Parent from './Parent';

export default class Children extends Component {
  render() {
    return (
      <div>
        <Parent>
            <h1>1</h1>
        </Parent>
      </div>
    )
  }
}
