import React from "react"
import { Link } from "gatsby"
import Footer from "./footer"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  console.log(children)
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 850, padding: `0 1rem` }}>
      <header style={{ marginBottom: `1.5rem`}}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>Arthur Bricq</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/projects/">Projects</ListLink>
        </ul>
      </header>
      {children}
      <Footer/>
    </div>
  )
}