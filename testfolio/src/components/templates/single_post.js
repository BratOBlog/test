import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"


const BlogPostTemplate = ({ data }) => {

  return (
    <Layout>
      <div>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <p>{data.markdownRemark.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    markdownRemark {
      frontmatter {
        title
        date
        slug
      }
      html
    }
  }
`;

export default BlogPostTemplate
