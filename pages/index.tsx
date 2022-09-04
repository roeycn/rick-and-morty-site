import React from "react";
import { NextPageWithLayout } from './page';
import Navbar from "../components/responsive/NavBar/navbar";
import Hero from "../components/responsive/Hero/hero";
import Episodes from "../components/responsive/Episodes/episodes";
import Newsletter from "../components/responsive/Newsletter/newsletter";
import Footer from "../components/responsive/Footer/footer";


const Page : NextPageWithLayout = () => {

    return (

        <div className='bg-black'>
            <Navbar />
            <Hero />
            <Episodes />
            <Footer />
        </div>

    )

}

export default Page;


