const mostrarMonedas = async () => {
    const url = "https://api.exchangerate.host/latest";
    const respuesta = await fetch(url);
    return  respuesta.json();
}

export {mostrarMonedas};