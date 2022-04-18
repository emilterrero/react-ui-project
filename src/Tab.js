import { useState } from 'react';

function Tab({ trigger, character, setTrigger, setCharacter }) {
    let closeBtn = () => setTrigger(false); 
    console.log(character);

    return (
        <div className="info-tab">
        <img 
        className='tab-img'
        src={ character.image }
        />
        <div className="info">
        <h4>{ character.name }</h4>
        <p><span>Status:</span> { character.status }</p>
        <p><span>Species:</span> { character.species }</p>
        <p><span>Location:</span> { character.location.name }</p>
        </div>
        <button 
        onClick={() => setTrigger(false) }
        className='info-btn'>
        X
        </button>
        </div>

    );
}

export default Tab;
