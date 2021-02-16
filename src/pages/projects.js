import React, { useCallback, useState } from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import {graphql} from "gatsby"
import Project from "../components/project"

import styles from "./projects.module.css"


export default function Projects({data}) {
  // Contains all the keywords without duplicates
  const allKeywords = [... new Set(data.allMarkdownRemark.edges.map(({node}) => node.frontmatter.keywords).flat(1))]

  // State: select keyword for filtering
  const [selectedKeyword, setSelectedKeyword] = useState("")

  // State: the data model (edges are the projects)
  const [projects, setProjects] = useState(data.allMarkdownRemark.edges)

  // Callback for selecting a keyword
  const onSelectKeyword = (keyword) => {
    console.log("Keyword: ", keyword)
    if (selectedKeyword == keyword){
      setSelectedKeyword("");
      setProjects(data.allMarkdownRemark.edges)
    }
    else {
      setSelectedKeyword(keyword)
      const newData = data.allMarkdownRemark.edges.filter(({node}) => node.frontmatter.keywords.includes(keyword))
      setProjects(newData)
    }
  }

  // React Component with all the projects
  const projectsSection = projects.map(({node}, index) => 
    <Project node={node} githubLogo={data.github.childImageSharp.fixed} youtubeLogo={data.youtube.childImageSharp.fixed}/>
  )

  return (
    <Layout>
      <Header headerText="Discover some of my projects"/>
      <p>Throughout my time as a student, I had to opportunity to work on several projects and I have since some time felt a need to <strong>capture</strong> the value created during those projects. Sometimes, it was a university project and other times it was projects I had done by myself ; but all the times that I was tasked to do a big project, I loved doing it. This is my attempt to save some of what I created. </p>
      <p>So here is a selection of a few projects I have come to realize. Many of the presentation includes pictures of even videos.</p>

      <div className={styles.keywordsSelect}>
        <div className={styles.horDiv}>
          <h4 style={{margin: "0px"}}>Select a keyword</h4>
          <p className={styles.footnote}>Number of projects: {projects.length}</p>
        </div>
        <ul style={{marginTop: "10px"}}>
          {
            allKeywords.map((word, index) => (
                <button 
                  className={`${styles.keyword} ${styles.keywordButton} ${selectedKeyword == word ? styles.buttonSelected : ''}`}
                  onClick={() => onSelectKeyword(word)}
                  key={index}
                >{word}</button>
              ))
          }
        </ul>
      </div>

      {projectsSection}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___priority], order: ASC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            description
            keywords
            github
            youtube
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
          html
        }
      }
    },
    github: file(relativePath: { eq: "images/github.png" }) {
        childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fixed(width: 40, height: 40) {
            ...GatsbyImageSharpFixed
            }
        }
    }, 
    youtube: file(relativePath: { eq: "images/youtube.png" }) {
        childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fixed(width: 45, height: 30) {
            ...GatsbyImageSharpFixed
            }
        }
    }, 
  }
  `