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

      <h2 className="text-lg font-semibold my-3">
        What does the sustainable concept mean?{" "}
      </h2>
      <p>
        The answer is not the question is not that simple. The topic is complex
        spanning from large architectural and city designs, products, to
        sustainable homes. In general the term refers to minimize the negative
        enviromental effects. This can include design elements, materials used
        in constructions to achive less environmental footprint and it requires
        less energy, materials to build, and on the long run it is more
        feaseable to maintain.
      </p>

      <h2 className="text-lg font-semibold my-3">On a bigger scale </h2>
      <p>
        On a bigger scale we are looking at the impact of the sustainable
        concept on the environment, when designing bigger sturctures even
        cities. Currently most of the people are living in cities, and around
        2050 the negative consequences of climate change will effect living
        conditions drastically. The aim is to compensate the effects with a
        sustainable city and landscape planning.
      </p>

      <h2 className="text-lg font-semibold my-3">On a smaller scale </h2>
      <p>
        If we inspect sustainability on a smaller scale, the first thing that
        comes to mind is, sustainable homes. Usually this means that our houses
        should be more eco friendly, by using less materials, relying more on
        renewable energy sources, leave less carbon footprints during the build
        process. Innovative materials and products coupled with proven
        engineering designs to provide passive heating and cooling can allow to
        minimize the required energy to sustain a house.

        The use of recycled or locally sourced building materials are becoming more and more popular.
      </p>

      
    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
