import { servicioSpoty } from "../services/servicioSpoty"
import { useState } from 'react'
export function Albumes () {

    //declarando mi primer useState
    const [canciones,setCanciones]=useState(null)

    
    servicioSpoty()
     .then(function(respuesta){
        setCanciones(canciones.tracks)
     })
     console.log(canciones)



    return
    <>
        <h1>hola soy albumes y soy un componente</h1>
    </>
}