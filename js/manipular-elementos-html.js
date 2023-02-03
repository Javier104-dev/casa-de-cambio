const crearListaMonedas = (moneda) => {
    const $contenedorDiv = document.querySelector("[data-tipo-monedas]");

    const elemento = document.createElement("a");
    elemento.classList = "item__moneda";
    elemento.href = "#";
    elemento.textContent = moneda;
    elemento.addEventListener("click", ()=>{
        elementoSeleccionado(elemento);
    })
    
    $contenedorDiv.appendChild(elemento);
}

const elementoSeleccionado = (elemento) =>{
    const $elementoMarcado = document.querySelector(".item__moneda.seleccionado");

    if($elementoMarcado){
        $elementoMarcado.classList.remove("seleccionado");
    }
    elemento.classList.add("seleccionado");
}

export {crearListaMonedas};