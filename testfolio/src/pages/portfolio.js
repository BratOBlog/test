import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Carousel from "../components/carousel"
import Seo from "../components/seo"

const Portfolio = () => (
  <Layout>
    <div className="my-10 mx-10">
      <h1 className="text-center font-bold text-2xl my-10">
        Portfolio projects
      </h1>
      <p className="my-10">
        Each of these portfolio projects exemplifies my commitment to
        sustainable engineering and showcases the transformative potential of
        eco-friendly design principles. Through these endeavors, I aim to
        inspire others to embrace innovative solutions that prioritize both
        human well-being and environmental preservation.
      </p>
    </div>

    <wrapper className="grid grid-cols-2 gap-4 mx-10">
      
      <div className="border border-gray-300 rounded p-4">
        <StaticImage
          src="../images/workshop.png"
          width={300}
          quality={65}
          formats={["auto", "webp", "avif"]}
          alt="workshop series"
          style={{ marginBottom: `1.45rem` }}
          placeholder="blurred"
        />
        <h3 className="font-semibold">
          Workshop Series on Sustainable Living:
        </h3>
        <p>
          Led a series of interactive workshops and seminars aimed at raising
          awareness about sustainable living practices. These events engaged
          local communities and professionals, providing practical insights into
          integrating eco-conscious choices into daily routines and design
          approaches, ultimately fostering a culture of sustainability.
        </p>
      </div>


      <div className="border border-gray-300 rounded p-4">
        <StaticImage
src="../images/campus.png"
          width={300}
          quality={65}
          formats={["auto", "webp", "avif"]}
          alt="school campus building"
          style={{ marginBottom: `1.45rem` }}
          placeholder="blurred"
        />
        <h3 className="font-semibold">Sustainable School Campus:</h3>
        <p>
          Led the design of a sustainable school campus that incorporates
          energy-efficient lighting, rainwater harvesting for irrigation, and
          educational green spaces. This project not only provides an
          eco-friendly learning environment but also serves as a living
          laboratory, inspiring the next generation to embrace sustainable
          practices.
        </p>
      </div>

      <div className="border border-gray-300 rounded p-4">
        <StaticImage
src="../images/apartment.png"
width={300}
          quality={65}
          formats={["auto", "webp", "avif"]}
          alt="school campus building"
          style={{ marginBottom: `1.45rem` }}
          placeholder="blurred"
        />
        <h3 className="font-semibold">Eco-Focused Residential Retrofit:</h3>
        <p>
          Managed a residential retrofit project that applied sustainable design
          principles to an existing home, including energy-efficient windows,
          insulation, and solar panel installation. This initiative demonstrates
          the possibilities of reducing the carbon footprint of existing
          structures while enhancing comfort and energy savings.
        </p>
      </div>
    </wrapper>

    <div className="text-center font-semibold text-2xl my-4">
      <p>Images from my latest projects</p>
      <Carousel />
    </div>
  </Layout>
)

export const Head = () => <Seo title="Portfolio" />

export default Portfolio
