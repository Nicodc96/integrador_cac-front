import { useEffect, useRef } from 'react';
import { validarEmail, validarNomApe } from "../utils/formValidator.js";
import { textoErrorValidarNomApe,
    textoErrorValidarEmail,
    textoErrorValidarNegativo,
    elegirCategoria,
    mostrarModalError,
    setValorFinalPorCategoria } from "../utils/functions.js";

export const HomeFormTicket = () => {
    /* Referencias a formularios error y de tickets */
    const modalError = useRef(null);
    const modalTicket = useRef(null);
    const modalBodyError = useRef(null);

    /* Referencia de elementos del formulario de Tickets */
    const inputCantidad = useRef(null);
    const inputStaticValorFinal = useRef(null);
    const optionList = useRef(null);
    const inputNombre = useRef(null);
    const inputApellido = useRef(null);
    const inputEmail = useRef(null);

    /* Referencia a los parrafos internos del modal Error*/
    const modalErrorTextNode1 = useRef(null);
    const modalErrorTextNode2 = useRef(null);
    const modalErrorTextNode3 = useRef(null);
    const modalErrorTextNode4 = useRef(null);

    const arrayModalErrorTextNodes = [modalErrorTextNode1, modalErrorTextNode2, modalErrorTextNode3, modalErrorTextNode4];

    /* Boxes descuento - Funcionalidad como botones */
    /* Referencias a los boxes de descuento y el select del formulario tickets */
    const contenedorDescuentos = useRef(null);
    const boxEstudiante = useRef(null);
    const boxTrainee = useRef(null);
    const boxJunior = useRef(null);

    const handleClickFormResumen = (event) => {
        /* Creo un modal que servirá para mostrar encima del modal de tickets (manejo de errores) */
        const newModal = new bootstrap.Modal(modalError.current, { keyboard: false });
        if (event.target.matches("#form-btn-resumen")){
            event.preventDefault();

            if (!validarNomApe(inputNombre) || !validarNomApe(inputApellido)){ 
                // Si falla al validar nombre o apellido, muestro el modal error con el texto correspondiente
                mostrarModalError(modalError, modalTicket, newModal, textoErrorValidarNomApe, arrayModalErrorTextNodes);
            } else if (!validarEmail(inputEmail)){
                // Si falla al validar email, muestro el modal error con el texto correspondiente
                mostrarModalError(modalError, modalTicket, newModal, textoErrorValidarEmail, arrayModalErrorTextNodes);
            } else{
                if (Number(inputCantidad.current.value) < 0){
                    // Si falla al validar cantidad positiva, muestro el modal error con el texto correspondiente
                    mostrarModalError(modalError, modalTicket, newModal, textoErrorValidarNegativo, arrayModalErrorTextNodes);
                } else{
                    // Si pasa las validaciones, realizo el cálculo correspondiente según cada descuento
                    setValorFinalPorCategoria(optionList, inputStaticValorFinal, inputCantidad);
                }
            } 
        }        
    }

    const handleClickFormBorrar = (event) => {
        if (event.target.matches("#form-btn-borrar")){
            event.preventDefault();
            // Limpio todos los inputs y el optionlist por defecto
            inputNombre.current.value = "";
            inputApellido.current.value = "";
            inputEmail.current.value = "";
            inputStaticValorFinal.current.value = "Total a pagar: $";
            inputCantidad.current.value = 1;
            optionList.current.options.selectedIndex = 0;
        }
    }

    const updateCategorias = () => {
        elegirCategoria(boxEstudiante, 1, optionList);
        elegirCategoria(boxTrainee, 2, optionList);
        elegirCategoria(boxJunior, 3, optionList);
    }

    const handleClickCategoriasDescuento = (event) => {
        if (event.target.matches("#box-estudiante")) optionList.current.value = 1;
        if (event.target.matches("#box-trainee")) optionList.current.value = 2;
        if (event.target.matches("#box-junior")) optionList.current.value = 3;
    }

    useEffect(() => {
        updateCategorias();
    }, []);

    return (
    <section id="modalForms">
            <article id="modalTickets">
                <div className="modal fade" 
                    id="staticModalTicket" 
                    data-bs-backdrop="static" 
                    data-bs-keyboard="false" 
                    tabIndex="-1"
                    aria-labelledby="staticBackdropLabel" 
                    aria-hidden="hidden"
                    ref={modalTicket}>
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrolleable">
                        <div className="modal-content">
                            <div className="modal-header">
                                <div className="modal-title fs-5" id="staticBackdropLabel">
                                    <p>Compre su Ticket:</p>
                                </div>
                                <button type="button" 
                                    className="btn-close" 
                                    data-bs-dismiss="modal" 
                                    aria-label="close" />
                            </div>
                            <div className="modal-body">
                                <div className="d-flex gap-1" 
                                id="categorias-descuento" 
                                ref={contenedorDescuentos}
                                onClick={(e) => {handleClickCategoriasDescuento(e)}}>
                                    <div className="box-categoria categoria-estudiante" id="box-estudiante" ref={boxEstudiante}>
                                        <p className="text-center fw-semibold pt-3">Estudiante</p>
                                        <p className="text-center">Tienen un descuento</p>
                                        <p className="text-center fw-bold">80%</p>
                                        <p className="text-center text-secondary text-documentacion">* presentar documentación</p>
                                    </div>
                                    <div className="box-categoria categoria-trainee" id="box-trainee" ref={boxTrainee}>
                                        <p className="text-center fw-semibold pt-3">Trainee</p>
                                        <p className="text-center">Tienen un descuento</p>
                                        <p className="text-center fw-bold">50%</p>
                                        <p className="text-center text-secondary text-documentacion">* presentar documentación</p>
                                    </div>
                                    <div className="box-categoria categoria-junior" id="box-junior" ref={boxJunior}>
                                        <p className="text-center fw-semibold pt-3">Junior</p>
                                        <p className="text-center">Tienen un descuento</p>
                                        <p className="text-center fw-bold">15%</p>
                                        <p className="text-center text-secondary text-documentacion">* presentar documentación</p>
                                    </div>
                                </div>
                                <p className="fs-6 text-uppercase lh-base text-center mt-2 mb-0">venta</p>
                                <p className="fs-1 text-uppercase lh-base text-center fw-semibold mt-0 mb-0">valor de ticket $200</p>
                                <form id="form-tickets">
                                    <div className="row">
                                        <div className="col col-name">
                                            <input type="text" 
                                            id="form-nombre" 
                                            className="form-control" 
                                            placeholder="Nombre"
                                            ref={inputNombre}/>
                                        </div>
                                        <div className="col col-surname">
                                            <input type="text" 
                                            id="form-apellido" 
                                            className="form-control" 
                                            placeholder="Apellido" 
                                            ref={inputApellido}/>
                                        </div>
                                    </div>
                                    <div className="row pt-3">
                                        <div className="col">
                                            <input type="email" 
                                            placeholder="Correo" 
                                            id="form-email" 
                                            className="form-control" 
                                            ref={inputEmail}/>
                                        </div>
                                    </div>
                                    <div className="row pt-3">
                                        <div className="col">
                                            <label htmlFor="form-cantidad">Cantidad:</label>
                                            <input type="number" 
                                                className="form-control" 
                                                placeholder="Cantidad" 
                                                id="form-cantidad" 
                                                min="0" 
                                                defaultValue="1"
                                                ref={inputCantidad}/>
                                        </div>
                                        <div className="col">
                                            <label htmlFor="form-categorias">Categoría:</label>
                                            <select className="form-select" 
                                            id="form-categorias"
                                            defaultValue={0}
                                            ref={optionList}>
                                                <option value="0">Sin categoría</option>
                                                <option value="1">Estudiante</option>
                                                <option value="2">Trainee</option>
                                                <option value="3">Junior</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row pt-3">
                                        <div className="col">
                                            <input type="text" 
                                                className="form-control-plaintext" 
                                                defaultValue="Total a pagar: $" 
                                                id="valor-final"
                                                readOnly
                                                ref={inputStaticValorFinal} />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer d-flex justify-content-center gap-2">
                                <button className="btn btn-success" 
                                type='button' 
                                id="form-btn-borrar"
                                onClick={(e) => {handleClickFormBorrar(e)}}>Borrar</button>
                                <button className="btn btn-success"
                                type='button'
                                id="form-btn-resumen"
                                onClick={(e) => {handleClickFormResumen(e)}}>Resumen</button>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <article id="modalError">
                <div className="modal fade"
                    id="modal-error" 
                    data-bs-backdrop="static"
                    data-bs-keyboard="false" 
                    tabIndex="-1" 
                    aria-labelledby="modalError" 
                    aria-hidden="true"
                    ref={modalError}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="modalError-titulo">Error en los datos:</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                        <div className="modal-body" id="modal-error-body" ref={modalBodyError}>
                            <p id='text-node1' ref={modalErrorTextNode1}></p>
                            <p id='text-node2' ref={modalErrorTextNode2}></p>
                            <p id='text-node3' ref={modalErrorTextNode3}></p>
                            <p id='text-node4' ref={modalErrorTextNode4}></p>
                        </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Aceptar</button>
                            </div>
                        </div>
                    </div>
                  </div>
            </article>
        </section>
    )
}