import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "components/Layout"
import Seo from 'components/Seo';

const img1 = '../assets/media/boats/oryx_36/1.jpg'
const img2 = '../assets/media/boats/oryx_36/2.jpg'
const img3 = '../assets/media/boats/oryx_36/3.jpg'
const img4 = '../assets/media/boats/oryx_36/4.jpg'
const img5 = '../assets/media/boats/oryx_36/5.jpg'
const img6 = '../assets/media/boats/oryx_36/6.jpg'

// markup
const Page = ({location, data}) => {
  return (
    <Layout>
      <Seo
        title={'Oryx 36 - fishing boat'}
        pathname={location.pathname}
      />
      <section className="section">
        <div className="container">
          <h1>Oryx 36</h1>
          <StaticImage placeholder="blurred"  src={img1} alt="Oryx 36 1" width={600} />
          <StaticImage placeholder="blurred"  src={img2} alt="Oryx 36 2" width={600} />
          <StaticImage placeholder="blurred"  src={img3} alt="Oryx 36 3" width={600} />
          <StaticImage placeholder="blurred"  src={img4} alt="Oryx 36 4" width={600} />
          <StaticImage placeholder="blurred"  src={img5} alt="Oryx 36 5" width={600} />
          <StaticImage placeholder="blurred"  src={img6} alt="Oryx 36 6" width={600} />
          <br/>
          <br/>
          <h2>Specifications</h2>
          <ul>
            <li>Maximum of 10 guests including kids</li>
            <li>Air conditioned</li>
            <li>2 cabins</li>
            <li>1 toilets</li>
            <li>Saloon</li>
            <li>Mini Kitchen</li>
            <li>2 sun bed on the front deck</li>
            <li>Back deck sitting area</li>
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
