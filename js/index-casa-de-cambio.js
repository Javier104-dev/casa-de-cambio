import {mostrarMensajeCargando, obtenerFechaSeleccionada, datasetDelElemento, crearListaMonedas, crearTablaDeCambios, modificarFechaMax }  from "./manipular-elementos-html.js";
import { mostrarMonedas, listarMonedas } from "./services.js";



const actualizarLista = async ()=>{
    mostrarMensajeCargando();
    const mostrarPagina = await mostrarMonedas(obtenerFechaSeleccionada(), datasetDelElemento());
    crearTablaDeCambios(mostrarPagina)
}


const iniciar = async()=>{
    crearListaMonedas(await listarMonedas(), actualizarLista);
    modificarFechaMax(actualizarLista);
}


iniciar();

export{actualizarLista}


