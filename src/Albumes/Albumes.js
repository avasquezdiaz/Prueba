import { servicioSpoty } from "../services/servicioSpoty"
import { serviciosTOKEN} from "../services/serviciosTOKEN"
import { useState, useEffect } from 'react'

export function Albumes (){

    //declarando mi primer useState
    const[canciones,setCanciones]=useState(null)
    //useState para la carga de datos
    const[carga,setCarga]=useState(true)

    //usando el useEffect
    useEffect(function(){

        servicioSpoty()
        .then(function(respuesta){
            console.log(respuesta);
            setCanciones(respuesta.tracks)
            setCarga(false)
        })
        console.log(canciones)

    },[])

    if(carga==true){

        return(
            <>
                <h1>Estoy cargando...</h1>
            </>
        )

    }else{

        return(

            <>
                
        <div className="row row-cols-1 row-cols-md-4 g-3 justify-content-center">
                 {
                 canciones.map(function(cancion) {
                    return(
                        <>
                        <div className="col mt-5">
                            <div className="card h-100">
                                <audio controls src={cancion.preview_url}></audio>
                                <h1 className="text-center fuente"> {cancion.nombre}</h1>
    
                            </div>
    
    
                        </div>
                        
                        </>
                    )
                   
                 })
                 }
                 </div>
                 
                
            </>
        )

    }

    
    
  

   
}