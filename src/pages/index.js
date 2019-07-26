import React from "react";
import Layout from "../components/layout";
import Header from "../components/header"
import Navigation from "../components/navigation";
import MainBlock from "../components/mainBlock";
const  homepage = ()=>{
    return(
        <Layout>
         <Header/>
            <Navigation/>
            <MainBlock/>
        </Layout>

    )
}
export default homepage