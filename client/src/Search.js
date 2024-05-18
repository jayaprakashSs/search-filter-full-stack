import React, { useState } from 'react';
import axios from 'axios';
import './Search.css';

const Search = () => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await axios.get('http://localhost:5000/search', {
                params: {
                    name,
                    category
                }
            });
            setResults(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="search-container">
            <h1>Search Filter</h1>
            <div className="search-box">
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input-field"
                />
                <input
                    type="text"
                    placeholder="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="input-field"
                />
                <button onClick={handleSearch} className="search-button">Search</button>
            </div>
            <ul className="results-list">
                {results.map((item, index) => (
                    <li key={index} className="result-item">
                        {item.name} - {item.category}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Search;
