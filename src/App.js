import './App.css';
import { useState, useEffect } from 'react';
import Tab from './Tab.js';

function App() {
    let [error, setError] = useState(null);
    let [isLoaded, setLoaded] = useState(false);
    let [cards, setCards] = useState([]);
    let [trigger, setTrigger] = useState(false);
    let [character, setCharacter] = useState('');

    useEffect(() => {
        async function fetchData() {
            const data = await fetch('https://rickandmortyapi.com/api/character');
            data
                .json()
                .then(res => setCards(res.results))
                .catch(err => setError(err));
        }
        fetchData();
    }, [])
    let cardTab = (card) => {
        setTrigger(true);
        setCharacter(card);
    }


    return (
        <div className="App">
        {trigger && <Tab 
            trigger={ trigger }
            setTrigger={ setTrigger} 
            character={ character }
            setCharacter={ setCharacter }
            />}
        <div className="cards-body">
        {cards.length > 0 
            && cards.map((card) => 
                {
                    return (
                        <div 
                        className="card-tab">
                        <img
                        onClick={ () => cardTab(card) }
                        id={ card.name }
                        src={ card.image } />
                        <p>{ card.name }</p>
                        </div>
                    )
                })
        }
        </div>
        </div>
    );
}

export default App;
