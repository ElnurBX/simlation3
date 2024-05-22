import React, { useContext, useEffect, useState } from 'react'
import "./deteail.scss"
import axios from 'axios';
import { useParams } from 'react-router';
import MainContext from '../../../context/context';

const Detail = () => {
    const {id}= useParams()
    const { addBasket} = useContext(MainContext)
    const [det ,setDet]=useState({})
    useEffect(() => {
        axios.get(`http://localhost:8080/api/Produc/${id}`).then(
           (res)=>setDet({...res.data})
        )

       }, []);
    
  return (
    <main>
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 mb-5 ">
                    <img src={det.img} className='w-100' alt="" />
                </div>
                <div className="col-12 col-md-6 ">
                    <h1 className='mb-5'>{det.title}</h1>
                    <h5>{det.descrip}</h5>
                    <h5>{det.price}</h5>
                    <div className="butons">
                        <button className='btn btn-dark' onClick={()=>{addBasket(det)}}> add Basket</button>
                    </div>
                </div>
            </div>

        </div>
    </main>
  )
}

export default Detail