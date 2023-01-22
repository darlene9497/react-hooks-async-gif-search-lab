import { useState, useEffect } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

function GifListContainer() {
    const [gifs, setGifs] = useState([]);
    const [search, setSearch] = useState('dolphins');

    const apiKey = 'RnjLpIZH9LhjQU3Ry88Opv5LbtX2B5Zk';
    
    useEffect(() => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${apiKey}&rating=g`)
        .then(response => response.json())
        .then(({ data }) => {
            setGifs(data.map(gif => ({ url: gif.images.original.url })));
        });
    }, [search]);
    
    return (
        <div>
        <GifSearch search={search} setSearch={setSearch} />
        <GifList gifs={gifs} />
        </div>
    );
    }

export default GifListContainer;