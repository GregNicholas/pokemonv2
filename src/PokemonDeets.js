import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonDeets = ({ currentPokemon }) => {
    //const [loading, setLoading] = useState(true);
    const [abilities, setAbilities] = useState();
    const [images, setImages] = useState();
    const pokeUrl = 'https://pokeapi.co/api/v2/pokemon/' + currentPokemon;

    useEffect(() => {
        //setLoading(true);
        let cancel;
        axios.get(pokeUrl, {
          cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
          //setLoading(false);
          setAbilities(res.data.abilities.map(a => a.ability.name));
          const PATTERN = "default";
          const sprites = res.data.sprites;
          const defaultSprites = Object.keys(sprites)
            .filter(key => key.includes(PATTERN))
            .reduce((obj, key) => {
                obj[key] = sprites[key];
                return obj;
            }, {});
            setImages(Object.values(defaultSprites))
        //   setImages(res.data.sprites.filter(img => img.includes(PATTERN)));
        });
    
        return () => cancel();
      }, [pokeUrl]);

      let pics;
      if (images){
        pics = images.map(i => <img class="pic" src={i} alt="pokemon"></img>)
      } else {
          pics = <></>
      }
      console.log(abilities);
      let ability;
      if (abilities){
        // ability = abilities.map(a => <p>{a}</p>)
        ability = abilities.join(", ");
      } else {
          ability = <></>
      }

    return (
        <div class="pokeDeets">
          <div class="pics">{pics}</div>
          <div class="abilities">Abilities: {ability}</div>
        </div>
    )
}

export default PokemonDeets
