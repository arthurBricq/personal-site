import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"


export default function Home() {
  return (
    <Layout>
      <Header headerText="Welcome"/>
      <p>My name is Arthur Bricq, I am a robotic master student at EPFL passionated by new technologies. This is my personal website where you will discover my passions, my skills and some projects.</p>
    </Layout>
  )
}
