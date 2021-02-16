import React, { useCallback, useState } from "react"
import {Collapse} from "react-collapse" 
import Img from "gatsby-image"
import styles from "../pages/projects.module.css"
import { titleToId } from "../utils/titleToId";
import ImageButton from "./imageButton";

/**
 * This component will diplay a project described by its node representation (graphQL) from its markdown document.
 * 
 * @param {*} node: one project, from GraphQL
 */
export default function Project({node, key, githubLogo, youtubeLogo}) {
  const [isExpanded, setIsExpanded] = useState(false) ; 

  const onClickExpand = useCallback(
    () => setIsExpanded(!isExpanded), 
    [isExpanded]
  )

  // compute the id from the title
  const id = titleToId(node.frontmatter.title)

  return (
    <div key={key}>
      <div className={styles.header}>
        <div>
          <div style={{display: "flex", alignItems:"center", justifyContent:"flex-start"}}>
            <h2 className={styles.projectTitle} id={id}>{node.frontmatter.title}</h2>
            {
              node.frontmatter.github && (
                <ImageButton link={node.frontmatter.github} fixed={githubLogo}/>
              )
            }
            {
              node.frontmatter.youtube && (
                <ImageButton link={node.frontmatter.youtube} fixed={youtubeLogo}/>
              )
            }
          </div>
          <ul style={{margin: "0px"}}>
          {
            node.frontmatter.keywords.map((word, index) => (
              <li className={styles.keyword} key={index}>{word}</li>
            ))
          }
          </ul>
          <p>{node.frontmatter.description}</p>
        </div>
        {node.frontmatter.featuredImage && 
          <div className={styles.featuredImage}>
            <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
          </div>
        }
      </div>
      <Collapse isOpened={isExpanded}>
        <div dangerouslySetInnerHTML={{ __html: node.html}}></div>
      </Collapse>
      <button onClick={onClickExpand}>{isExpanded ? "Hide" : "Show more"}</button>
      <hr className={styles.hr}/>
    </div>
  )
}