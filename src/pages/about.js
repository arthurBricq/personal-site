import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import ResumePDF from "../content/resume.pdf"
import "../styles/global.css"
import Bf from "../components/bf"



export default function About({data}) {
  return (
    <Layout>
      <Header headerText="Contact" />
      <p>My <Bf>resume</Bf> is accessible <Link href={ResumePDF} download>here</Link>.</p>
      <Header headerText="About my website"/>
      <p>I have done this website using Gatsby. Gatsby is a framework to deploy React websites statically, which is doubly great ! Static websites are cool. And React is awesome. </p>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`