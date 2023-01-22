import React from "react";

function GifList(props) {
    return (
        <div>
        <ul>
            {props.gifs.map(gif => (
            <li key={gif.url}>
                <img src={gif.url} alt="gif" />
            </li>
            ))}
        </ul>
        </div>
    );
}

export default GifList;