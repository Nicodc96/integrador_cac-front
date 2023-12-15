import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

export const HomeForm = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        email: "",
        tema: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
            Object.keys(formData).length === 4 &&
            formData.nombre !== "" &&
            formData.apellido !== "" &&
            formData.email !== "" &&
            formData.tema !== ""
        ) {
            try {
                await axios.post(
                    "https://integradorcac-back-production.up.railway.app/api/v1/orador",
                    formData
                );
                Swal.fire({
                    title: "Inscripcion Oradores",
                    text: "Orador agregado con éxito...",
                    icon: "success",
                });
                setFormData({
                    nombre: "",
                    apellido: "",
                    email: "",
                    tema: "",
                });
            } catch (error) {
                Swal.fire({
                    title: "Inscripcion Oradores",
                    text: "Orador No ingresado...",
                    icon: "error",
                });
                console.error("Error al agregar el orador: ", error);
            }
        } else {
            Swal.fire({
                title: "Campos vacios",
                text: "Ingresa todos los datos",
                icon: "error",
            });
        }
    };

    return (
        <section id="main-form">
            <div>
                <p className="fs-6 text-uppercase lh-base text-center mt-2 mb-0">
                    conviértete en un
                </p>
                <p className="fs-1 text-uppercase lh-base fw-semibold text-center mt-0 mb-0">
                    orador
                </p>
                <p className="fs-6 text-center">
                    Anótate como orador para dar una{" "}
                    <span
                        href=""
                        className="text-reset text-decoration-custom"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-custom-class="custom-tooltip"
                        data-bs-title="Una presentación Ignite consiste en hacer llegar tu idea, historia o visión en cinco minutos"
                    >
                        charla ignite
                    </span>
                    . ¡Cuéntanos de qué quieres hablar!
                </p>
            </div>
            <form id="formContacto" className="needs-validation">
                <div
                    className="row justify-content-md-center"
                    id="formContactoRowNA"
                >
                    <div className="col mb-3">
                        <input
                            type="text"
                            name="nombre"
                            className="form-control"
                            id="form-text-nombre"
                            onChange={handleChange}
                            value={formData.nombre}
                            required
                            placeholder="Ingrese aquí su nombre"
                        />
                    </div>
                    <div className="col mb-3">
                        <input
                            type="text"
                            name="apellido"
                            className="form-control"
                            id="form-text-apellido"
                            onChange={handleChange}
                            value={formData.apellido}
                            required
                            placeholder="Ingrese aquí su apellido"
                        />
                    </div>
                    <div className="d-block pb-3">
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            id="form-text-email"
                            onChange={handleChange}
                            value={formData.email}
                            required
                            placeholder="Ingrese aquí su email"
                        />
                    </div>
                </div>
                <div
                    className="row justify-content-md-center"
                    id="formContactoRowTA"
                >
                    <div className="col">
                        <textarea
                            className="form-control"
                            name="tema"
                            id="form-textArea"
                            maxLength="450"
                            rows="4"
                            onChange={handleChange}
                            value={formData.tema}
                            required
                            placeholder="¿Sobre qué quieres hablar?"
                        ></textarea>
                        <p
                            className="text-secondary"
                            style={{ fontSize: "12px" }}
                        >
                            ¡Recuerda incluír un título para tu charla!
                        </p>
                    </div>
                </div>
                <div className="d-flex justify-content-md-center mb-3">
                    <button
                        id="btnFormEnviar"
                        className="btn btn-success fw-semibold"
                        onClick={handleSubmit}
                    >
                        Enviar
                    </button>
                </div>
            </form>
        </section>
    );
};
