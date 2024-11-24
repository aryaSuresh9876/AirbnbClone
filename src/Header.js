import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className="body">
        <div className="header-first-container">
            <div className="logo">
                <img src="https://www.cdnlogo.com/logos/a/46/airbnb-blo.svg" alt="" className="logo-img" />
            </div>
            <div className="body-left">
                <div className="body-left-item">
                    <p>Airbnb your home</p>
                </div>
                <div className="body-left-item">
                    <img src="https://static.thenounproject.com/png/2723646-200.png" alt="" className="www-logo"/>
                </div>
                <div className="body-left-hamburger">
                    <i className="fas fa-bars"></i>
                    <div className="profile-icon">
                        <i className="fas fas-regular fa-user"></i>
                    </div>               
                </div>
            </div>
        </div>
        <div className="header-second-container">
            <div className="sec-cont sec-cont-one">Stays</div>
            <div className="sec-cont sec-cont-two hover-btn">Experiences</div>
        </div>
        <div className="header-third-container">
            <div className="flex-div">
                <div className="header-third-container-div where">
                    <p>Where</p>
                    <p className='p-subtext'>Search destinations</p>
                </div>
                <div className="border-right"></div>
            </div>
            <div className="flex-div">
                <div className="header-third-container-div check-in">
                    <p>Check in</p>
                    <p className="p-subtext">Add dates</p>
                </div>
                <div className="border-right"></div>
            </div>
            <div className="flex-div">
                <div className="header-third-container-div check-out">
                    <p>Check out</p>
                    <p className="p-subtext">Add dates</p>
                </div>
                <div className="border-right"></div>
            </div>
            <div className="flex-div flex-div-last">
                <div className="header-third-container-div who">
                    <p>Who</p>
                    <p className="p-subtext">Add guests</p>
                </div>
                <div className="header-third-container-div seach-btn">
                    <i class="fas fa-light fa-magnifying-glass"></i>
                </div>
            </div>            
        </div>
    </div>
  )
}

export default Header