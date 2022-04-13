import { useState, useEffect } from 'react';

function Cards(props) {
    let { character } = props;
    let { name, species, image } = character;

    let cardTab = (click) => {
        console.log(click.target.id)
        return <div><h2>{ click.target.id }</h2></div>
    }

    return (
        <div 
        className="card-tab">
        <img
        onClick={ cardTab }
        id={ name }
        src={ image } />
        <p>{ name }</p>
        </div>

    );
}

//{props.length > 0 && props.map((card) => <h2>{name}</h2>)}
export default Cards;
