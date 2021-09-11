import React from "react"

import Facebook from 'assets/svg/facebook.svg';
import Instagram from 'assets/svg/instagram.svg';
import Youtube from 'assets/svg/youtube.svg';
import Linkedin from 'assets/svg/linkedin.svg';
import Twitter from 'assets/svg/twitter.svg';


export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <nav className="level">
          <div className="level-left has-text-light">
            © DeepBlueFishing LLC.
          </div>
          <div className="level-right icon-links">
            <a href="https://www.facebook.com/fishingindubai/" rel="noopener noreferrer" target="_blank"><Facebook/></a>
            <a href="https://www.instagram.com/deepbluefishing.ae/" rel="noopener noreferrer" target="_blank"><Instagram/></a>
          </div>
        </nav>
      </div>
    </footer>
  )
}
