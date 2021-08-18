import React, { useState, useEffect } from 'react';
import PokemonDeets from './PokemonDeets';
import axios from 'axios';

const PokemonList = ({ pokemon }) => {
    const [deets, setDeets] = useState('</>');

    const showDeets = e => {
        const pokeName = e.target.innerHTML;
        return <PokemonDeets className="onePoke" currentPokemon={pokeName} />
    }

   return (
        <div className="col">
            {pokemon.map(p => (
                <div class="onePokemon">
                <div onClick={showDeets} className="pokeName">{p}</div>
                
                </div>
                /* { <div className="pokemon" key={p}>
                    <div onClick={featurePokemon}>{p}</div>
                    
                </div> } */
            ))}
        </div>
    )
}

export default PokemonList
