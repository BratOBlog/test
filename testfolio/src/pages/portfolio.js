import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Carousel from "../components/carousel"
import Seo from "../components/seo"

const Portfolio = () => (
  <Layout>
    <h1> This is a Portfolio Page</h1>
    <p>
      Each of these portfolio projects exemplifies my commitment to sustainable
      engineering and showcases the transformative potential of eco-friendly
      design principles. Through these endeavors, I aim to inspire others to
      embrace innovative solutions that prioritize both human well-being and
      environmental preservation.
    </p>

    <div className="container mx-auto my-10">
  <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
    <div>
      <div className="mb-4 aos-init aos-animate">
            <h3 className="font-semibold">Net-Zero Energy Housing Complex:</h3>
            <p>
              Designed and implemented a pioneering net-zero energy housing
              complex that integrates advanced solar panels, rainwater
              harvesting systems, and energy-efficient building materials. This
              sustainable community not only reduces its environmental impact
              but also serves as a model for self-sustaining living, showcasing
              the potential of renewable energy and resource conservation.
            </p>
          </div>

          <div className="mb-4 aos-init aos-animate">
            <h3 className="font-semibold">Urban Park Revitalization:</h3>
            <p>
              Transformed a neglected urban space into a vibrant oasis by
              prioritizing sustainable landscaping, locally sourced materials,
              and water-efficient irrigation systems. This project exemplifies
              the potential of eco-friendly urban planning, creating a green
              haven that promotes community engagement, biodiversity, and
              ecological restoration.
            </p>
          </div>

          <div className="mb-4 aos-init aos-animate">
            <h3 className="font-semibold">
              Workshop Series on Sustainable Living:
            </h3>
            <p>
              Led a series of interactive workshops and seminars aimed at
              raising awareness about sustainable living practices. These events
              engaged local communities and professionals, providing practical
              insights into integrating eco-conscious choices into daily
              routines and design approaches, ultimately fostering a culture of
              sustainability.
            </p>
          </div>

          <div className="mb-4 aos-init aos-animate">
            <h3 className="font-semibold">Solar-Powered Community Center:</h3>
            <p>
              Designed a solar-powered community center that harnesses renewable
              energy to meet its electricity needs. The project highlights the
              integration of renewable technology into public spaces, inspiring
              the community while demonstrating the feasibility of solar energy
              in diverse settings.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div>
      <p>Check out my latest concepts</p>
      <Carousel />
    </div>
  </Layout>
)

export const Head = () => <Seo title="Portfolio" />

export default Portfolio
