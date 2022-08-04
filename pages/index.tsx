import React from "react";
import Home from "./home/Home";
import Index from "./blog";
import { NextPageWithLayout } from './page';
import PrimaryLayout from "../components/layouts/primary/PrimaryLayout";

const Page : NextPageWithLayout = () => {

    return (
    <React.Fragment>
    <Home></Home>;
    </React.Fragment>
    )

}

export default Page;

Page.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>;
};

// TODO
//continue with create App.jsx and put it  as  <App />,