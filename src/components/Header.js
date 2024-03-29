import React, {useState, useEffect } from "react"
import { Link } from "gatsby"
import Logo from 'assets/media/logo.png';
import Menu from 'assets/svg/menu.svg';
import WhatsappIcon from 'assets/svg/whatsapp.svg';
import { StaticImage } from "gatsby-plugin-image"

const logo = 'assets/media/logo.png';

export default function Header({onOpenQuote}) {
  const [open, setOpen] = useState(false);


  useEffect(() => {
  }, []);

  return (
    <header className="section" id="header">
        <div className="container">
          <nav
            className="navbar"
            role="navigation"
            aria-label="main navigation"
          >

            <div className="navbar-brand">
              <Link to="/" className="logo-link">
                {/*<img src={Logo} alt="DeepBlueFishing" id="logo"  />*/}
                Deep Blue Fishing
              </Link>

              <a className={`whatsapp-link`} href="https://wa.me/971582491100"><WhatsappIcon /></a>

              <div
                className={` burger ${open && 'is-active'}`}
                onClick={()=>setOpen(v => !v)}
              >
                {/*<Menu/>*/}
                <span></span><span></span><span></span>
              </div>
            </div>

            <div className={`navbar-menu ${open ? 'is-active' : '' }`}>
              <div className="navbar-end">
                <a className="navbar-item" href="https://wa.me/971582491100">WhatsApp</a>
                <Link className="navbar-item" to="/#boats">Boats</Link>
                <Link className="navbar-item" to="/#about">About</Link>
                <Link className="navbar-item" to="/#contacts">Contact</Link>
                {/*<Link className="navbar-item button is-primary " to="/instant-quote">Request a Quotation</Link>*/}
              </div>
            </div>

          </nav>
        </div>
      </header>
  )
}
