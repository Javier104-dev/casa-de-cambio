const url = "https://api.exchangerate.host/";

const obtenerMonedasCambios = async (fecha = "latest", moneda = "EUR") => {
    const respuesta = await fetch(`${url}/${fecha}?base=${moneda}`);
    const respuestaJson = await respuesta.json();
    return respuestaJson.rates; 
}

const listarMonedas = async ()=> {
    const llaves = await obtenerMonedasCambios()
    return Object.keys(llaves);
}

export {obtenerMonedasCambios, listarMonedas};