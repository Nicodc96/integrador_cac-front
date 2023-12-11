import { HomeCards, HomeForm, HomeFormTicket, HomeGridSection } from './index.jsx';
import btnScrollTopImg from '../assets/btnScrollTop.svg';
import { useEffect, useRef } from 'react';

export const Home = () => {
    /* Sección para botón que te lleva arriba del todo */
    const btnScrollTop = useRef();
    const containerBtnScrollTop = useRef();

    useEffect(() => {
        window.addEventListener("scroll", () => {
            let pageScrollY = Number(window.scrollY).toFixed(0);
            if (!containerBtnScrollTop.current.classList.contains("hidden") && pageScrollY < 800){
                containerBtnScrollTop.current.classList.add("hidden");
            }
            if (pageScrollY > 800) containerBtnScrollTop.current.classList.remove("hidden");
        });
        
        btnScrollTop.current.addEventListener("click", () => {
            document.documentElement.scrollTop = 0;
        });

        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
    }, []);

    return (
        <>
            <HomeCards />
            <HomeGridSection />
            <HomeForm />
            <HomeFormTicket />
            <section id="containerBtnScrollTop" className="hidden" ref={containerBtnScrollTop}>
                <img src={btnScrollTopImg} alt="btnScrollTop" id="btnScrollTop" ref={btnScrollTop}/>
            </section>
        </>
    )
}