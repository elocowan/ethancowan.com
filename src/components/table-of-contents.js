import React from "react"
import Slugger from "github-slugger"
import styled from "@emotion/styled"

const Paragraph = styled.div`
  margin: 0;
`

const slugger = new Slugger()

export default ({ headings }) => (
  <>
    <h2>Table of Contents</h2>
    {headings
      .filter(heading => heading.depth !== 1)
      .map(heading => (
        <Paragraph key={heading.value}>
          <a href={"#" + slugger.slug(heading.value)}>{heading.value}</a>
        </Paragraph>
      ))}
  </>
)
