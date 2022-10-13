import { serviciosTOKEN } from "../services/serviciosTOKEN"
export async function servicioSpoty(){
    const URI="https://api.spotify.com/v1/artists/3OcvS8PzSGYMBvLdzY6g3e/top-tracks?market=us"

    const TOKEN= serviciosTOKEN()

    const PETICION={
        method:"GET",
        headers:{Authorization:TOKEN}
    }

    let respuesta=await fetch(URI,PETICION)
    let datos=await respuesta.json()

    return datos

}