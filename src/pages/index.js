import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Header from "../components/header"
import Img from "gatsby-image"
import { Link } from "gatsby"

import "../styles/global.css"
import Skills from "../components/skills"
import SkillsJSON from "../content/skills.json"

const TextHighlight = ({text}) => (
  <span className="textHighlight">{text}</span>
)

export default function Home({data}) {

  const skillSection = SkillsJSON.skills.map((skill) => {
    return (
      <Skills name={skill.name} skill={skill.content} />
    )
  })

  return (
    <Layout>
      <Header headerText="Welcome"/>
      <p>My name is Arthur Bricq, I am a robotic master student at EPFL passionated by new technologies. This is my personal website where you will discover my passions, my skills and a few projects.</p>
      <p>This website - by the way - was made fully by myself, in React using Gatsby (to be deployed statically...). Though I am no expert in Design, I hope you appreciate the experience and feel free to give me hints on how to make it better.</p>
      <p>So this is me and welcome here !</p>

      <div className="imageContainer">
        <Img fixed={data.imageOne.childImageSharp.fixed} className="img"/>
      </div>

      <p>My <TextHighlight text="formation" /> includes a <TextHighlight text="B.S. in Mechanical Engineering" /> at EPFL and a <TextHighlight text="M.S. of Science in Robotics" /> also at EPFL, during which I was part of the <TextHighlight text="Excellency Scholarship" /> program. I also studied abroad 1 year at UBC (Vancouver) and 1 year in Sao Paulo (Brasil). I am fluent in French, English and Portugues ; and I try to be fluent in Italian !</p> 

      <p>Discover some of my projects at this <Link to="/projects">Page</Link>.</p>

      <Header headerText="Skills"/>
      <p>Being a <span className="textHighlight">Robotic Engineer</span> require a set of many different skills. It is mostly for this reason I decided to go for robotics: keep an general knowledge, be a system expert. </p>
      <p>I have gained experienced in mostly 3 fields: <span className="textHighlight">Programming, Electronics & Mechanics</span>. Programmation was always something I enjoyed. Mechanical Engineering is something I learned during my bachelor. As for Electronics, I learned a lot during my master. Here is an overview of my skills.</p>
      {skillSection}
    </Layout>
  )
}

export const query = graphql`
  query {
    imageOne: file(relativePath: { eq: "images/self3.jpeg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

