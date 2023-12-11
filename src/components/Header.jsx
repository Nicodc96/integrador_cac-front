import { useEffect, useRef } from 'react';
import imgLogoCodo from '../assets/imgs/codoacodo.png';

export const Header = () => {
    const navbar = useRef(null);

    const toggleSticky = (sticky) => {
        window.scrollY >= sticky ? navbar.current.classList.add("sticky") : navbar.current.classList.remove("sticky");
    }

    useEffect(() => {
        let sticky = navbar.current.offsetTop;
        window.onscroll = () => toggleSticky(sticky);
    },[]);

    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-header" id="navbarHeader" ref={navbar}>
                <div className="container-fluid">
                    <a href="#" className="navbar-brand">
                        <img src={imgLogoCodo} alt="logo codo a codo" width="95" />
                        <span className="navbar-brand text-white" id="textLogoHeader">Conf Bs As</span>
                    </a>
                    <button className="navbar-toggler" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#navbarHeaderLinks" 
                            aria-controls="navbarHeaderLinks" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarHeaderLinks">
                        <div className="navbar-nav fw-semibold">
                        <a className="nav-link active" aria-current="page" href="#">La conferencia</a>
                        <a className="nav-link" href="#cards">Los oradores</a>
                        <a className="nav-link" href="#main-grid-info">El lugar y la fecha</a>
                        <a className="nav-link" href="#main-form">Conviértete en orador</a>
                        <a className="nav-link nav-tickets" 
                        data-bs-toggle="modal" 
                        data-bs-target="#staticModalTicket">Comprar tickets</a>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="banner" id="banner-header"></div>
            <div className="banner-text">
                <p className="fs-2 fw-semibold">Conf Bs As</p>
                <p id="bannerMainText" className="fs-5">Llega por primera vez a Argentina un evento para compartir con nuestra comunidad el conocimiento y 
                    experiencia de los expertos que están creando el futuro de Internet. Ven a conocer a miembros del evento, 
                    a otros estudiantes de Codo a Codo y los oradores del primer nivel que tenemos para ti. ¡Te esperamos!
                </p>
                <button type="button" id="btn-Orador" className="btn btn-outline-light">¡Quiero ser orador!</button>
                <button type="button" 
                className="btn btn-success" 
                data-bs-toggle="modal" 
                data-bs-target="#staticModalTicket">Comprar tickets</button>
            </div>
        </header>
    )
}