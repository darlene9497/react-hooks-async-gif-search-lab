import { useState }from "react";

function GifSearch({search, setSearch}) {
    const [query, setQuery] = useState('');

    function handleQuerySearch(e) {
        setQuery(e.target.value);
    }

    function handleSearchChange(e) {
        e.preventDefault();
        setSearch(query);
    }

    return (
        <div>
            <form onSubmit={handleSearchChange}>
                <input type="text" value={query} onChange={handleQuerySearch} />
                <button type="submit">Find Gifs</button>
            </form>
        </div>
    );
}

export default GifSearch;