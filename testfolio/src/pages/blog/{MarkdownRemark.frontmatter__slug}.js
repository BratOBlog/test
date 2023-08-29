import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"

const BlogPostTemplate = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      {data.allMarkdownRemark.nodes.map(node => (
        <div className="prose" key={node.frontmatter.slug}>
          <h1>{node.frontmatter.title}</h1>
          <p>{node.frontmatter.date}</p>
          <div dangerouslySetInnerHTML={{ __html: node.html }} />
        </div>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark {
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
