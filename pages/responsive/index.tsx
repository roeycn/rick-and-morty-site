import {NextPageWithLayout} from "../page";
import Navbar from "../../components/responsive/NavBar/navbar";
import styles from "./responsive.module.scss"
import Hero from "../../components/responsive/Hero/hero";
import Analytics from "../../components/responsive/Analytics/analytics";
import Newsletter from "../../components/responsive/Newsletter/newsletter";
import Cards from "../../components/responsive/Cards/cards";
import Footer from "../../components/responsive/Footer/footer";

const Index: NextPageWithLayout = () => {
    return (
        <div className='bg-black'>
            <Navbar />
            <Hero />
            <Analytics />
            <Newsletter />
            <Cards />
            <Footer />
        </div>
    );
};

export default Index;

