
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ROUTES from "./Routes/routes";
import MainContext from "./context/context";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState('false');
    const [data, setdata] = useState([]);
    const router = createBrowserRouter(ROUTES);
    useEffect(() => {
     axios.get("http://localhost:8080/api/Produc").then(
        (res)=>setdata([...res.data])
     )
    }, []);
    const [basket, setBasket] = useState(JSON.parse(localStorage.getItem("basket")) || []);
    const modefay = (item, action) => {
        const Newbasket = [...basket];
        const target = Newbasket.find(x => x.item._id === item._id);
    
        if (target) {
            target.count += action === "add" ? 1 : -1;
    
            if (target.count === 0) {
                const filteredBasket = Newbasket.filter(x => x.item._id !== target.item._id);
                Newbasket.length = 0;
                Newbasket.push(...filteredBasket);
            }
        } else {
            if (action === "add") {
                Newbasket.push({ item: item, count: 1 });
            }
        }
    
        localStorage.setItem("basket", JSON.stringify(Newbasket));
        setBasket(Newbasket);
    };
    
  
    
    const addBasket = (item) => modefay(item, "add");
    const delBasket = (item) => modefay(item, "del");

    const [wish,setwish] = useState(JSON.parse(localStorage.getItem("wish")) || []);
    const wishmodefay = (item) => {
        const Newwish = [...wish];
        const target = Newwish.find(x => x.item._id === item._id);
    
        if (target) {        
                const filteredwish = Newwish.filter(x => x.item._id !== target.item._id);
                Newwish.length = 0;
                Newwish.push(...filteredwish);

        } else {

                Newwish.push({ item: item, count: 1 });
            
        }
    
        localStorage.setItem("wish", JSON.stringify(Newwish));
        setwish(Newwish);
    };
    
  
    const wishtoggel = (item) => wishmodefay(item);
   
    return (
        <>
        <MainContext.Provider value={{data, setdata, loading, setLoading, error, setError, basket,addBasket,delBasket,wishtoggel,wish}}>
            <RouterProvider router={router }/>
        </MainContext.Provider>
        </>
    );
}

export default App;
