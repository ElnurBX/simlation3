
import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import MainContext from '../../../context/context'

const Basket = () => {
    const { basket,addBasket,delBasket} = useContext(MainContext)

    return (
    <>
            <Helmet>
                <title>Basket</title>
            </Helmet>
            <main>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">title</th>
                    <th scope="col">price</th>
                    <th scope="col">img</th>
                    <th scope="col">-</th>
                    <th scope="col">count</th>
                    <th scope="col">+</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    basket.map((items,index)=>{
                        console.log(items)
                        return(
                            <tr key={index}>
                            <th scope="row">1</th>
                            <td>{items.item.title}</td>
                            <td>{items.item.price}</td>
                            <td><img src={items.item.img} width={"60px"} height={"60px"} alt="" /></td>
                            <td><button onClick={()=>delBasket(items.item)} className='btn btn-danger'>-</button></td>
                            <td>{items.count}</td>
                            <td><button onClick={()=>addBasket(items.item)} className='btn btn-primary'>+</button></td>
                            </tr>
                        )
                    })
                   }
                   
                </tbody>
            </table>
            </main>
    </>
    )
}

export default Basket
    