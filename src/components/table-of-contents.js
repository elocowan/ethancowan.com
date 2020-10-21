import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import styled from 'styled-components'
// import { H1, H2, P } from '../components/page-elements'
const Toc = styled.ul`
  position: fixed;
  left: calc(50% + 400px);
  top: 100px;
  max-height: 70vh;
  width: 310px;
  display: flex;
  li {
    line-height: 22px
  }
`

const InnerScroll = styled.div`
  overflow: hidden;
  overflow-y: scroll;
`
export default ({ data }) => {
  const { body, tableOfContents } = data.data
  return (
    <>
      {typeof tableOfContents.items === 'undefined' ? null : (
        <Toc>
          <InnerScroll>
            <h2>Table of contents</h2>
            {tableOfContents.items.map(i => (
              <li key={i.url}>
                <a href={i.url} key={i.url}>
                  {i.title}
                </a>
              </li>
            ))}
          </InnerScroll>
        </Toc>
      )}
      {body ? null : (<MDXRenderer>{body}</MDXRenderer>
      )}
    </>
  )
}

export const query = graphql`
  query PostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
      }
      body
      excerpt
      tableOfContents
      timeToRead
      fields {
        slug
      }
    }
  }
`




// import React from "react"
// import Slugger from "github-slugger"
// import styled from "@emotion/styled"

// const Paragraph = styled.div`
//   margin: 0;
// `

// const slugger = new Slugger()

// export default ({ headings }) => (
//   <>
//     <h2>Table of Contents</h2>
//     {headings
//       .filter(heading => heading.depth !== 1)
//       .map(heading => (
//         <Paragraph key={heading.value}>
//           <a href={"#" + slugger.slug(heading.value)}>{heading.value}</a>
//         </Paragraph>
//       ))}
//   </>
// )
