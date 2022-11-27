import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "components/Layout"
import Seo from 'components/Seo';

const img1 = '../assets/media/boats/silvercraft_33/1.jpg'
const img2 = '../assets/media/boats/silvercraft_33/2.jpg'
const img3 = '../assets/media/boats/silvercraft_33/3.jpg'
const img4 = '../assets/media/boats/silvercraft_33/4.jpg'
const img5 = '../assets/media/boats/silvercraft_33/5.jpg'

// markup
const Page = ({location, data}) => {
  return (
    <Layout>
      <Seo
        title={'silverCraft 32ft - fishing boat'}
        pathname={location.pathname}
      />
      <section className="section">
        <div className="container">
          <h1>SilverCraft 33ft</h1>
          <div className="boat-gallery">
            <StaticImage placeholder="blurred"  src={img1} alt="silvercraft 32 1" width={600} />
            <StaticImage placeholder="blurred"  src={img2} alt="silvercraft 32 2" width={600} />
            {/*<StaticImage placeholder="blurred"  src={img3} alt="silvercraft 32 3" width={600} />*/}
            <StaticImage placeholder="blurred"  src={img4} alt="silvercraft 32 3" width={600} />
            <StaticImage placeholder="blurred"  src={img5} alt="silvercraft 32 3" width={600} />
          </div>
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
