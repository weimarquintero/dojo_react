import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FetchPokemonAction } from '../../redux/actions';

export default function SearchBarPokemon() {
    const dispatch = useDispatch()
    const [pokemonName, setPokemonName] = useState("Umbreon")
    return (
        <div className="form-group">
            <label htmlFor="buscarPokemon" className="text-white">Buscar Pokemon</label>
            <input type="text" className="form-control" id="buscarPokemon" value={pokemonName}
                onChange={(event) => {
                    setPokemonName(event.target.value)
                }}></input>
            <button className="btn btn-primary mt-3" onClick={() => {
                dispatch(FetchPokemonAction(pokemonName.toLowerCase()))
            }}>Enviar</button>
        </div>
    )

}