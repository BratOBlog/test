import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => (
    <Layout>
            <h1> This is an ABOUT Page</h1>
    </Layout>

)

export const Head = () => <Seo title="About" />

export default AboutPage