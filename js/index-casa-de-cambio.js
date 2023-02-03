import { mostrarMonedas } from "./services.js";
import { crearListaMonedas } from "./manipular-elementos-html.js";

const listarMonedas = async () => {
    const listaMonedas = await mostrarMonedas();
    const llavesObjeto = Object.keys(listaMonedas.rates);

    llavesObjeto.forEach((moneda)=>{
        crearListaMonedas(moneda);
    } );
}

listarMonedas();