import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Carousel from "../components/carousel"
import Seo from "../components/seo"

const Portfolio = () => (
    <Layout>
            <h1> This is a Portfolio Page</h1>






 
    <div>
      <p>Check out my latest concepts</p>
      <Carousel />
    </div>
    </Layout>

)

export const Head = () => <Seo title="Portfolio" />

export default Portfolio