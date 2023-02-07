const url = "https://api.exchangerate.host/";

const mostrarMonedas = async (fecha = "latest", moneda = "EUR") => {
    const respuesta = await fetch(`${url}/${fecha}?base=${moneda}`);
    const respuestaJson = await respuesta.json();
    return respuestaJson.rates; 
}

const listarMonedas = async ()=> {
    const llaves = await mostrarMonedas()
    return Object.keys(llaves);
}


export {mostrarMonedas, listarMonedas};