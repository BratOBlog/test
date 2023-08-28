import React from "react"
import SanitizedHtml from "../sanitizedhtml"
import Layout from "../layout"
import { graphql, StaticQuery } from "gatsby"

const BlogPostTemplate = ({ data }) => {
  const post = data.allMarkdownRemark.edges[0].node;
  const { title, date, html } = post.frontmatter;

const StaticQuery = graphql`
query MyQuery {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
          date(formatString: "YYYY-MM-DD")
          slug
        }
        excerpt
      }
    }
  }
}
`

  return (
    <Layout>
    <div className="prose">
      <h1>{title}</h1>
      <p>{date}</p>
      <SanitizedHtml html={html} />
    </div>
    </Layout>
  );
};


export default BlogPostTemplate;
