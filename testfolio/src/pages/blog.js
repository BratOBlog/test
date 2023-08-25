import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Blog = ({ data }) => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold">Welcome to my blog!</h1>
      <p className="mt-4">This is a test.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="Blog" />

export default Blog
