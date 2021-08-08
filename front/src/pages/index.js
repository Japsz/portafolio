import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import StackOverflow from "../components/SO"
import '../components/main.scss'
import { StaticImage } from "gatsby-plugin-image"
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
        <div className="col mt-4">
          <StackOverflow/>
          <a href="https://github.com/Japsz" className="btn btn-link ms-2">
            <StaticImage
              src="../images/github-icon.png"
              width={60}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Github Icon"
            />
            Japsz
          </a>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
