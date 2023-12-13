import { useEffect, useRef } from "react";
import imgHonolulu1 from "../assets/imgs/bs_as1.jpg";
import imgHonolulu2 from "../assets/imgs/El-Planetario.jpg";
import imgHonolulu3 from "../assets/imgs/bs_as5.jpg";

export const HomeGridSection = () => {
    /* Sección para botón Conocer más */
    const btnConocerMas = useRef();

    useEffect(() => {
        btnConocerMas.current.addEventListener("click", () => {
            window.open("https://turismo.buenosaires.gob.ar/es", "_blank");
        });
    }, []);

    return (
        <section id="main-grid-info">
            <section className="container-fluid pt-3 mt-3">
                <div
                    className="row border-top border-bottom border-2 border-gray"
                    id="row-maingrid"
                >
                    <div className="col-6 ps-0 pe-0">
                        <div
                            id="honoluluCarrousel"
                            className="carousel slide"
                            data-bs-ride="carousel"
                        >
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img
                                        src={imgHonolulu1}
                                        className="img-fluid"
                                        alt="honolulu1"
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src={imgHonolulu2}
                                        className="img-fluid"
                                        alt="honolulu2"
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src={imgHonolulu3}
                                        className="img-fluid"
                                        alt="honolulu3"
                                    />
                                </div>
                            </div>
                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#honoluluCarrousel"
                                data-bs-slide="prev"
                            >
                                <span
                                    className="carousel-control-prev-icon"
                                    aria-hidden="true"
                                />
                                <span className="visually-hidden">
                                    Anterior
                                </span>
                            </button>
                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#honoluluCarrousel"
                                data-bs-slide="next"
                            >
                                <span
                                    className="carousel-control-next-icon"
                                    aria-hidden="true"
                                />
                                <span className="visually-hidden">
                                    Siguiente
                                </span>
                            </button>
                        </div>
                    </div>
                    <div
                        className="col-6 ps-0 pe-0 bg-maingrid-text text-white border-start border-2 border-gray"
                        id="row-maingrid-col2"
                    >
                        <p className="fs-3 fw-semibold ps-3 pt-3">
                            Buenos Aires - Argentina
                        </p>
                        <p className="ps-3 text-md-start me-2">
                            Buenos Aires es la gran capital cosmopolita de
                            Argentina. Su centro es la Plaza de Mayo, rodeada de
                            imponentes edificios del siglo XIX, incluida la Casa
                            Rosada, el icónico palacio presidencial que tiene
                            varios balcones. Entre otras atracciones
                            importantes, se incluyen el Teatro Colón, un lujoso
                            teatro de ópera de 1908 con cerca de 2,500 asientos,
                            y el moderno museo MALBA, que exhibe arte
                            latinoamericano.
                        </p>
                        <button
                            className="btn btn-outline-light ms-3"
                            id="btnConoceMas"
                            ref={btnConocerMas}
                        >
                            Conocé más
                        </button>
                    </div>
                </div>
            </section>
        </section>
    );
};
