import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => (
    <Layout>
            <h1 className="text-center font-semibold text-lg">My name is Calros</h1>

            <StaticImage
                src="../images/portrait.jpg"
                width={500}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="portrait of a man sitting"
                style={{ marginBottom: `1.45rem` }}
                placeholder="blurred"
          padding={1}
          className=""

            />
    </Layout>

)

export const Head = () => <Seo title="About" />

export default AboutPage