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
    <Project node={node} />
  )

  return (
    <Layout>
      <Header headerText="Discover some of my projects"/>
      <p>Here is a selection of some projects I have come to realize. For some of them, more documentation is available under the github link !</p>

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
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            description
            keywords
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
    }
  }
  `