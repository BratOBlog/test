import React from "react"


import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div className="container flex flex-col justify-center mx-auto">
      <h1 className="text-2xl text-center my-10">
        Our aim at <b>ECOFriendly</b> is to plan for a sustainable future
      </h1>

      <div>
        <h2 className="text-center text-lg font-semibold my-6">
          What does the sustainable concept mean?
        </h2>
        <p>
          The answer is not the question is not that simple. The topic is
          complex spanning from large architectural and city designs, products,
          to sustainable homes. In general the term refers to minimize the
          negative enviromental effects. This can include design elements,
          materials used in constructions to achive less environmental footprint
          and it requires less energy, materials to build, and on the long run
          it is more feaseable to maintain.
        </p>

        <h2 className="text-center text-lg font-semibold my-6">
          On a larger scale{" "}
        </h2>
        <p>
          On a bigger scale we are looking at the impact of the sustainable
          concept on the environment, when designing bigger sturctures even
          cities. Currently most of the people are living in cities, and around
          2050 the negative consequences of climate change will effect living
          conditions drastically. The aim is to compensate the effects with a
          sustainable city and landscape planning.
        </p>

        <div className="my-10 mx-auto w-full max-w-screen-md">
          <div className="relative" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/fsWr0LfM_uQ?si=AB4svd8FMnoJD1FY"
              title="YouTube video player sustainable meaning"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen="false"
            ></iframe>
          </div>
        </div>

        <h2 className="text-center text-lg font-semibold my-6">
          On a smaller scale{" "}
        </h2>
        <p>
          If we inspect sustainability on a smaller scale, the first thing that
          comes to mind is, sustainable homes. Usually this means that our
          houses should be more eco friendly, by using less materials, relying
          more on renewable energy sources, leave less carbon footprints during
          the build process. Innovative materials and products coupled with
          proven engineering designs to provide passive heating and cooling can
          allow to minimize the required energy to sustain a house. The use of
          recycled or locally sourced building materials are becoming more and
          more popular.
        </p>

        <div className="my-10 mx-auto w-full max-w-screen-md">
          <div className="relative" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/oIddRKVH6H0?si=6q3GQ_gdFZv8izMl"
              title="YouTube video player sustainable homes" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullscreen="false"
            ></iframe>
          </div>
        </div>
      </div>
    </div>

 
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
