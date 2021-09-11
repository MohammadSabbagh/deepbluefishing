import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "components/Layout";
import Seo from 'components/Seo';
import { StaticImage } from "gatsby-plugin-image"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


// import Oryx from '../assets/media/boats/oryx_36/oryx_1.jpg'
// import Silvercraft from '../assets/media/boats/silvercraft_36/silvercraft_1.jpg'
// import Gulfcraft from '../assets/media/boats/gulfcraft_33/gulfcraft_1.jpg'
// import Gulfcraft32 from '../assets/media/boats/gulfcraft_32/gulfcraft_32_1.jpg'

const Oryx = '../assets/media/boats/oryx_36/1.jpg'
const Silvercraft = '../assets/media/boats/silvercraft_36/1.jpg'
const Gulfcraft = '../assets/media/boats/gulfcraft_33/1.jpg'
const Gulfcraft32 = '../assets/media/boats/gulfcraft_32/1.jpg'



const settings = {
  accessibility:false,
  autoplay:true,
  autoplaySpeed:500,
  dots: false,
  fade: true,
  infinite: true,
  speed: 200,
  slidesToShow: 0,
  slidesToScroll: 0,
  arrows: false,
  centerMode: true
};

// const gallery = {
//   0:Gallery0,
//   1:Gallery1,
//   2:Gallery2,
//   3:Gallery3,
//   4:Gallery4,
//   5:Gallery5,
//   6:Gallery6,
//   7:Gallery7,
//   8:Gallery8,
//   9:Gallery9,
//   10:Gallery10
// }


const IndexPage = ({location, data}) => {
  const page = data.markdownRemark
  console.log('location.pathname',location.pathname);

  return (
    <Layout>
      <Seo
        title={'Homepage'}
        pathname={location.pathname}
      />
      <section className="section">
        <div className="container">
          <h1>Your way for safe and fun Fishing</h1>
          <Slider {...settings}>
            {
              [ ...Array(46).keys() ].map( (v,i) => (
                <div key={i}>
                  <img
                    placeholder="blurred"
                    src={`/media/fishing_${i}.jpg`}
                    alt={ 'dubai fishing gallery ' + i }
                  />
                </div>
              ))
            }
          </Slider>
        </div>
      </section>
      <section className="section" id="about">
        <div className="container narrow">
          <h2>What We Do</h2>
          <p>We do bottom fishing in the deep sea of Dubai and Trolling big game for big fish.</p>
          <p>When we do Trolling we expect to catch barracuda ,king fish and queen fish, big hamour and tuna fish.</p>
          <p>Fishing trips duration is 4 hrs, starting at 6am Or afternoon at 2 pm.</p>
          <p>Takeoff Location at Marina Walk, Spinneys roundabout</p>
        </div>
      </section>
      <section className="section" id="boats">
        <div className="container">
          <h2>Boats</h2>
          <div className="columns is-multiline">
            <div className="column is-half">
              <Link to="/gulfcraft-32">
                <h3>Silvercraft 36</h3>
                <StaticImage placeholder="blurred"  src={Silvercraft} alt="Silvercraft" width={400} />
              </Link>
            </div>
            <div className="column is-half">
              <Link to="/gulfcraft-32">
                <h3>Oryx 36</h3>
                <StaticImage placeholder="blurred"  src={Oryx} alt="Oryx" width={400} />
              </Link>
            </div>
            <div className="column is-half">
              <Link to="/gulfcraft-32">
                <h3>Gulfcraft 33</h3>
                <StaticImage placeholder="blurred"  src={Gulfcraft} alt="Gulfcraft" width={400} />
              </Link>
            </div>
            <div className="column is-half">
              <Link to="/gulfcraft-32">
                <h3>Gulfcraft 32</h3>
                <StaticImage placeholder="blurred"  src={Gulfcraft32} alt="Gulfcraft32" width={400} />
              </Link>
            </div>
          </div>
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
  );
}

export const query = graphql`
  query {
    markdownRemark(frontmatter: {title: {eq: "services"}}) {
      html
    }
  }
`

export default IndexPage
