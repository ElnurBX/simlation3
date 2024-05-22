import React from 'react'
import './SummerSale.scss'
const SummerSale = () => {
  return (
    <section className='SummerSale'>
        <div className="container">
            <div className="row ml-5">
                <div className="col-12  text-center ">
                    <h5 className='text-secondary fs-6 fw-bold' >SPECIAL PROMO</h5>
                    <h1 className='display-6 fw-bold text-light mb-3'>Summer Sale</h1>
                    <div className="timer mb-5">
                            <div className="time">
                                <h5 className='fs-1'>00</h5>
                                <span>weeks</span>
                            </div>
                            <div className="time">
                                <h5 className='fs-1'>00</h5>
                                <span>days</span>
                            </div>
                            <div className="time">
                                <h5 className='fs-1'>00</h5>
                                <span>hr</span>
                            </div>
                            <div className="time">
                                <h5 className='fs-1'>00</h5>
                                <span>min</span>
                            </div>
                            <div className="time">
                                <h5 className='fs-1'>00</h5>
                                <span>sec</span>
                            </div>
                         
                    </div>
                    <div className="">  <button className='btn btn-1'>SHOP NOW</button></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SummerSale