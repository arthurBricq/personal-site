import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import {graphql} from "gatsby"

export default function Projects({data}) {
  return (
    <Layout>
      <Header headerText="Discover some of my projects"/>
      <p>Here is a selection of some projects I have come to realize. For some of them, more documentation is available under the github link !</p>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
          }
          excerpt
        }
      }
    }
  }