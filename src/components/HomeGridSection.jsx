import { useEffect, useRef } from 'react';
import imgHonolulu1 from '../assets/imgs/honolulu.jpg';
import imgHonolulu2 from '../assets/imgs/honolulu2.jpg';
import imgHonolulu3 from '../assets/imgs/honolulu3.jpg';

export const HomeGridSection = () => {
    /* Sección para botón Conocer más */
    const btnConocerMas = useRef();

    useEffect(() => {
        btnConocerMas.current.addEventListener("click", () => {
            window.open("https://es.wikipedia.org/wiki/Honolulu", "_blank");
        });
    }, []);

    return (
    <section id="main-grid-info">
            <section className="container-fluid pt-3 mt-3">
            <div className="row border-top border-bottom border-2 border-gray" id="row-maingrid">
                <div className="col-6 ps-0 pe-0">
                    <div id="honoluluCarrousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={imgHonolulu1} className="img-fluid" alt="honolulu1" />
                            </div>
                            <div className="carousel-item">
                                <img src={imgHonolulu2} className="img-fluid" alt="honolulu2" />
                            </div>
                            <div className="carousel-item">
                                <img src={imgHonolulu3} className="img-fluid" alt="honolulu3" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#honoluluCarrousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Anterior</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#honoluluCarrousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Siguiente</span>
                        </button>
                    </div>
                </div>
                <div className="col-6 ps-0 pe-0 bg-maingrid-text text-white border-start border-2 border-gray" id="row-maingrid-col2">
                  <p className="fs-3 fw-semibold ps-3 pt-3">Honolulu - Estados Unidos</p>
                  <p className="ps-3 text-md-start me-2">Buenos Aires es la provincia más grande de Argentina y su sede de su capital. 
                    En los Estados Unidos, Honolulu 
                    es la más sureña de entre las principales ciudades estadounidenses. Aunque el nombre de Honolulu se refiere al área 
                    urbana en la costa sureste de la isla de Oahu, la ciudad y el condado de Honolulu han formado una ciudad-condado 
                    consolidada que cubre toda la ciudad (aproximadamente 600km&#178; de superficie).
                  </p>
                  <button className="btn btn-outline-light ms-3" id="btnConoceMas" ref={btnConocerMas}>Conocé más</button>
                </div>
              </div>
            </section>
        </section>
    )
}