import './App.css';
import Cards from './Cards.js';
import { useState, useEffect } from 'react';
import Tab from './Tab.js';

function App() {
    let [error, setError] = useState(null);
    let [isLoaded, setLoaded] = useState(false);
    let [cards, setCards] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await fetch('https://rickandmortyapi.com/api/character');
            data
                .json()
                .then(res => setCards(res.results))
                .catch(err => setError(err));
        }
        fetchData();
    })


    return (
        <div className="App">
        {cards.length > 0 
            && cards.map((card) => 
                <Cards character={ card } />)
        } 
        <Tab />
        </div>
    );
}

export default App;
