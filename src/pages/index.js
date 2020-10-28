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

  return (
    <Layout>
      <h1>Hi, I'm Ethan</h1>
      <Img fixed={data.file.sharp.fixed} />
      <h3>Quick bio</h3>
      <p>I teach Feldenkrais lessons over zoom using a transparent generosity model. You can schedule an intro call <a href="https://app.acuityscheduling.com/schedule.php?owner=16756071">here</a>.</p>
      <p>My mission is to help Somatic Education increase choice and decrease compulsion in the modern world.</p>
      <p>I write about somatics, liberal education, early childhood development and more.</p>
      <h3>My timeline</h3>
      <p>I was born in Menlo Park, CA in 1985. My father worked as a systems administrator for a computer company and my mother ran her own commercial interior design firm. We moved to Boulder, CO in 1995 because my Mother grew up here, and my parents were burnt out by the work culture of Silicon Valley. As a young person, I was passionate about gymnastics, skateboarding and jazz.</p>
      <p>I got a liberal education from Oberlin College between 2003-2007. My honors thesis was a <a href="http://www2.york.psu.edu/~jmj3/myrecipe.htm">Mystory</a> called 'The Oberlin Bachelor Machine.' At Oberlin, I also got involved in contemporary dance performance and discovered the field of <a href="https://ethancowan.com/history-of-somatics-part-1">Somatics</a>.</p>
      <p>After college, I moved to New York City where I danced in the Contact Improvisation community and became a student of the <a href="https://ethancowan.com/feldenkrais-emotions-intellect">Feldenkrais</a> method.</p>
      <p>I didn't feel at home on the east coast, so I moved back to northern California in 2010, where I completed my four year Feldenkrais training with <a href="http://www.semiophysics.com/SemioPhysics_Articles.html">Dennis Leri</a>.</p>

      <p>In 2013, I moved back to Boulder to live close to my family, where I've lived ever since.</p>
    </Layout>
  )
}
