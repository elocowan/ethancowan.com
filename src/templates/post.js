import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      body
      headings {
        depth
        value
      }
      tableOfContents
      timeToRead
      fields {
        slug
      }
    }
  }
`

const PostTemplate = ({ data: { mdx: post } }) => {
  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <p style={{ fontSize: "0.75rem" }}>{post.frontmatter.date} - {post.timeToRead} minutes to read</p>
      <MDXRenderer data={post}>{post.body}</MDXRenderer>
      <Link to="/blog">&larr; back to all posts</Link>
    </Layout>
  )
}

export default PostTemplate
