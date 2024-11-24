import React from 'react'
import './Body.css'
import data from './icons.json'
import items from './items.json'

const Body = () => {
  return (
    <div className='container'>
        <div className="border-top"></div>
        <div className="body">
          <div className="icon-body">
            <div className="icons-container">
              <div className="icons">
              {data.map((item, index)=> (
                <div className="icon">
                  <i className={item.icon}/>
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
              <button className="scroll-btn">
                <i className='fas fa-arrow-right'/>
              </button>
            </div>
            
            <div className="btn filter">
              <i className='fas fa-arrow-down-short-wide'/>
              <p>Filters</p>
            </div>

            <div className="btn display-total">
              <p>Display total before taxes</p>
              <button className="toggle-btn"></button>
            </div>
          </div>
          <div className="item-container">
            {items.map((item, index)=>(
              <div className="item">
              <div className="img-container">
                <img src={item.img} alt="" className="img" />
                <i className='fas fa-heart'/>
              </div>
              <div className="content-div">
                  <div className="left-div">
                    <div className="property-name">
                      {item['property-name']}
                    </div>
                    <div className="distance">{item.distance}</div>
                    <div className="date">{item.date}</div>
                    <div className="rate">{item.rate}</div>
                  </div>
                  <div className="right-div">
                    <i className='fas fa-star'/> {item.rating}
                  </div>
                </div>
            </div>
            ))}            
          </div>
        </div>       
    </div>
  )
}

export default Body