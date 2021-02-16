import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import ResumePDF from "../content/resume.pdf"
import "../styles/global.css"
import Bf from "../components/bf"
import Information from "../components/information"

export default function About({data}) {
  console.log(data)
  return (
    <Layout>
      <Header headerText="Contacts"/>
      <Information />
      
      <Header headerText="Resume" />
      <p>My <Bf>resume</Bf> is accessible <Link href={ResumePDF} download>here</Link>.</p>
      <Header headerText="About my website"/>
      <p>I have done this website using Gatsby. Gatsby is a framework to deploy React websites statically, it is twice great ! Static websites are cool. And React is awesome. You can find all the source code of this website under this <a href="https://github.com/arthurBricq/personal-site">repository</a>. </p>
    </Layout>
  )
}
