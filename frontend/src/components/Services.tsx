// import React from 'react'

const services = () => {
  return (
    <section className="services">
    <div className="container-fluid">
      <div className="service-list">
        <div className="service-item">
          <img src="./img/Cup.svg" className="service__image" />
          <div className="service-info">
            <h4 className="service__name">High Quality</h4>
            <p className="service__description">crafted from top materials</p>
          </div>
        </div>
        <div className="service-item">
          <img src="./img/Group.svg" className="service__image" />
          <div className="service-info">
            <h4 className="service__name">Warranty Protection</h4>
            <p className="service__description">Over 2 years</p>
          </div>
        </div>
        <div className="service-item">
          <img src="./img/Vector.svg" className="service__image" />
          <div className="service-info">
            <h4 className="service__name">Free Shipping</h4>
            <p className="service__description">Order over 150 $</p>
          </div>
        </div>
        <div className="service-item">
          <img src="./img/customer-support.svg" className="service__image" />
          <div className="service-info">
            <h4 className="service__name">24 / 7 Support</h4>
            <p className="service__description">Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default services