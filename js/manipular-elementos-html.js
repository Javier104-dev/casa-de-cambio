//Funciones para crear las dos partes de la pagina, la lista de monedas y los cambios de la moneda seleccionada

const crearListaMonedas = (monedas, funcionCallBack) => {
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

//Manipulamos el estilo para saber cual moneda fue seleccionada

const monedaSeleccionada = (elemento) =>{
    const $elementoMarcado = document.querySelector(".item__moneda.seleccionado");

    if($elementoMarcado){
        $elementoMarcado.classList.remove("seleccionado");
    }
    elemento.classList.add("seleccionado");
}

//Obtenermos el dataset con el nombre de la moneda del elemento seleccionado

const datasetDelElemento = () =>{
    const $itemSeleccionado = document.querySelector(".item__moneda.seleccionado");
    if($itemSeleccionado){
        return $itemSeleccionado.dataset.base;
    }
    return undefined;
}

//Establecemos la fecha maxima que se puede seleccionar

const modificarFechaMax = (funcionCallBack) => {
    const $elementoDate = document.querySelector(".calendario");
    const fechaActual = new Date().toISOString();
    const fechaFormateada = fechaActual.split('T')[0];
    $elementoDate.max = fechaFormateada;
    $elementoDate.addEventListener("change", funcionCallBack);
}

/**************************************************/

const obtenerFechaSeleccionada = () => {
    const $elementoDate = document.querySelector(".calendario");
    if($elementoDate.value){
        return $elementoDate.value;
    }
    return undefined;
}

/**************************************************/

const mostrarMensajeCargando = () =>{
    const $listaCambios = document.querySelector(".tabla__cambios")
    $listaCambios.innerHTML = "Cargando...";
}

export {mostrarMensajeCargando, obtenerFechaSeleccionada, datasetDelElemento, crearListaMonedas, crearTablaDeCambios, modificarFechaMax};