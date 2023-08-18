import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Carousel from "../components/carousel"

const AboutPage = () => (
  <Layout>
<div className="sm:mx-3 md:mx-5 my-10 flex flex-row items-center justify-around">
  <div className="max-w-lg lg:max-w-800px lg:mx-10">
    <h1 className="font-semibold text-2xl my-3">Hello, my name is Calros Friendly</h1>
    <p className="text-lg">
      I'm a civil engineer. I help build roads, buildings, and bridges, and I'm
      a great fan of the green city concept to have a sustainable
      environment for our future.
    </p>
  </div>
  <div className="md:w-1/2">
    <StaticImage
      src="../images/portrait.jpg"
      width={500}
      quality={65}
      formats={["auto", "webp", "avif"]}
      alt="portrait of a man sitting"
      style={{ marginBottom: `1.45rem` }}
      placeholder="blurred"
      className=""
    />
  </div>
</div>

  </Layout>
)

export const Head = () => <Seo title="About" />

export default AboutPage
