
import AdminRoot from "../pages/admin/AdminRoot"
import Add from "../pages/admin/add/add"
import Error from "../pages/error/error/error"
import SiteRoot from "../pages/site/SiteRoot"
import Basket from "../pages/site/basket/Basket"

import Detail from "../pages/site/detail/detail"
import Home from "../pages/site/home/home"
import ShopPage from "../pages/site/store/store"
import WishList from "../pages/site/wishlist/wishlist"

const ROUTES =[
    {
        path:"/",
        element:<SiteRoot/>,
        children:[
            {
                path:"",
                element:<Home/>
            },{
                path:"det/:id",
                element:<Detail/>
            },{
                path:"basket",
                element:<Basket/>
            },{
                path:"shop",
                element:<ShopPage/>
            },{
                path:"wish",
                element:<WishList/>
            }
        ]
    },
    {
        path:"/admin",
        element: <AdminRoot/>,
        children:[
            {
                path:"",
                element:<Add/>
            }
           
        ]
    }
    ,    {
        path:"*",
        element:<Error/>,
        
    },
]
export default ROUTES;