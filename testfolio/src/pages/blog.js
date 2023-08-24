import React from "react"


import Layout from "../components/layout"
import Seo from "../components/seo"

const Blog = () => (
    <Layout>
            <h1> This is a Blog Page</h1>
    </Layout>

)

export const Head = () => <Seo title="Blog" />

export default Blog