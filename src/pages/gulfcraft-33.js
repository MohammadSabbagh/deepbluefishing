import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "components/Layout"
import Seo from 'components/Seo';

const img1 = '../assets/media/boats/gulfcraft_32/1.jpg'
const img2 = '../assets/media/boats/gulfcraft_32/2.jpg'
const img3 = '../assets/media/boats/gulfcraft_32/3.jpg'

// markup
const Page = ({location, data}) => {
  return (
    <Layout>
      <Seo
        title={'GulfCraft 32ft - fishing boat'}
        pathname={location.pathname}
      />
      <section className="section">
        <div className="container">
          <h1>GulfCraft 32ft</h1>
          <StaticImage placeholder="blurred"  src={img1} alt="gulfcraft 32 1" width={600} />
          <StaticImage placeholder="blurred"  src={img2} alt="gulfcraft 32 2" width={600} />
          <StaticImage placeholder="blurred"  src={img3} alt="gulfcraft 32 3" width={600} />
          <br/>
          <br/>
          <h2>Specifications</h2>
          <ul>
            <li>Maximum of 10 guests including kids</li>
            <li>cabin</li>
            <li>small bed</li>
            <li>toilet</li>
            <li>shower</li>
            <li>Mini Kitchen</li>
            <li>sound system</li>
          </ul>
        </div>
      </section>
      <section className="section ">
        <div className="container">
          {/*<StaticImage placeholder="blurred"  src={Chart} alt="services chart" />*/}
          {/*<ContactForm />*/}
          <h2>Our fishing trips include</h2>
          <ul>
            <li>Private Boat</li>
            <li>Trained Crew</li>
            <li>Fishing Equipment and Bait</li>
            <li>Safety Equipment</li>
            <li>Water, Ice & Soft Drinks</li>
            <li>Navigation System</li>
            <li>Sound System</li>
            <li>Cooler Box</li>
          </ul>
        </div>
      </section>
    </Layout>
  )
}


export default Page
