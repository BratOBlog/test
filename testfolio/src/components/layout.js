/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Navbar from "./navbar"
import { StaticImage } from "gatsby-plugin-image"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <Navbar className="m-10" />

        <div className="relative">
          <div>
            <StaticImage
              src="../images/hero.jpg"
              alt="light background"
              className="w-full bg-center bg-black opacity-90"
              style={{ maxHeight: "60vh" }}
            />
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-white text-4xl font-semibold">ECOFriendly</h1>
            <h2 className="text-white text-2xl font-semibold">
              Plan for sustainable living!
            </h2>
          </div>
        </div>
      </div>
      <div>
        <main>
          {children}
        </main>
        <footer className="max-w-full flex justify-between items-center m-10 p-4">
          {" "}
          <h2>Hello from Footer</h2>© {new Date().getFullYear()} &middot; Built
          with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
