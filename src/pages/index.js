import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

export default function Home() {
  const data = useStaticQuery(graphql`
  query MyQuery {
    file(relativePath: {eq: "front-smile.jpg"}) {
      name
      sharp: childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
  `)
  console.log(data)
  return (
    <Layout>
      <h1>Hi, I'm Ethan</h1>
      <Img fixed={data.file.sharp.fixed} />
      <p>Welcome to my home on the web.</p>
    </Layout>
  )
}
