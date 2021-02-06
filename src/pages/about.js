import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function About({data}) {
  return (
    <Layout>
      <Header headerText="About my website"/>
      <h2>Name: {data.site.siteMetadata.title}</h2>
      <p>Such wow. Very React.</p>
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