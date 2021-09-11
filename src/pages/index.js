import React, { useEffect, useState  } from 'react';
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "components/Layout";
import Seo from 'components/Seo';
import { StaticImage } from "gatsby-plugin-image"


const Oryx = '../assets/media/boats/oryx_36/1.jpg'
const Silvercraft = '../assets/media/boats/silvercraft_36/1.jpg'
const Gulfcraft = '../assets/media/boats/gulfcraft_33/1.jpg'
const Gulfcraft32 = '../assets/media/boats/gulfcraft_32/1.jpg'


const IndexPage = ({location, data}) => {
  const [src, setSrc] = useState(0);

  const requestInterval = (fn, delay) => {

  	var start = new Date().getTime();
  	var handle = {};

  	const loop = () => {
  		var current = new Date().getTime(),
  			delta = current - start;

  		if(delta >= delay) {
  			//update();
        fn.call();
  			start = new Date().getTime();
  		}

  		handle.value = requestAnimationFrame(loop);
  	};

  	handle.value = requestAnimationFrame(loop);
  	return handle;
  }

  useEffect(() => {

    const intervalId = requestInterval(()=>{
      console.log('src',src);
      setSrc(i => i==45?0:++i)
    },500);

    return () => cancelAnimationFrame(intervalId.value)
  },[]);

  return (
    <Layout>
      <Seo
        title={'DeepBlueFishing - Fishing boats in Dubai'}
        pathname={location.pathname}
      />
      <section className="section">
        <div className="container">
          <h1>Your way for safe and fun Fishing</h1>
          <img
            placeholder="blurred"
            className="gallery"
            src={`/media/fishing_${src}.jpg`}
            alt={ 'dubai fishing gallery ' + src }
          />
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
              <Link to="/silvercraft-36">
                <h3>Silvercraft 36</h3>
                <StaticImage placeholder="blurred"  src={Silvercraft} alt="Silvercraft" width={400} />
              </Link>
            </div>
            <div className="column is-half">
              <Link to="/oryx-36">
                <h3>Oryx 36</h3>
                <StaticImage placeholder="blurred"  src={Oryx} alt="Oryx" width={400} />
              </Link>
            </div>
            <div className="column is-half">
              <Link to="/gulfcraft-33">
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
