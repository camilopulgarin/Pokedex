//Zona de importacion de componentes externos.
import React, { useRef, useEffect, useState } from 'react'
//import { Scroll } from 'scroll-utility'
import axios from 'axios'

import { Link } from 'react-router-dom';

//import './static/css/Index.css'


                                
function Index() {
    const [ListPokemons, modificarListPokemons] = useState([]);
    const [PokemonSelect, modificarPokemonSelect ] = useState({pokemon:"201", name:"unown", type:"psychic", ability:"levitate"})
    const Pokemons = async () => {
        
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=200").then(response => {
            //console.log("response: ", response.data.results)
            modificarListPokemons(response.data.results)
            

        }).catch(function(err) {
            console.log("Error")
        })
    }

    const Pokemonsview = async (pok) => {
        //Pokemon
        console.log("pok: ", pok)
        console.log("https://pokeapi.co/api/v2/pokemon/+pok: ", "https://pokeapi.co/api/v2/pokemon/"+pok)
        axios.get("https://pokeapi.co/api/v2/pokemon/" + pok).then(response => {
            console.log("response: ", response.data)
            //modificarListPokemons(response.data.results)
            modificarPokemonSelect({pokemon:response.data.id, name:response.data.name, type:response.data.types[0].type.name, ability: response.data.abilities[0].ability.name})

        }).catch(function(err) {
            console.log("Error")
        })
    }

    const codigoPokemon = (ruta) => {
        var aux = ruta.split("/")
        //console.log("aux: ***", aux)
        return aux[aux.length-2]
    }
    
    useEffect(() => {
        Pokemons()
        
    },[]);

    return(
        <div className="container">
        <div className="row">
            <div className="" style={{display:"flex", top:"50px", padding:"0px", left:"5vw", flexWrap:"wrap", width:"47vw", position: "fixed", overflow:"scroll", height:"90vh", overflowX: "hidden"}}>
               
                    <div class="row g-2">
                    {   
                        ListPokemons.map((pokemon =>
                        <div key={pokemon.name} class="col-4" style={{height:"100px", width:"100px", margin:"10px"}} onClick = {() => Pokemonsview(codigoPokemon(pokemon.url))}>
                            <img style={{width:"100px",height:"100px"}} className=" border bg-light" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"+ codigoPokemon(pokemon.url)+".svg"} />
                        </div>
                    
                    
                    ))}
                        
                    </div>
                
            </div>
            <div className="" style={{display:"flex", top:"50px", left:"56vw", position:"fixed", width:"45vw"}}>
                <div class="card" style={{width: "18rem"}}>
                        <img style={{height:"200px"}} src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"+ PokemonSelect.pokemon+".svg"} class="card-img-top" alt="..." />
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: {PokemonSelect.pokemon}</li>
                            <li class="list-group-item">Name: {PokemonSelect.name}</li>
                            <li class="list-group-item">Type: {PokemonSelect.type}</li>
                            <li class="list-group-item">Ability: {PokemonSelect.ability}</li>
                        </ul>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Index;