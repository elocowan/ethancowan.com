import React from "react"
import { Link } from "gatsby"
import useSiteMetadata from "../hooks/use-sitemetadata"
import Helmet from "react-helmet"
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  const { title, description} = useSiteMetadata();

  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <header style={{ marginBottom: `1.5rem` }}>
        <Link
          to="/"
          style={{
            textShadow: `none`,
            backgroundImage: `none`,
            textDecoration: "none",
            color: "black",
          }}
        >
          <h3 style={{ display: `inline` }}>{title}</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/blog/">Blog</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </header>
      {children}
    </div>
  )
}
