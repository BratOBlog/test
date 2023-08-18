import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"



const IndexPage = () => (
  <Layout>
    <div className="container">
      <h1 className="text-2xl text-center">
        Our aim at <b>ECOFriendly</b> is to plan for a sustainable future
      </h1>

    <p>

    </p>
      </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
