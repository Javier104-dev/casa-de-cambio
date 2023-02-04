const url = "https://api.exchangerate.host/";

const mostrarMonedas = async (fecha = "latest", moneda = "EUR") => {
    const respuesta = await fetch(`${url}/${fecha}?base=${moneda}`);
    return  respuesta.json();
}

export {mostrarMonedas};