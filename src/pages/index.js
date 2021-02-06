import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Img from "gatsby-image"

export default function Home({data}) {
  return (
    <Layout>
      <Header headerText="Welcome"/>
      <p>My name is Arthur Bricq, I am a robotic master student at EPFL passionated by new technologies. This is my personal website where you will discover my passions, my skills and some projects.</p>
      <Img fixed={data.imageOne.childImageSharp.fixed} />
    </Layout>
  )
}

export const query = graphql`
  query {
    imageOne: file(relativePath: { eq: "images/self.jpeg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

