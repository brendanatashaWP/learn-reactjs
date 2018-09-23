import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      loading: true
    }
  }
  render() {
    return (
      <h1>loading: {JSON.stringify(this.state.loading)}</h1>
    )
  }
}
export default App