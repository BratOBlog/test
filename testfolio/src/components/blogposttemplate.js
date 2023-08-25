import React from "react"
import SanitizedHtml from "../components/sanitizedhtml"

const BlogPostTemplate = ({ data }) => {
  const post = data.allMarkdownRemark.edges[0].node;
  const { title, date, html } = post.frontmatter;

  return (
    <div>
      <h1>{title}</h1>
      <p>{date}</p>
      <SanitizedHtml html={html} />
    </div>
  );
};

export default BlogPostTemplate;
