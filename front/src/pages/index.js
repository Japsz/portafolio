import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import StackOverflow from "../components/SO"
import '../components/main.scss'
import {StaticImage} from "gatsby-plugin-image"
import Carousel from "../components/Carousel"
const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="row bg-primary">
      <div className="container p-5 d-flex flex-column align-items-center">
        <StaticImage
          src="../images/closeup.jpg"
          width={200}
          className="rounded-circle"
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="My face"
        />
        <div className="col mt-4 text-center">
          <p className="text-white h5">Full Stack Developer</p>
          <p className="text-white small">Curious and eager to learn</p>
        </div>
        <div className="col mt-4 d-flex align-items-center flex-column flex-sm-row">
          <StackOverflow/>
          <a href="https://github.com/Japsz" target="_blank" rel="noreferrer" className="btn btn-white p-0 mt-2 mt-sm-0 d-flex ms-sm-2">
            <i className="bi bi-github fs-2"/>
            <span className="my-auto h4">Japsz</span>
          </a>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="container px-5 pt-5 d-flex flex-column align-items-start">
        <p className="text-primary container text-break">
          <span className="h2">Hello!</span><br/>
          I'm Benjamín Meneses, born in Santiago, Chile. I've been doing FS Development since i learnt how to in 2015 while studying Computer Science at <a href="https://www.usm.cl/" target="_blank" rel="noreferrer">UTFSM</a>.
          <br/>
          My learning journey has always been towards improving how fast and memory-efficient my code is, as to finding new ways to make it consistent using different toolings and methods of Deployments.
        </p>  
      </div>
    </div>
    <div className="row bg-secondary">
      <Carousel/>
    </div>
  </Layout>
)

export default IndexPage
