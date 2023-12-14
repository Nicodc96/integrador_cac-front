import imgBillGates from "../assets/imgs/bill.jpg";
import imgSteveJobs from "../assets/imgs/steve.jpg";
import imgAdaLovelace from "../assets/imgs/ada.jpeg";
import { useEffect, useState } from "react";
import axios from "axios";

export const HomeCards = () => {
    const [mostrarOradores, setMostrarOradores] = useState(false);
    const [oradoresData, setOradoresData] = useState([]);

    
    const handleMostrarOradores = () => {
        setMostrarOradores(!mostrarOradores);
        console.log("mostrar ocultar");
    };

    const listarOradores = async() => {
        try {
            const resp = await axios.get("https://integradorcac-back-production.up.railway.app/api/v1/oradores");
            setOradoresData(resp.data.listaObjetos);
        } catch (error) {
            console.error(`Error trayendo todos los oradores: " ${error}`)
        }
    }
    
    useEffect(() =>{
        if(mostrarOradores === true){
            listarOradores();
        }
    }, [])


    return (
        <section id="main-cards">
            <article id="mainCardsTitle">
                <p className="fs-6 text-uppercase lh-base text-center mt-2 mb-0">
                    conoce a los
                </p>
                <p className="fs-1 text-uppercase lh-base fw-semibold text-center mt-0 mb-0">
                    oradores
                </p>
            </article>
            <section
                id="cards"
                className="d-flex gap-4 justify-content-center flex-wrap"
            >
                <div className="card">
                    <img
                        src={imgSteveJobs}
                        className="card-img-top"
                        alt="steve jobs"
                    />
                    <div className="card-body">
                        <p className="btn btn-outline-secondary btn-custom fw-bolder me-1">
                            Apple
                        </p>
                        <p className="btn btn-info btn-custom fw-bolder">
                            Software
                        </p>
                        <h5 className="card-title">Steve Jobs</h5>
                        <p className="card-text">
                            Empresario, diseñador industrial, magnate
                            empresarial, propietario de medios e inversor. Fue
                            cofundador y presidente ejecutivo de Apple y, máximo
                            accionista individual de The Walt Disney Company.
                            Responsable de la Macintosh 128k, el primer
                            ordenador personal que se comercializó exitosamente.
                        </p>
                    </div>
                </div>
                <div className="card">
                    <img
                        src={imgBillGates}
                        className="card-img-top"
                        alt="bill gates"
                    />
                    <div className="card-body">
                        <p className="btn btn-warning btn-custom fw-bolder me-1">
                            Microsoft
                        </p>
                        <p className="btn btn-primary btn-custom fw-bolder">
                            Software
                        </p>
                        <h5 className="card-title">Bill Gates</h5>
                        <p className="card-text">
                            Magnate empresarial, desarrollador de software,
                            inversor, autor y filántropo estadounidense. Es
                            cofundador de Microsoft, junto con su difunto amigo
                            de la infancia Paul Allen. Fue uno de los
                            principales empresarios de la revolución de las
                            microcomputadoras de las décadas de 1970 y 1980.
                        </p>
                    </div>
                </div>
                <div className="card">
                    <img
                        src={imgAdaLovelace}
                        className="card-img-top"
                        alt="ada lovelace"
                    />
                    <div className="card-body">
                        <p className="btn btn-secondary btn-custom fw-bolder me-1">
                            Matemática
                        </p>
                        <p className="btn btn-danger btn-custom fw-bolder">
                            Programación
                        </p>
                        <h5 className="card-title">Ada Lovelace</h5>
                        <p className="card-text">
                            Matemática y escritora británica. Fue la primera en
                            reconocer que la máquina tenía aplicaciones más allá
                            del cálculo puro y en haber publicado lo que se
                            reconoce hoy como el primer algoritmo destinado a
                            ser procesado por una máquina, por lo que se la
                            considera como la primera programadora de
                            ordenadores.
                        </p>
                    </div>
                </div>
            </section>
            <section id="tablaOradores" className="text-center pt-4">
                <p>
                    <button
                        onClick={handleMostrarOradores}
                        className="btn btn-success fw-semibold"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseWidthExample"
                        aria-expanded="false"
                        aria-controls="collapseWidthExample"
                        id="btnFormEnviar"
                    >
                        <span style={{ fontWeight: 700 }}>
                            {mostrarOradores ? "CERRAR" : "ORADORES IGNITE"}
                        </span>
                    </button>
                </p>
                <div style={{ minHeight: "30px" }}>
                    <div
                        className="collapse collapse-vertical"
                        id="collapseWidthExample"
                    >
                        <table className="table caption-top table-hover">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Email</th>
                                    <th>Tema</th>
                                    <th>Fecha de Alta</th>
                                </tr>
                            </thead>
                            <tbody>
                            {oradoresData.map((orador) => (
                                    <tr key={orador.id_orador}>
                                        <td>{orador.nombre}</td>
                                        <td>{orador.apellido}</td>
                                        <td>{orador.email}</td>
                                        <td>{orador.tema}</td>
                                        <td>{orador.fechaAlta}</td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </section>
    );
};
