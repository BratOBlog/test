import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Carousel from "../components/carousel"
import Seo from "../components/seo"

const Portfolio = () => (
  <Layout>
    <div className="my-10 mx-10">
      <h1 className="text-center font-bold text-2xl my-10">
        {" "}
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
      <div className="card mb-4 aos-init aos-animate  border border-gray-300 rounded p-4">
        <StaticImage
          src="https://images.unsplash.com/photo-1504494645474-cc4e25299579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
          width={300}
          quality={65}
          formats={["auto", "webp", "avif"]}
          alt="housing complex"
          style={{ marginBottom: `1.45rem` }}
          placeholder="blurred"
        />
        <h3 className="font-semibold">Net-Zero Energy Housing Complex:</h3>
        <p>
          Designed and implemented a pioneering net-zero energy housing complex
          that integrates advanced solar panels, rainwater harvesting systems,
          and energy-efficient building materials. This sustainable community
          not only reduces its environmental impact but also serves as a model
          for self-sustaining living, showcasing the potential of renewable
          energy and resource conservation.
        </p>
      </div>

      <div className="card mb-4 aos-init aos-animate  border border-gray-300 rounded p-4">
        <StaticImage
          src="https://images.unsplash.com/photo-1542800952-e5471ed41326?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          width={300}
          quality={65}
          formats={["auto", "webp", "avif"]}
          alt="urban park"
          style={{ marginBottom: `1.45rem` }}
          placeholder="blurred"
        />
        <h3 className="font-semibold">Urban Park Revitalization:</h3>
        <p>
          Transformed a neglected urban space into a vibrant oasis by
          prioritizing sustainable landscaping, locally sourced materials, and
          water-efficient irrigation systems. This project exemplifies the
          potential of eco-friendly urban planning, creating a green haven that
          promotes community engagement, biodiversity, and ecological
          restoration.
        </p>
      </div>

      <div className="card mb-4 aos-init aos-animate  border border-gray-300 rounded p-4">
        <StaticImage
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
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

      <div className="card mb-4 aos-init aos-animate  border border-gray-300 rounded p-4">
        <StaticImage
          src="https://images.unsplash.com/photo-1642840095012-6a8bd2a88457?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
          width={300}
          quality={65}
          formats={["auto", "webp", "avif"]}
          alt="school campus building"
          style={{ marginBottom: `1.45rem` }}
          placeholder="blurred"
        />
        <h3 className="font-semibold">Solar-Powered Community Center:</h3>
        <p>
          Designed a solar-powered community center that harnesses renewable
          energy to meet its electricity needs. The project highlights the
          integration of renewable technology into public spaces, inspiring the
          community while demonstrating the feasibility of solar energy in
          diverse settings.
        </p>
      </div>

      <div className="card mb-4 aos-init aos-animate  border border-gray-300 rounded p-4">
        <StaticImage
          src="https://images.unsplash.com/photo-1527891751199-7225231a68dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
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

      <div className="card mb-4 aos-init aos-animate  border border-gray-300 rounded p-4">
        <StaticImage
src="https://images.unsplash.com/photo-1572546946887-67f2289e1c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
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
