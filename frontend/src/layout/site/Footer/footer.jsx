
import React from 'react'
import './footer.scss'
const Footer = () => {
return (
    <footer className='footer mt-5'>
       <div className="container">
        <div className="row">
            <div className="col-12 col-md-8">
                <div className="container">
                    <div className="row">
                    <div className="col-md-5 mb-2 ">
                    <h5 className='fw-bolder'>ABOUT US</h5>
                    <p className='mb-1 text-body-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere</p>
                    <p className='mb-1 text-body-secondary'>laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.</p>
                </div>
                <div className="col-md-3 mb-2 ">
                    <h5 className='fw-bolder mb-2'>QUICK LINKS</h5>
                    <ul>
                    <li className='mb-1 text-body-secondary'>About Us</li> 
                    <li className='mb-1 text-body-secondary'> Services</li>
                    <li className='mb-1 text-body-secondary'>Testimonials</li> 
                    <li className='mb-1 text-body-secondary'> Contact Us</li>
                    </ul>
                </div>
                <div className="col-md-4 mb-2 ">
                    <h5 className='fw-bolder'>FOLLOW US</h5>
                    <div className="icons">
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-twitter"></i>    
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-linkedin"></i>
                        </div>
                </div>  
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-3 ml-auto">
                <h5 className='fw-bolder'>FEATURED PRODUCT</h5>
                <img className='w-75 m-auto' src="https://preview.colorlib.com/theme/selling/images/product_1_bg.jpg.webp" alt="" />
                <h5 className='fw-bolder'>Leather Brown Shoe </h5>
                <p>$60.00</p>
                <button className='btn btn-1'>ADD TO CART</button>
            </div>
        </div>
        <div className="row m-5 text-center" >
            <p>Copyright ©2024 All rights reserved | This template is made with  <i class="fa-solid fa-heart"></i> by Colorlib</p>
        </div>
       </div>
    </footer>
)
}

export default Footer
                    