import React from 'react'

export const GifItem = ({title, url}) => {


  return (
    <div className='card'>
        <img src={url} alt={title} height={180}/>
        <p>{title}</p>
    </div>
  )
}
