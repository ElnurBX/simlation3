import React from 'react'
import './CrudCard.scss'
import { Link } from 'react-router-dom'
const CrudCard = ({data ,addBasket,wishtoggel }) => {
    
  return (
    <section className='CrudCard mt-5 mb-5'>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-lg-6 text-center">
                    <h5 className='text-secondary fs-6 mb-1'>POPULAR PRODUCTS</h5>
                    <h2 className='fw-bold display-6 mb-2'>Our Products    </h2>
                    <p className='text-body-tertiary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.</p>
                </div>
            </div>
            <div className="row">
                {
                    data.map((item,index)=>{
                        const {title,img,descrip,price,_id}=item
                        return(
                            <div key={index} className="col-12 col-md-6 col-xxl-4 CrudCard__card">
                               <div className="CrudCard__card__img">
                                <img src={img} className='w-100'  alt="" />
                               </div>
                               <div className="CrudCard__card__text text-center p-3">
                                    <Link className='h5 text-decoration-none' to={`/det/${_id}`}>{title}</Link>
                                    <div className="icons mb-2">
                                        <span> <i class="fa-solid fa-star"></i> <span>5.0   </span></span>
                                        <span><button onClick={()=>wishtoggel(item)} className='btn'><i class="fa-solid fa-heart"></i></button> 29</span>
                                    </div>
                                    <p className='text-body-tertiary'>Lorem ipsum dolor sit amet, consectetur adipisicing. </p>
                                    <div className="buttons">
                                            <button onClick={()=>addBasket(item)} className="btn btn-1">
                                               CART
                                            </button>
                                            <button className="btn btn-2">
                                                VIEW
                                            </button>
                                    </div>
                               </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default CrudCard