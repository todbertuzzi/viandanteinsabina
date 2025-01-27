import * as React from "react"
import Layout from "../components/layout"

// Components
import Header from "../components/Home/header"
import FeatureSection from "../components/Home/featureSection"
import Testimonial from "../components/Home/testimonial"
import FeaturedBlog from "../components/FeaturedBlog"
import Seo from "../components/seo"

const IndexPage = () => (
  <div className="h-auto w-screen">
    <Layout>
      <Seo
        title="La casa del Viandante"
        description="La casa del Viandante "
      ></Seo>
      <Header></Header>
      <FeatureSection></FeatureSection>
      {/* <FeaturedBlog></FeaturedBlog>
      <Testimonial></Testimonial> */}
    </Layout>
  </div>
)

export default IndexPage
