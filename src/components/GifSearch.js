// const KEY = tjN7o5INAGZAj2UNOgepJ0jwk82a7YYf

import React, { Component } from 'react'

class GifSearch extends Component {
  state = {
    search: '',
  }

  //   handleChange = (event) => {
  //     console.log(event.target.value)
  //     this.setState({
  //       search: event.target.value,
  //     })
  //   }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.gimmeTheGifs(this.state.search)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label> Enter a Search Term: </label>
          <input
            type='text'
            id='search'
            value={this.state.search}
            name='search'
            onChange={(event) => this.setState({ search: event.target.value })}
          ></input>
          <button
            style={{
              backgroundColor: 'green',
              borderRadius: 5,
            }}
          >
            Find Gifs
          </button>
        </form>
      </div>
    )
  }
}

export default GifSearch
