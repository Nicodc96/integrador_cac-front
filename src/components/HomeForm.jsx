export const HomeForm = () => {
    return (
        <section id="main-form">
            <div>
                <p className="fs-6 text-uppercase lh-base text-center mt-2 mb-0">conviértete en un</p>
                <p className="fs-1 text-uppercase lh-base fw-semibold text-center mt-0 mb-0">orador</p>
                <p className="fs-6 text-center">Anótate como orador para dar una <span href="" 
                className="text-reset text-decoration-custom"
                data-bs-toggle="tooltip" data-bs-placement="top"
                data-bs-custom-class="custom-tooltip"
                data-bs-title="Una presentación Ignite consiste en hacer llegar tu idea, historia o visión en cinco minutos"
                >charla ignite</span>. ¡Cuéntanos de qué quieres hablar!</p>
            </div>
            <form id="formContacto">
                <div className="row justify-content-md-center" id="formContactoRowNA">
                    <div className="col mb-3">
                        <input type="text" className="form-control" id="form-text-nombre" placeholder="Ingrese aquí su nombre" />
                    </div>
                    <div className="col mb-3">
                        <input type="text" className="form-control" isd="form-text-apellido" placeholder="Ingrese aquí su apellido" />
                    </div>
                </div>
                <div className="row justify-content-md-center" id="formContactoRowTA">
                    <div className="col">
                        <textarea className="form-control" id="form-textArea" maxLength="450" rows="4" placeholder="¿Sobre qué quieres hablar?"></textarea>
                        <p className="text-secondary" style={{fontSize: "12px"}}>¡Recuerda incluír un título para tu charla!</p>
                    </div>
                </div>
                <div className="d-flex justify-content-md-center mb-3">
                    <button id="btnFormEnviar" className="btn btn-success fw-semibold">Enviar</button>
                </div>
            </form>
        </section>
    )
}