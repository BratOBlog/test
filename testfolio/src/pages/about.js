import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"


const AboutPage = () => (
  <Layout>
    <div className="mt-8 flex justify-center">
<div className="mt-8 mx-auto grid sm:grid-cols-2 gap-10">
  <div className="max-w-lg lg:max-w-800px lg:mx-10">
    <h1 className="font-semibold text-2xl my-3">Hello, my name is Calros Friendly</h1>
    <p className="text-lg">
      I'm a civil engineer. I help design roads, buildings, housing and bridges, and I'm
      a great fan of the environment. I love to learn about new technologies to create sustainable
      environments for our future.
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
    />
  </div>
</div>
</div>

<div className="flex flex-col justify-center items-center">
<h2 className="text-lg font-semibold my-3">My mission</h2>
      <p>
        My mission is to help the people to create a sustainable city and
        landscape and housing.
      </p>

      <h2 className="text-lg font-semibold my-3">My vision</h2>
      <p>
        My vision is to help the people to create a sustainable city and
        landscape.
      </p>

      <h2 className="text-lg font-semibold my-3">My values</h2>
      <p>
        My values are:
        <ul>
          <li>
            <b>Sustainable</b> - I want to create a sustainable city and
            landscape
          </li>
          <li>
            <b>Environmentally Friendly</b> - I want to create a city and
            landscape that is environmentally friendly
          </li>
        </ul>
      </p>
      </div>
  </Layout>
)

export const Head = () => <Seo title="About" />

export default AboutPage
