import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Blog = ({ data }) => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold">Welcome to my blog!</h1>
      <p className="mt-4 font-semibold text-blue-400">This is a test.</p>

      <ul className="my-10">
        {data.allFile.nodes.map(node => (
          <li className="my-10" key={node.id}>
            <hr />
            {node.childrenMarkdownRemark.map(child => (
              <ul className="my-10" key={child.frontmatter.slug}>
                <li>{child.frontmatter.title}
                {child.frontmatter.date}
                {child.excerpt}</li>
              </ul>
            ))}
          </li>
        ))}
      </ul>

    </Layout>
  )
}

export const query = graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
        nodes {
          name
          relativePath
          id
          childrenMarkdownRemark {
            frontmatter {
              slug
              title
              date
            }
            excerpt(pruneLength: 150)
          }
        }
      }
    }
`;

export const Head = () => <Seo title="Blog" />

export default Blog
