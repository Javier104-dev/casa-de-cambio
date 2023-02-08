import {mostrarMensajeCargando, obtenerFechaSeleccionada, datasetDelElemento, crearListaMonedas, crearTablaDeCambios, modificarFechaMax }  from "./manipular-elementos-html.js";
import { obtenerMonedasCambios, listarMonedas } from "./services.js";


const actualizarLista = async ()=>{
    mostrarMensajeCargando();
    const mostrarPagina = await obtenerMonedasCambios(obtenerFechaSeleccionada(), datasetDelElemento());
    crearTablaDeCambios(mostrarPagina)
}


const iniciarPrograma = async ()=>{
    crearListaMonedas(await listarMonedas(), actualizarLista);
    modificarFechaMax(actualizarLista);
}

iniciarPrograma();

export{actualizarLista}


