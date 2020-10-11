import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
    <div style={{ color: "purple" }}>
      <ul>
        <li><Link to="/about/">About</Link></li>
        <li><Link to="/contact/">Contact</Link></li>
      </ul>
      <h1>Hi, I'm Ethan</h1>
      <p>Welcome to my home on the web</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  )
}
