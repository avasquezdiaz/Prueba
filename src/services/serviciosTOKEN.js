export async function serviciosTOKEN(){

    //uri
    const URI="https://accounts.spotify.com/api/token"

    //datos
    const Dato1="grant_type=client_credentials"
    const Dato2="client_secret=0b97abd1828248a18360590900466b27"
    const Dato3="client_id=15c35195e8bf4bc796d889a68ed5951a"


    //peticion
    const PETICION= {
        method:"POST",
        headers:{"Content-type":"application/x-www-form-urlencoded"},
        body:Dato1+"&"+Dato2+"&"+Dato3
    }

    //fetch
    let respuesta = await fetch(URI,PETICION)
    let datos= await respuesta.json()

   
    datos=datos.token_type+' '+datos.access_token;
    
    return datos

}