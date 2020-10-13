import React from "react"
import { Link } from "gatsby"

const PostPreview = ({ post }) => {
  return (
    <article
      style={{
        borderBottom: "1px solid #ddd",
        marginTop: "0.75rem",
        paddingBottom: "1rem",
      }}
      >
      <h2>
        <Link
          style={{
            textShadow: `none`,
            backgroundImage: `none`,
            textDecoration: "none",
            color: "black",
          }}
          to={`../${post.slug}`}
        >
          {post.title}
        </Link>
      </h2>
      <p>{post.excerpt}</p>
      <Link to={`../${post.slug}`}>read this post &rarr;</Link>
    </article>
  )
}

export default PostPreview
