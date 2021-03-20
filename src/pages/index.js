import React from "react"
import Layout from "../components/layout"
import video from "./background.mp4"

const Index = () => {
  return (
    <Layout>
    <div className='over'></div>
    <video src={video} type="video/mp4" autoPlay muted loop/>
    <div className='text-container'>
      <h1>Home page</h1>
      <h2>The very first page, Click on the links in the Navbar Chanty!</h2>
      </div>
    </Layout>
  )
}

export default Index
