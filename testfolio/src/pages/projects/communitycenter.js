import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"


const HouseComp = () => {
    return (
    <Layout>
        <div>
          <StaticImage
          src="https://images.unsplash.com/photo-1504494645474-cc4e25299579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
          width={300}
          quality={65}
          formats={["auto", "webp", "avif"]}
          alt="housing complex"
          style={{ marginBottom: `1.45rem` }}
          placeholder="blurred"
        />
        <h1 className="font-semibold">Net-Zero Energy Housing Complex:</h1>
        <p>
          Designed and implemented a pioneering net-zero energy housing complex
          that integrates advanced solar panels, rainwater harvesting systems,
          and energy-efficient building materials. This sustainable community
          not only reduces its environmental impact but also serves as a model
          for self-sustaining living, showcasing the potential of renewable
          energy and resource conservation.
        </p>
        </div>

    </Layout>
    )
}

export default HouseComp