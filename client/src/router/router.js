import * as React from "react";
import {Route,Routes,BrowserRouter } from "react-router-dom";
import { LandingPage } from "../components/landing/landing";
import {PokemonsDetail} from "../components/pokemons/pokeDetail"
import { Home } from "../components/home/home";
import{CargarType}from "../components/types/cargarType"
import CrearPokemon from "../components/pokemons/crearPokemon"

    
export const AppRouter=()=>{
        return(
<BrowserRouter>
            <Routes>
                <Route exact path="/" element={<LandingPage/>} > </Route>
                <Route exact path="/home" element={<Home/>} > </Route>
                <Route exact path="/pokemonsDetail/:id" element={<PokemonsDetail/>} > </Route>
                <Route exact path="/type" element={<CargarType/>} > </Route>
                <Route exact path="/crear" element={<CrearPokemon/>} > </Route>
                </Routes>
</BrowserRouter>
        )
}
