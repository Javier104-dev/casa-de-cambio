import { mostrarListaCambios } from "./index-casa-de-cambio.js";

const crearListaMonedas = (moneda) => {
    const $contenedorDiv = document.querySelector("[data-tipo-monedas]");
    const elemento = document.createElement("a");
    elemento.classList = "item__moneda";
    elemento.href = "#";
    elemento.textContent = moneda;
    elemento.dataset.base = moneda;
    elemento.addEventListener("click", ()=>{
        monedaSeleccionada(elemento);
        mostrarListaCambios(datasetDelElemento());
    })
    $contenedorDiv.appendChild(elemento);
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

const mostrarMensaje = () =>{
    const $listaCambios = document.querySelector(".tabla__cambios")
    $listaCambios.innerHTML = "Cargando...";
}




const crearTablaDeCambios = (monedasJson) =>{
    const $listaCambios = document.querySelector(".tabla__cambios")
    $listaCambios.innerHTML = "";
    const obtenerLlavesJson = Object.keys(monedasJson.rates);
    const valoresDeCambio = monedasJson.rates;
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



export {crearListaMonedas, crearTablaDeCambios, mostrarMensaje};