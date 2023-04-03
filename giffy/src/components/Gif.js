import React from 'react'
import './Gif.css'

export default function Gif ({ title, id, url}) {
    return (
        <a href={`${id}`} className="Gif">
            <img src={url} alt={title}/>
            <h1>{title}</h1>
        </a>
    )
}