import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"

export default function Blog({ data }) {
  console.log(data);
  return (
    <Layout>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.frontmatter.title}>
          <h3>
            <Link to={node.fields.slug}>
              <h3>{node.frontmatter.title} </h3>
            </Link>
            <span> — {node.frontmatter.date}</span>
          </h3>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          tableOfContents
          timeToRead
          internal {
            content
          }
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
