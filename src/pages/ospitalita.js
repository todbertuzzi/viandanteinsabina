import React from "react"
import Gallery from "../components/gallery-page"
import Layout from "../components/layout"
import Seo from "../components/seo"
import OspitalitaHeader from "../components/ospitalita/ospitalitaHeader"

const OspitalitaPage = () => {
  return (
    <Layout>
       <Seo
        title="Ospitalità - La casa del Viandante"
        description="La casa del Viandante - Ospitalità"
      ></Seo>
      <OspitalitaHeader></OspitalitaHeader>
    
    </Layout>
  )
}

export default OspitalitaPage
