import '../Historia/Historia.css'
import { Carrusel } from '../Carrusel/Carrusel'
import { Integrantes } from '../Integrantes/Integrante'
export function Historia (){
    return (
        <>
        <Carrusel></Carrusel>
        <div className='container'>            
            <Integrantes></Integrantes>               
        </div>
        
        </>
    )


}