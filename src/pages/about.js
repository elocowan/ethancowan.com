import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function About({ data }) {
  return (
    <div>
      <Layout>
        <Header headerText="Hi, I'm Ethan" />
        <p>here's the title: {data.site.siteMetadata.title}</p>
      </Layout>
    </div>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
