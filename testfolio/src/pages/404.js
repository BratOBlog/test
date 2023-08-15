import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div className="bg-purple-100 text-3xl text-center m-auto">
    <h1 className="my-6 text-blue-900"> 404: Not Found</h1>
    <p>You just entered a page that doesn&#39;t exist...
   Use the Menu to navigate to the Home page</p>
    </div>
  
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
