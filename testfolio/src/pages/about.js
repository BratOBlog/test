import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => (
  <Layout>
    <div className="mt-8 flex justify-center">
      <div className="mt-8 mx-auto grid sm:grid-cols-2 gap-10">
        <div className="max-w-lg lg:max-w-800px lg:mx-10">
          <h1 className="font-semibold text-2xl my-3">
            Hello, my name is Carlos Friendly
          </h1>
          <p className="text-lg">
            I'm a passionate civil engineer dedicated to making a positive
            impact on the world through sustainable and eco-friendly living. My
            journey began with a deep-rooted fascination for the intricate
            relationship between human structures and the environment.
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
        My mission as the founder of EcoFriendly, is to lead
        the charge in transforming our built environment into a harmonious
        coexistence with the natural world. With a passion for sustainable
        living, I'm dedicated to integrating innovative engineering practices
        that minimize our ecological footprint and maximize the well-being of
        communities. Through collaboration, transparency, and unwavering
        commitment to sustainable values, I aim to inspire a paradigm shift in
        the construction industry. By creating spaces that showcase the
        potential of passive energy strategies, cutting-edge building materials,
        and renewable technologies, my goal is to pave the way for a future
        where every structure contributes positively to the health of our planet
        and enhances the quality of life for generations to come. Through
        EcoFriendly, I aspire to ignite conversations, drive change, and create
        a legacy of sustainable engineering that resonates globally.
      </p>

      <h2 className="text-lg font-semibold my-3">My vision</h2>
      <p>
        My vision is clear: to redefine the way we think about construction and
        urban development. I firmly believe that every project, whether big or
        small, has the potential to integrate environmentally conscious
        practices. From residential homes to sprawling urban landscapes, my goal
        is to infuse each design with innovation that minimizes resource
        consumption, maximizes energy efficiency, and enhances the overall
        well-being of the community. Over the years, I've had the privilege of
        working on a diverse range of projects that reflect my commitment to
        sustainable engineering. One of my proudest accomplishments has been the
        design and implementation of a net-zero energy housing complex, where
        solar panels, rainwater harvesting, and passive cooling techniques were
        seamlessly integrated to create a self-sustaining community. Another
        notable endeavor was the revitalization of an urban park, where
        sustainable landscaping and materials transformed a neglected space into
        a vibrant oasis that encourages both leisure and ecological diversity.
      </p>

      <h2 className="text-lg font-semibold my-3">My values</h2>
      <p>
        My values are deeply rooted in a profound respect for our planet and an
        unwavering commitment to leaving a positive legacy for generations to
        come. I believe that every decision we make in the realm of civil
        engineering can have a ripple effect, influencing not only the immediate
        project but the broader environment as well. My values are:
        <ul>
          <li>
            <b>Collaboration: </b> - I believe in the power of diverse
            perspectives coming together to create holistic designs that align
            with unique project needs.
          </li>
          <li>
            <b>Integrity: </b> - Transparency and honesty guide every step of my
            work, ensuring that clients and collaborators trust in my dedication
            to sustainable principles.
          </li>
          <li>
            <b>Continuous Learning: </b> - Staying at the forefront of new
            technologies, methodologies, and best practices to ensure projects
            exceed current standards.
          </li>
          <li>
            <b>Empathy: </b> - Understanding the needs and concerns of
            communities drives me to design solutions that resonate and address
            real-life challenges.
          </li>
          <li>
            <b>Innovation: </b> - Embracing challenges as opportunities to
            explore new avenues and seek creative solutions that inspire
            sustainable practices.
          </li>
        </ul>
      </p>
    </div>
  </Layout>
)

export const Head = () => <Seo title="About" />

export default AboutPage
