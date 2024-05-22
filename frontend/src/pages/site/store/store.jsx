import React, { useContext, useState } from 'react'
import { Helmet } from 'react-helmet'
import MainContext from '../../../context/context'
import CrudCard from '../../../components/CrudCard/CrudCard'


const ShopPage = () => {
    const {data ,addBasket,delBasket,wishtoggel} = useContext(MainContext)
    const [sorted,setSorted]=useState(null)
    const sorting=(str)=>{
        let change=[]
        switch (str) {
            case "A-Z":
                change=[...data.sort((a, b) => a.title.localeCompare(b.title))
]
              break;
            case "Z-A":
              change = [...data.sort((a, b) => b.title.localeCompare(a.title))
];
              break;
            case "Low":
                change = [...data.sort((a, b)=> a.price-b.price)];
                break;

            case "High":
                change = [...data.sort((a, b)=> b.price-a.price)];
                break;
            default:
              change = [...data.sort()];
          }
          setSorted(change)
          console.log(sorted)
    }
    const Search = (str) => {
        const filteredData = str === '' ? data : data.filter(item => item.title.toLowerCase().includes(str.toLowerCase()));
        setSorted(filteredData);
    };
    
    return (
    <>
            <Helmet>
                <title>ShopPage</title>
            </Helmet>
            <div>
            <section className='CrudItems mt-5 pt-5'>
                <div className="container">
                    <div className="sortbar mb-3">
                        <select onClick={(e)=>{
                            sorting(e.target.value)
                        }} >
                            <option value="A-Z">A-Z</option>
                            <option value="Z-A">Z-A</option>
                            <option value="High">Azalan sira</option>
                            <option value="Low">Artan sira</option>
                        </select>
                    </div>
                    <div className="searcbar mb-5">
                        <input type="text" onChange={(e)=>{
                            Search(e.target.value)
                        }} />
                    </div>
                    <div className="CrudItems__cards   row">
                    {
                        <CrudCard data={ (sorted === null ? data : sorted)}   addBasket={addBasket} delBasket={delBasket} wishtoggel={wishtoggel}/>
                    }
                    </div>
                </div>
                </section>
            </div>
    </>
    )
}

export default ShopPage
    