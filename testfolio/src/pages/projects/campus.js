import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"

const HouseComp = () => {
  return (
    <Layout>
      <div className="my-10 mb-4">
        <StaticImage
          src="../../images/campus.png"
          width={300}
          quality={65}
          formats={["auto", "webp", "avif"]}
          alt="school campus building"
          style={{ marginBottom: `1.45rem` }}
          placeholder="blurred"
        />
        <article className="my-5">
          <h3 className="font-semibold">Sustainable School Campus:</h3>
          <p>
            Led the design of a sustainable school campus that incorporates
            energy-efficient lighting, rainwater harvesting for irrigation, and
            educational green spaces. This project not only provides an
            eco-friendly learning environment but also serves as a living
            laboratory, inspiring the next generation to embrace sustainable
            practices.
          </p>

          <h3>The Challenge:</h3>
          <p>
            Our team faced a unique set of challenges when tasked with
            redesigning the school campus. The existing infrastructure consumed
            excessive energy, and the lack of green spaces limited opportunities
            for hands-on learning about the environment. Additionally,
            traditional irrigation methods were not only wasteful but also
            disconnected from the curriculum.
          </p>

          <h3>Innovative Soutions:</h3>
          <p>
            We approached these challenges with an integrated strategy that
            combined sustainable technologies, educational components, and
            community engagement:
          </p>

          <ol>
            <li>
              Energy-Efficient Lighting: By replacing outdated lighting systems
              with energy-efficient LEDs, we significantly reduced the campus's
              energy consumption. Sensor-controlled lighting ensured that lights
              were only activated when needed, minimizing unnecessary
              electricity use.
            </li>
            <li></li>
            <li></li>
            <li></li>
          </ol>
        </article>
      </div>
    </Layout>
  )
}

export default HouseComp
