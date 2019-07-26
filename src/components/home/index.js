import React from "react";
import { graphql, useStaticQuery} from "gatsby"
const HomeMain = () =>{

 const homeData = useStaticQuery(graphql`
  query{
  allMarkdownRemark(
    filter: { fileAbsolutePath: {regex : "\/home/"} },){
    edges{
      node{
        frontmatter{
        heading
        detail
        img
        }
    }
    }
  }
}
  `)

    return(
       <div className="home-block">

             <h1>
                  Home heading
             </h1>
             <p>Home Description</p>
           <div>
               <img src=""/></div>
       </div>
    )
}
export default HomeMain;