import { mostrarMonedas } from "./services.js";
import { actualizarLista } from "./index-casa-de-cambio.js";

const crearListaMonedas = async (monedas, funcionCallBack) => {
    const $contenedorDiv = document.querySelector("[data-tipo-monedas]");

    monedas.forEach((moneda)=>{
        const elemento = document.createElement("a");
        elemento.classList = "item__moneda";
        elemento.href = "#";
        elemento.textContent = moneda;
        elemento.dataset.base = moneda;
        $contenedorDiv.appendChild(elemento);
        elemento.addEventListener("click", ()=>{
            monedaSeleccionada(elemento);
            funcionCallBack();
        })
    });

}


const monedaSeleccionada = (elemento) =>{
    const $elementoMarcado = document.querySelector(".item__moneda.seleccionado");

    if($elementoMarcado){
        $elementoMarcado.classList.remove("seleccionado");
    }
    elemento.classList.add("seleccionado");
}



const datasetDelElemento = () =>{
    const $itemSeleccionado = document.querySelector(".item__moneda.seleccionado");
    if($itemSeleccionado){
        return $itemSeleccionado.dataset.base;
    }
    return undefined;
}

const mostrarMensajeCargando = () =>{
    const $listaCambios = document.querySelector(".tabla__cambios")
    $listaCambios.innerHTML = "Cargando...";
}


const crearTablaDeCambios = (monedasJson) =>{
    const $listaCambios = document.querySelector(".tabla__cambios")
    $listaCambios.innerHTML = "";
    const obtenerLlavesJson = Object.keys(monedasJson);
    const valoresDeCambio = monedasJson;
    obtenerLlavesJson.forEach((moneda)=>{
        const tr = document.createElement("tr");
        const tdMoneda = document.createElement("td");
        const tdMCambio = document.createElement("td");
    
        tdMoneda.textContent = moneda;
        tdMCambio.textContent = valoresDeCambio[moneda];
    
        tr.appendChild(tdMoneda);
        tr.appendChild(tdMCambio);
        $listaCambios.appendChild(tr);
    })
}


const modificarFechaMax = (funcionCallBack) => {
    const $elementoDate = document.querySelector(".calendario");
    const fechaActual = new Date().toISOString();
    const fechaFormateada = fechaActual.split('T')[0];
    $elementoDate.max = fechaFormateada;
    $elementoDate.addEventListener("change", funcionCallBack);
}


const obtenerFechaSeleccionada = () => {
    const $elementoDate = document.querySelector(".calendario");
    if($elementoDate.value){
        return $elementoDate.value;
    }
    return undefined;
}



export {mostrarMensajeCargando, obtenerFechaSeleccionada, datasetDelElemento, crearListaMonedas, crearTablaDeCambios, modificarFechaMax};