import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Navbar from "../components/navbar"


const IndexPage = () => (
  <Layout>
      <h1>
        Welcome to <b>THIS IS A TESTFOLIO website</b>
      </h1>
      <Navbar />
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
