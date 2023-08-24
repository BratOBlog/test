import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"

const Campus = () => (
  <Layout>
    <div className="my-10 mb-4 flex flex-col justify-center items-center">
      <h1 className="font-semibold text-3xl mt-10 mb-10">
        Sustainable School Campus
      </h1>
      <StaticImage
        src="../../images/campus.png"
        width={300}
        quality={65}
        formats={["auto", "webp", "avif"]}
        alt="school campus building"
        style={{ marginBottom: `1.45rem` }}
        placeholder="blurred"
      />
      <article className="prose">
        <p>
          Led the design of a sustainable school campus that incorporates
          energy-efficient lighting, rainwater harvesting for irrigation, and
          educational green spaces. This project not only provides an
          eco-friendly learning environment but also serves as a living
          laboratory, inspiring the next generation to embrace sustainable
          practices.
        </p>

        <h3 className="font-semibold">The Challenge:</h3>
        <p>
          Our team faced a unique set of challenges when tasked with redesigning
          the school campus. The existing infrastructure consumed excessive
          energy, and the lack of green spaces limited opportunities for
          hands-on learning about the environment. Additionally, traditional
          irrigation methods were not only wasteful but also disconnected from
          the curriculum.
        </p>

        <h3 className="font-semibold">Innovative Soutions:</h3>
        <p>
          We approached these challenges with an integrated strategy that
          combined sustainable technologies, educational components, and
          community engagement:
        </p>

        <ol>
          <li>
            <span className="font-bold">Energy-Efficient Lighting:</span> By
            replacing outdated lighting systems with energy-efficient LEDs, we
            significantly reduced the campus's energy consumption.
            Sensor-controlled lighting ensured that lights were only activated
            when needed, minimizing unnecessary electricity use.
          </li>
          <li>
            <span className="font-bold">Rainwater Harvesting:</span> To address
            the irrigation challenge, we implemented a rainwater harvesting
            system that collected and stored rainwater from rooftops. This
            harvested water was then used for irrigation purposes, reducing the
            reliance on potable water sources and promoting water conservation.
          </li>
          <li>
            <span className="font-bold">Educational Green Spaces:</span> We
            introduced a series of educational green spaces that served as
            outdoor classrooms, showcasing native plant species and sustainable
            landscaping techniques. These spaces provided students with
            opportunities to learn about ecology, biodiversity, and the
            importance of green infrastructure.
          </li>
          <li>
            <span className="font-bold">Curriculum Integration:</span> An
            innovative aspect of the project was the integration of
            sustainability concepts into the curriculum. Students participated
            in workshops and interactive sessions that complemented their
            studies, providing practical knowledge about renewable energy, water
            conservation, and sustainable practices.
          </li>
        </ol>
        <div>
          <h3>Learning from the Project</h3>
          <p>
            Throughout the journey, we encountered valuable insights and
            lessons:
            <ul>
              <li>
                <span className="font-bold">Community Engagement:</span>{" "}
                Engaging with students, teachers, and the local community was
                crucial. Their input helped shape the design and ensured that
                the changes aligned with their needs and aspirations. Lifelong
                Learning: The project reaffirmed the importance of continuous
                learning. Collaborating with educators, we gained insights into
                how sustainability concepts can be effectively woven into
                educational experiences, equipping students with skills they can
                carry throughout their lives.{" "}
              </li>
              <li>
                <span className="font-bold">Inspiring Future Leaders:</span> The
                campus project underscored the potential of education in
                nurturing environmentally conscious citizens. By offering
                hands-on experiences and interactive learning, we witnessed
                students becoming enthusiastic advocates for sustainable
                practices.
              </li>
            </ul>
            <p>
              In conclusion, the transformation of the school campus stands as a
              testament to the potential of sustainable design to inspire and
              educate. By addressing challenges creatively and holistically, we
              not only created an eco-friendly environment but also ignited a
              passion for sustainability in the hearts of young minds. As we
              continue to champion projects like these, we remain committed to
              reshaping education and engineering towards a greener, more
              promising future.
            </p>
          </p>
        </div>
      </article>
    </div>
  </Layout>
)

export default Campus
