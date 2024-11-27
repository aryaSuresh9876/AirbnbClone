import React, { useState } from 'react'
import './Footer.css'
import FooterItems from './Footer.json'

const Footer = () => {
    const [activeSection, setActiveSection] = useState("Popular")
  return (
    <div className="footer">
        <div className='body'>
            <div className="footer-container">
                <h2>Inspiration for future getaways</h2>
                <div className="footer-links-container">
                    <div className="footer-links">
                        {Object.keys(FooterItems).map((section)=>(
                            <div className="footer-link-div">
                                <a className={`footer-link ${activeSection === section?"a-active": ""}`} onClick={()=>setActiveSection(section)}>{section}</a>
                                <div className={`${activeSection === section?"active": ""}`}></div>
                            </div>
                        ))}
                    </div>
                    <div className="border-down"></div>
                    <div className="footer-items">
                        {FooterItems[activeSection].map((item, index)=>(
                            <div className="footer-item" key={index}>
                                <p className="p-name">{item.name}</p>
                                <p className="p-description">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="second-footer-container">
                <div className="border-bottom-no-margin"></div>
                <div className="sec-footer-container-div">
                    <div className="sec-footer sec-footer-one">
                        <p>Support</p>
                        <div>
                            <div><a href="">Help center</a></div>
                            <div><a href="">AirCover</a></div>
                            <div><a href="">Anti-discrimination</a></div>
                            <div><a href="">Disability support</a></div>
                        </div>
                    </div>
                    <div className="sec-footer sec-footer-two">
                        <p>Hosting</p>
                        <div>
                            <div><a href="">Airbnb your home</a></div>
                            <div><a href="">AirCover for Hosts</a></div>
                            <div><a href="">Hosting resources</a></div>
                            <div><a href="">Community forum</a></div>
                        </div>
                    </div>
                    <div className="sec-footer sec-footer-three">
                        <p>Airbnb</p>
                        <div>
                            <div><a href="">Newsroom</a></div>
                            <div><a href="">New features</a></div>
                            <div><a href="">Careers</a></div>
                            <div><a href="">Airbnb.org emergency stays</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>    
  )
}

export default Footer