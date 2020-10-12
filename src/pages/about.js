import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import useSiteMetadata from "../hooks/use-sitemetadata"

export default function About({ data }) {
  const { title } = useSiteMetadata();

  return (
    <div>
      <Layout>
        <Header headerText="Hi, I'm Ethan" />
        <p>here's the title: {title}</p>
      </Layout>
    </div>
  )
}
