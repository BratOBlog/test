import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../layout"


const BlogPostTemplate = ({ data }) => {

  return (
    <Layout>
      <div>
        <h1>{data.allMarkdownRemark.nodes.frontmatter.title}</h1>
        <p>{data.allMarkdownRemark.nodes.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.html }} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allallMarkdownRemark {
      nodes {
        frontmatter {
          title
          date(formatString: "YYYY-MM-DD")
          slug
        }
        html
      }
    }
  }
`;

export default BlogPostTemplate
