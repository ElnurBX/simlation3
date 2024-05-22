
import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import MainContext from '../../../context/context'

const WishList = () => {
    const { wish,wishtoggel} = useContext(MainContext)

    return (
    <>
            <Helmet>
                <title>WishList</title>
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
                    </tr>
                </thead>
                <tbody>
                   {
                    wish.map((items,index)=>{
                        console.log(items)
                        return(
                            <tr key={index}>
                            <th scope="row">1</th>
                            <td>{items.item.title}</td>
                            <td>{items.item.price}</td>
                            <td><img src={items.item.img} width={"60px"} height={"60px"} alt="" /></td>
                            <td><button onClick={()=>wishtoggel(items.item)} className='btn btn-danger'>-</button></td>
                          
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

export default WishList
    