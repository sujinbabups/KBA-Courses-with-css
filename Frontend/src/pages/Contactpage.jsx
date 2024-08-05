import React from 'react'
import '../styles/Contactstyle.css'
// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</link>
const Contactpage = () => {
    return (
        <>
        
           <div className="contact-div">
      <section className="section">
        <div className="container">
          <div className="head-div">
            <p className="contact-title">Contact us</p>
            <h1 className="main-title">Get in touch</h1>
            <p className="sub-title">Our friendly team is always here to chat.</p>
          </div>

          <div className="grid">
            <div className="card">
              <span className="icon-bg">
                <i className="fas fa-envelope icon"></i>
              </span>
              <h2 className="card-title">Email</h2>
              <p className="card-text">Our friendly team is here to help.</p>
              <p className="card-link">hello@merakiui.com</p>
            </div>

            <div className="card">
              <span className="icon-bg">
                <i className="fas fa-map-marker-alt icon"></i>
              </span>
              <h2 className="card-title">Office</h2>
              <p className="card-text">Come say hello at our office HQ.</p>
              <p className="card-link">100 Smith Street Collingwood VIC 3066 AU</p>
            </div>

            <div className="card">
              <span className="icon-bg">
                <i className="fas fa-phone icon"></i>
              </span>
              <h2 className="card-title">Phone</h2>
              <p className="card-text">Mon-Fri from 8am to 5pm.</p>
              <p className="card-link">+1 (555) 000-0000</p>
            </div>
          </div>
        </div>
      </section>
    </div>

        </>
    )
}

export default Contactpage
