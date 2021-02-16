import React from "react"
import { useStaticQuery } from "gatsby"
import {graphql} from "gatsby"
import Styles from "./information.module.css"
import ImageButton from "./imageButton"

export default function Information({}) {

    const data = useStaticQuery(graphql`
        query {
            insta: file(relativePath: { eq: "images/instagram.png" }) {
                childImageSharp {
                    # Specify the image processing specifications right in the query.
                    # Makes it trivial to update as your page's design changes.
                    fixed(width: 50, height: 50) {
                    ...GatsbyImageSharpFixed
                    }
                }
            }, 
            linkedin: file(relativePath: { eq: "images/linkedin.png" }) {
                childImageSharp {
                    # Specify the image processing specifications right in the query.
                    # Makes it trivial to update as your page's design changes.
                    fixed(width: 50, height: 50) {
                    ...GatsbyImageSharpFixed
                    }
                }
            }, 
            github: file(relativePath: { eq: "images/github.png" }) {
                childImageSharp {
                    # Specify the image processing specifications right in the query.
                    # Makes it trivial to update as your page's design changes.
                    fixed(width: 68, height: 68) {
                    ...GatsbyImageSharpFixed
                    }
                }
            }, 
        }
        `
    )

    return (
        <div>
            <div className={Styles.container}>
                <ImageButton fixed={data.linkedin.childImageSharp.fixed} link="https://www.linkedin.com/in/arthur-bricq-737548153/"/>
                <ImageButton fixed={data.github.childImageSharp.fixed} link="https://github.com/arthurBricq"/>
                <ImageButton fixed={data.insta.childImageSharp.fixed} link="https://www.instagram.com/arthurbricq/"/>
            </div>
        </div>
    )
}