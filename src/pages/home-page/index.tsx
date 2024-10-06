import {GoTopButton} from "../../components";
import {Home, AboutUs, Services, CarBox, CarInfo, AboutServices, Contact} from "./sections";

import '../../styles/globalStyles.scss'

export function HomePage() {
    return (
        <>
            <Home />
            <AboutUs/>
            <Services/>
            <CarBox/>
            <CarInfo/>
            <AboutServices/>
            <Contact/>
            <GoTopButton/>
        </>
    );
}

