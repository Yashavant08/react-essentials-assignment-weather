import React, {useState} from "react";

function SearchBar ({ onSearch}) {

    const[city, setCity] = useState('');
    

    const handleSearch = () => {
        if (city.trim() !== '') {
            onSearch(city);
        }
    }
    
    return(
        <div className="search-bar">
            <div className="search-input-wrapper">
                <span className="search-icon">🔍</span>
            
            <input className="search-input"
        type="text"
        placeholder="Enter City Name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        />
        </div>
        <button className="search-btn" onClick={handleSearch}>Get Weather</button>
        </div>
    );
}

export default SearchBar;
