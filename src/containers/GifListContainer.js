import React, { Component } from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends Component {
  state = {
    gifs: [],
  }

  gimmeTheGifs = (search) => {
    console.log(this.state.gifs)
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=tjN7o5INAGZAj2UNOgepJ0jwk82a7YYf`
    )
      .then((resp) => resp.json())
      .then((data) => {
        const urls = data.data.map((object) => object.url)
        this.setState({ gifs: urls })
      })
  }

  componentDidMount() {
    this.gimmeTheGifs()
  }

  render() {
    return (
      <div>
        <GifSearch gimmeTheGifs={this.gimmeTheGifs} />
        <GifList urls={this.state.gifs} />
      </div>
    )
  }
}
