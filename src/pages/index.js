import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

// Components
import Header from "../components/Home/header"
import FeatureSection from "../components/Home/featureSection"
import Testimonial from "../components/Home/testimonial"
import FeaturedBlog from "../components/FeaturedBlog"
import Seo from "../components/seo"


export const Head = ({ data }) => {
  const { title, description } = data.site.siteMetadata
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
    </>
  )
}

const IndexPage = ({ data }) => {
  const box_1 = data.allContentfulHomePageContenuti.edges[0].node.box1;
  const box_2 = data.allContentfulHomePageContenuti.edges[0].node.box2;
  const attivita = data.allContentfulHomePageContenuti.edges[0].node.sezioneAttivita;
  return (
    <div className="h-auto w-screen">
      <Layout>
       {/*  <Seo
          title="La casa del Viandante"
          description="La casa del Viandante Bad & Breakfast in Sabina, a pochi chilometri da Roma, è il luogo ideale per trascorrere un soggiorno di relax e benessere."
        ></Seo> */}
        <Header></Header>
        <FeatureSection box_1={box_1} box_2={box_2} attivita={attivita}></FeatureSection>
        {/* <FeaturedBlog></FeaturedBlog>
      <Testimonial></Testimonial> */}
      </Layout>
    </div>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allContentfulHomePageContenuti {
      edges {
        node {
          id
          box1 {
            immagine {
              gatsbyImageData
            }
            preTitolo
            titolo
            testo {
              raw
            }
          }
          box2 {
            immagine {
              gatsbyImageData
            }
            preTitolo
            titolo
            testo {
              raw
            }
          }
          sezioneAttivita {
            titolo
            descrizione {
              raw
            }
            image {
              gatsbyImage
              url
            }
            contenutoExtra {
              icon
              contenuto {
                raw
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
