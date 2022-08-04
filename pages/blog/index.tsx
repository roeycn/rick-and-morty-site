import { NextPageWithLayout } from './../page';
import PrimaryLayout from "../../components/layouts/primary/PrimaryLayout";
// import styles from './blog.module.scss'


const Index: NextPageWithLayout = () => {

    //css
    return (
        <body >
        <div className={"top-container"} >
            <img src="cloud.png" alt="cloud-img" />
            <h1> I am Roey.</h1>
            <p> a programmer.</p>
            <img src="cloud.png" alt="cloud-img" />
            <img src="mountain.png" alt="mountain-img" />
        </div>
        </body>
    )
    //scss
    // return (
    //     <div className={styles["blog"]}>
    //     <div className={styles["top-container"]}>
    //         <img src="cloud.png" alt="cloud-img" />
    //         <h1> I am Roey.</h1>
    //         <p> a <span className={styles["pro"]}>pro</span>grammer.</p>
    //         <img src="cloud.png" alt="cloud-img" />
    //         <img src="mountain.png" alt="mountain-img" />
    //     </div>
    //     <div className={styles["middle-container"]}></div>
    //     <div className={styles["bottom-container"]}></div>
    //     </div>
    // );
};

export default Index;

// Index.getLayout = (page) => {
//     return <PrimaryLayout>{page}</PrimaryLayout>;
// };
