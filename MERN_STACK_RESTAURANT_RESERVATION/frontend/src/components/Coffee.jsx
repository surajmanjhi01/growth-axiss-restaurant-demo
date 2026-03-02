import React from 'react'
import {data} from '../restApi.json'

const Coffee = () => {
  return (
    <>
      <section className='coffee' id='coffee'>
        <div className="container">
          <div className="coffee_heading_section">
            <h1 className="heading">OUR DRINKS</h1>
            <p>Discover our carefully curated selection of premium coffee drinks crafted with passion and expertise.</p>
          </div>
          <div className="coffee_container">
            {
              data[0].coffees.map(item=>(
                <div className="coffee_card" key={item.id}>
                  <img src={item.image} alt={item.title} />
                  <h3>{item.title}</h3>
                  <button>{item.type}</button>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Coffee
