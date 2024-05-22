import { Link } from 'react-router-dom'
import './header.scss'
import React from 'react'

const Header = () => {
return (
    <header className='header'>
        <div className="header__ust">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="icopns">
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-twitter"></i>    
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-linkedin"></i>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="conect">
                            <span > <i className="fa-solid fa-phone"></i><span className='d-none d-xl-block '>(+1) 234 5678 9101</span></span>
                            <span> <i className="fa-solid fa-envelope"></i><span className='d-none d-xl-block '>shop@yourdomain.com</span></span>
                        </div>
                       
                       
                    </div>
                </div>
            </div>
        </div>
        <div className="header__alt">
            <div className="container">
                <div className="row">
                    <div className="col-4 ">
                        <h1>Selling<span>.</span></h1>
                    </div>
                    <div className="col-8 align-items-center d-flex   justify-content-center">
                    <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid ">
                  
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to={"/"} className="nav-link active" aria-current="page" href="#">Home</Link>
                            <Link to={"/admin"} className="nav-link" href="#">Admin</Link>
                            <Link to={"/basket"} className="nav-link" href="#">basket</Link>
                            <Link to={"/wish"} className="nav-link " >wishlist</Link>
                            <Link to={"/shop"} className="nav-link " >Shop</Link>
                        </div>
                        </div>
                    </div>
                    </nav>
                    </div>
                </div>
            </div>
        </div>
    </header>
)
}

export default Header
                            