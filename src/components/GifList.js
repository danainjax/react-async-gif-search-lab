import React from 'react'

export default function GifList(props) {
  console.log(props.urls)

  return (
    <div>
      <h1>Put the GIFS here</h1>
      {props.urls.map((url) => (
        <img src={url} alt={url} />
      ))}
    </div>
  )
}
