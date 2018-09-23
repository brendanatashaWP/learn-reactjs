import React, { Component } from 'react'
import SearchBar from '../components/SearchBar'
class App extends Component {
  constructor() {
    super()
    this.state = {
      loading: true
    }
  }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({loading: false})  
  //   }, 1000)
  // }

  handleTypeSearch = event => {
    this.setState({
      search: event.target.value
    })
    console.log(this.state.search)
  }

  render() {
    return (
      <SearchBar
        search = {this.state.search} 
        onChangeSearch = {this.handleTypeSearch}
      ></SearchBar>
      // <h1>loading: {JSON.stringify(this.state.loading)}</h1>
    )
  }
}
export default App