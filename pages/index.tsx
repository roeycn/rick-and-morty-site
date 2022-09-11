import React from "react";
import { NextPageWithLayout } from './page';
import Navbar from "../components/responsive/NavBar/navbar";
import Hero from "../components/responsive/Hero/hero";
import Sessionepisodes from "../components/responsive/SessionEpisodes/sessionepisodes";
import Newsletter from "../components/responsive/Newsletter/newsletter";
import Footer from "../components/responsive/Footer/footer";


const Page : NextPageWithLayout = () => {

    return (

        <div className='bg-black'>
            <Navbar />
            <Hero />
            <Sessionepisodes />
            <Footer />
        </div>

    )

}

export default Page;


