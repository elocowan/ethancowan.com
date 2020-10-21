import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

export default function Contact() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "me-holding-tree.jpg" }) {
        name
        sharp: childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  return (
    <div>
      <Layout>
        <h1>Let's be in touch</h1>
        <Img fixed={data.file.sharp.fixed} />
        <p style={{marginTop: "10px"}}>
          Feel free to reach out or say hi on Twitter (
          <a href="https://twitter.com/elocowan">@elocowan</a>).
        </p>
        <p>
          If you'd like to talk with me about doing Feldenkrais work over zoom,
          please schedule a time{" "}
          <a href="https://app.acuityscheduling.com/schedule.php?owner=16756071">
            here
          </a>
          .
        </p>
      </Layout>
    </div>
  )
}
