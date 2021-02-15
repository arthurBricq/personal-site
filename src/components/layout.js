import React from "react"
import { Link } from "gatsby"
import Footer from "./footer"
import Styles from "./layout.module.css"
import Header from "./header"
import Project from "../components/project"
import { titleToId } from "../utils/titleToId"
import { useLocation } from "react-router-dom"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const TableOfContent = ({content}) => {
  const url = typeof window !== 'undefined' ? window.location.pathname : '';

  return (
    <nav className={Styles.tableOfContent}>
      <div style={{position:"sticky", top: "20px", display:"block"}}>
        <p style={{fontWeight: "bold", fontSize: 25, color: "black"}}>Table of Content</p>
        {
          content.map((node, i) => {
            const id = titleToId(node.name)
            return (
              <p className={Styles.contentLink}>
              <Link key={i} to={url+"#"+id}>{node.name}</Link>
              </p>
            )
          })
        }
      </div>
    </nav>
  )
}


export default function Layout({ children , location}) {

  // Construct the data model for the table of content
  // it's constituted of all the 'Headers' and of all the 'Projects' present on the current page
  var content = []
  for (let x in children) {
    if (children[x].type == Header) {
      const name = children[x].props.headerText
      console.log(children[x])
      content.push({"name": name})
    }
    else if (children[x] instanceof Array) {
      if (children[x][0].type == Project) {
        // it means this is an array of projects
        // --> let's add all the projects name to the TOC
        for (let i in children[x]) {
          content.push({"name": children[x][i].props.node.frontmatter.title })
        }
      }
    }
  }
  console.log(content)


  return (
    <div style={{ margin: `3rem auto`, maxWidth: 900,}}>
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
      <div className={Styles.container}>
        <div className={Styles.contentContainer}>
          {children}
        </div>
        <TableOfContent content={content}/>
      </div>
      <Footer/>
    </div>
  )
}

