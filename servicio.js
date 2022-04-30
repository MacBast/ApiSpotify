//pasos para consumir un api con js puro

//1 para donde voy?

const URI="https://api.spotify.com/v1/artists/53XhwfbYqKCa1cC15pYq2q/top-tracks?market=us"

/*2. que vas a hacer?
construir los parametros de la peticion 
metodo 
CABESERA 
EL BODY O CUERPO DE LA PETICION (Si es necesario)
*/

const TOKEN= "Bearer BQAIn5_Jh9rpWyoLYevuMLDJwdr3z0clHXMO8rJg8Gx0W9Cnakl6wsSmRycTA67jHW83y4BSq__7Yx9TjiHjmDnWL_PxjOQW14CN8zKW61gogT11vMvYyfQV47rRTlyXEUH0FHpCKvYBgztD"

let parametrosPeticion ={
    method:"GET",
    headers:{Authorization:TOKEN}
}

//3. activar la peticion/ir al servidor a pedir la respuesta 
fetch(URI,parametrosPeticion)
.then(function(respuesta){
    return(respuesta.json())//aqui se verifica que la respuesta este en json
})
.then(function(respuesta){ //aqui se hace lo que queira con la respuesta
    //console.log(respuesta.tracks[0].preview_url)
    respuesta.tracks.forEach(function(cancion){
        console.log(cancion.preview_url)
    });
})
.catch(function(respuesta){
    console.log(respuesta)
})