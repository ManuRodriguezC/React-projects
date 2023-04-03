import React, {useState, useEffect} from 'react'
import Gif from './Gif'
import getGifs from '../services/getGifs'

export default function ListOfGifs({params}) {
    const {keyword} = params
    const {numImg} = params
    const [gifs, setGifs] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(function () {
        setLoading(true)
        getGifs({keyword, numImg}).then(gifs => {
            setGifs(gifs)
            setLoading(false)
        })
    }, [keyword])  

    if (loading) return <i>🪃 Cargando</i>
    return <div>
        {
            gifs.map(({id, url, title}) =>
                <Gif
                key={id}
                title={title}
                url={url}
                id={id}
            />
            )
        }
    </div>
} 