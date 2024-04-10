// import React from 'react'

const CheckOut = () => {
  return (
    <>
<div>
  <section className="pay">
    <form action="" className="pay-all">
      <div className="pay-all-left">
        <h2 className="pay-all-title">Billing details</h2>
        <div className="pay-all-bill">
          <div className="pay-bill-name">
            <div className="pay-bill-firstname">
              <p>First Name</p>
              <input className="pay-bill__inputname" type="text" />
            </div>
            <div className="pay-bill-lastname">
              <p>Last Name</p>
              <input className="pay-bill__inputname" type="text" />
            </div>
          </div>
          <div className="pay-bill-company">
            <p>Company Name (Optional)</p>
            <input className="pay-bill-input" type="text" />
          </div>
          <div className="pay-bill-country">
            <p>Country / Region</p>
            <input className="pay-bill-input" type="text" />
          </div>
          <div className="pay-bill-street">
            <p>Street address</p>
            <input className="pay-bill-input" type="text" />
          </div>
          <div className="pay-bill-city">
            <p>Town / City</p>
            <input className="pay-bill-input" type="text" />
          </div>
          <div className="pay-bill-province">
            <p>Province</p>
            <input className="pay-bill-input" type="text" />
          </div>
          <div className="pay-bill-code">
            <p>Zip code</p>
            <input className="pay-bill-input" type="text" />
          </div>
          <div className="pay-bill-phone">
            <p>Phone</p>
            <input className="pay-bill-input" type="text" />
          </div>
          <div className="pay-bill-email">
            <p>Email address</p>
            <input className="pay-bill-input" type="text" />
          </div>
          <div className="pay-bill-none">
            <input className="pay-bill-inputnone" type="text" placeholder="Additional information" />
          </div>
        </div>
      </div>
      <div className="pay-all-right">
        <div className="pay-all-list">
          <div className="pay-all__name">
            <h3>Product</h3>
            <p><span>Asgaard sofa</span> x 1</p>
            <p>Subtotal</p>
            <p>Total</p>
          </div>
          <div className="pay-all__price">
            <h3>Subtotal</h3>
            <p>25.000.000đ</p>
            <p>25.000.000đ</p>
            <h2>250.00.000đ</h2>
          </div>
        </div>
        <div className="pay-all-servicepay">
          <span>
            Direct Bank Transfer
          </span>
          <p className="pay-servicepay-text">Make your payment directly into our bank account. Please use  your
            Order ID as the payment
            reference. Your order will not be  shipped until the funds have cleared in our account</p>
          <div className="pay-all-billsp">
            <input name="gender" type="radio" defaultValue="Bank" />Direct Bank Transfer
            <br /><br />
            <input name="gender" type="radio" defaultValue="Cash" />Cash On Delivery
          </div>
          <p>Your personal data will be used to support your experience  throughout this website, to manage
            access to your account, and  for other purposes described in our <strong>privacy
              policy</strong>.
          </p>
          <button className="pay-all-btn">Place order</button>
        </div>
      </div>
    </form>
  </section>
  {/*------------ kết thúc phần thanh toan ------------*/}
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
</div>

    </>
  )
}

export default CheckOut