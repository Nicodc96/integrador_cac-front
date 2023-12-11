const createElementCustom = (tipoElemento, clases, contenidoTexto, atributos) => {
    const newElement = document.createElement(tipoElemento);
    if (Array.isArray(clases) && clases.length > 0) newElement.current.classList.add(...clases);
    if (contenidoTexto.length > 0 && contenidoTexto) newElement.current.textContent = contenidoTexto;
    if (typeof(atributos) == "object"){
        Object.keys(atributos).forEach((atributo) => {
            newElement.current.setAttribute(atributo, atributos[atributo]);
        });
    }
    return newElement;
}
/* Funciones auxiliares para el modal de error */
const textoErrorValidarNomApe = (textNode1, textNode2, textNode3, textNode4) => {
    textNode1.current.textContent = "Los campos nombre y apellido deben tener:";
    textNode2.current.textContent = "- Mínimo 3 caracteres y máximo 24.";
    textNode3.current.textContent = "- Puede contener acentos y mayúsculas.";
    textNode4.current.textContent = "";
}
const textoErrorValidarEmail = (textNode1, textNode2, textNode3, textNode4) => {
    textNode1.current.textContent = "El campo email debe cumplir los siguientes requisitos:";
    textNode2.current.textContent = "- Debe tener un @.";
    textNode3.current.textContent = "- Debe contener un dominio correcto.";
    textNode4.current.textContent = "- El nombre puede tener puntos y guión medio (-).";
}
const textoErrorValidarNegativo = (textNode1, textNode2, textNode3, textNode4) => {
    textNode1.current.textContent = "No es posible calcular el valor final en base a una cantidad negativa.";
    textNode2.current.textContent = "";
    textNode3.current.textContent = "";
    textNode4.current.textContent = "";
}
const mostrarModalError = (referenciaModalError, referenciaModalTicket, nuevoModal, funcTextError, arrayTextNodes) => {
    funcTextError(arrayTextNodes[0],arrayTextNodes[1], arrayTextNodes[2], arrayTextNodes[3]);
    nuevoModal.show(referenciaModalError);

    referenciaModalTicket.current.classList.add("background-hidden");
    referenciaModalError.current.addEventListener("hide.bs.modal", () => {
        referenciaModalTicket.current.classList.remove("background-hidden");
    });
}
/* ------------------------------------------- */

/* Funciones auxiliares para el manejo del modal de descuentos */
const elegirCategoria = (emisor, numeroCategoria, referenciaSelectCategorias) => {
    if (emisor.current){
        emisor.current.addEventListener("click", event => {
            if (event.target.matches(".text-center")) referenciaSelectCategorias.current.value = numeroCategoria;
        });
    }
}
const setValorFinalPorCategoria = (referenciaOptionList, referenciaInputValorFinal, referenciaInputCantidad) => {
    referenciaInputValorFinal.current.value = "Total a pagar: $";
    let valorFinalBruto = Number(referenciaInputCantidad.current.value) * 200;
    switch (referenciaOptionList.current.selectedIndex){
        case 0:
            referenciaInputValorFinal.current.value += valorFinalBruto;
            break;
        case 1:
            referenciaInputValorFinal.current.value += valorFinalBruto - (valorFinalBruto * 0.8);
            break;
        case 2:
            referenciaInputValorFinal.current.value += valorFinalBruto - (valorFinalBruto * 0.5);
            break;
        case 3:
            referenciaInputValorFinal.current.value += valorFinalBruto - (valorFinalBruto * 0.15);
            break;
    }
}
/* ----------------------------------------------------------- */
export { createElementCustom,
    textoErrorValidarNomApe, 
    textoErrorValidarEmail, 
    textoErrorValidarNegativo, 
    elegirCategoria, 
    mostrarModalError, 
    setValorFinalPorCategoria }