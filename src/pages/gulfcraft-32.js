import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "components/Layout"
import Seo from 'components/Seo';

const img1 = '../assets/media/boats/gulfcraft_32/7.jpg'
const img2 = '../assets/media/boats/gulfcraft_32/8.jpg'
const img3 = '../assets/media/boats/gulfcraft_32/9.jpg'
const img4 = '../assets/media/boats/gulfcraft_32/10.jpg'
const img5 = '../assets/media/boats/gulfcraft_32/11.jpg'
const img6 = '../assets/media/boats/gulfcraft_32/12.jpg'
const img7 = '../assets/media/boats/gulfcraft_32/13.jpg'
const img8 = '../assets/media/boats/gulfcraft_32/14.jpg'
const img9 = '../assets/media/boats/gulfcraft_32/15.jpg'
const img10 = '../assets/media/boats/gulfcraft_32/16.jpg'
const img11 = '../assets/media/boats/gulfcraft_32/17.jpg'
const img12 = '../assets/media/boats/gulfcraft_32/18.jpg'

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
          <div className="boat-gallery">
            <StaticImage placeholder="blurred"  src={img1} alt="gulfcraft 32 1" width={600} />
            <StaticImage placeholder="blurred"  src={img2} alt="gulfcraft 32 2" width={600} />
            <StaticImage placeholder="blurred"  src={img3} alt="gulfcraft 32 3" width={600} />
            <StaticImage placeholder="blurred"  src={img4} alt="gulfcraft 32 4" width={600} />
            <StaticImage placeholder="blurred"  src={img5} alt="gulfcraft 32 5" width={600} />
            <StaticImage placeholder="blurred"  src={img6} alt="gulfcraft 32 6" width={600} />
            <StaticImage placeholder="blurred"  src={img7} alt="gulfcraft 32 10" width={600} />
            <StaticImage placeholder="blurred"  src={img8} alt="gulfcraft 32 20" width={600} />
            <StaticImage placeholder="blurred"  src={img9} alt="gulfcraft 32 30" width={600} />
            <StaticImage placeholder="blurred"  src={img10} alt="gulfcraft 32 40" width={600} />
            <StaticImage placeholder="blurred"  src={img11} alt="gulfcraft 32 50" width={600} />
            <StaticImage placeholder="blurred"  src={img12} alt="gulfcraft 32 60" width={600} />
          </div>
          <br/>
          <br/>
          <h2>Specifications</h2>
          <ul>
            <li>Maximum of 8 guests including kids</li>
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
