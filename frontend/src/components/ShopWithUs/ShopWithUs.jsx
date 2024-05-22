import React from 'react'
import './ShopWithUs.scss'
const ShopWithUs = () => {
  return (
    <section className='ShopWithUs'>
        <div className="container">
            <div className="row ml-5">
                <div className="col-12 col-lg-6">
                    <h1 className='display-1 fw-bold text-light mb-3'>Shop With Us</h1>
                    <p className='text-light fs-5 fw-light mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.</p>
                    <div className="buttons d-flex gap-2">
                        <button className='btn btn-1 fw-bold '>
                            SHOP NOW
                        </button>
                        <button className='btn btn-2 fw-bold '>
                            CLUB MEMBERSHIP
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ShopWithUs