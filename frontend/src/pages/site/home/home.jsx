
    import React, { useContext } from 'react'
    import { Helmet } from 'react-helmet'
    import MainContext from '../../../context/context'
import ShopWithUs from '../../../components/ShopWithUs/ShopWithUs'
import CrudCard from '../../../components/CrudCard/CrudCard'
import Leadership from '../../../components/Leadership/Leadership'
import SummerSale from '../../../components/SummerSale/SummerSale'
    
    const Home = () => {
        const {data,setdata , basket,addBasket,delBasket,wishtoggel} = useContext(MainContext)

        return (
        <>
                <Helmet>
                    <title>Home</title>
                </Helmet>
                <main>
                    <ShopWithUs/>
                    <CrudCard data={data.slice(0, 6)}  basket={basket} addBasket={addBasket} delBasket={delBasket} wishtogel={wishtoggel}/>
                    <Leadership/>
                    <SummerSale/>
                </main>
        </>
        )
    }
    
    export default Home
        