import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Carousel from "../components/carousel"

const AboutPage = () => (
  <Layout>
    <div className="flex flex-col md:flex-row items-center justify-between mx-10 my-10">
      <div className="md:w-1/2">
        {" "}
        <StaticImage
          src="../images/portrait.jpg"
          width={500}
          quality={70}
          formats={["auto", "webp", "avif"]}
          alt="portrait of a man sitting"
          style={{ marginBottom: `1.45rem` }}
          placeholder="blurred"
          padding={1}
          className=""
        />
      </div>

      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-center font-semibold text-2xl my-3">My name is Calros</h1>
        <p className="text-center text-lg">
          I'm a civil engineer. I help build roads, building and bridges and I'm
          a great fan of the green city concept to have a sustainable
          environment for our future.
        </p>
      </div>

    </div>
    <div>
      <p>Check out my latest concepts</p>
      <Carousel />
    </div>
  </Layout>
)

export const Head = () => <Seo title="About" />

export default AboutPage
