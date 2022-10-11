export async function servicioSpoty(){
    const URI="https://api.spotify.com/v1/artists/3OcvS8PzSGYMBvLdzY6g3e/top-tracks?market=us"

    const TOKEN="Bearer BQBIPm1wF_urHza-m8V4e7QWtEdsp1APbAFklNNpiF8EbhNx5hSka3owseRO2Zg_03SxFED1Q3X8oX6A0O21tFBagLVCze0P_UFV2RYmqu8XEkChrjfsaGGSQ0d_haHuwZeXjKqCJRFLR1Zf022l7tj9dPY4Y8NvFzlyHRXAssQAo9Agb3CVrCNqWHy9Eb3vSa0"

    const PETICION={
        method:"GET",
        headers:{Authorization:TOKEN}
    }

    let respuesta=await fetch(URI,PETICION)
    let datos=await respuesta.json()

    return datos

}