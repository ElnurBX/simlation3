
    import React, { useContext } from 'react'
    import { Helmet } from 'react-helmet'
    import MainContext from '../../../context/context'
    import { Formik } from 'formik';
    import axios from 'axios';
    const Add = () => {
        const {data,setdata} = useContext(MainContext)
        const deleteItem=(id)=>{
            axios.delete(`http://localhost:8080/api/Produc/${id}`).then((res)=>{
                setdata([...res.data])
            })
        }
        return (
        <>
                <Helmet>
                    <title>Add</title>
                </Helmet>
                <main>
              <div className="container">
                <div className="mb-5">
                <Formik
                initialValues={{ title: '', img: '' ,descrip:'',price:''}}
                validate={values => {
                    const errors = {};
                    if (!values.title) {
                    errors.title = 'Required';
                    }
                    if (!values.img) {
                        errors.img = 'Required';
                        }
                    if (!values.descrip) {
                            errors.descrip = 'Required';
                        }
                    if (!values.price) {
                         errors.price = 'Required';
                        }
                        
                    return errors;
                }}
                onSubmit={(values) => {
                    axios.post("http://localhost:8080/api/Produc",values).then((res)=>
                        setdata([...res.data])
                    )
                }}
                >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="title"
                        placeholder='title'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.title}
                    />
                    {errors.title && touched.title && errors.title}
                    <input
                        type="url"
                        name="img"
                        placeholder='img'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.img}
                    />
                    {errors.img && touched.img && errors.img}
                    <input
                        type="text"
                        name="descrip"
                        placeholder='descrip'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.descrip}
                    />
                    {errors.descrip && touched.descrip && errors.descrip}
                    <input
                        type="number"
                        name="price"
                        placeholder='price'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.price}
                    />
                    {errors.price && touched.price && errors.price}
                    <button type="submit" >
                        Submit
                    </button>
                    </form>
                )}
                </Formik>
                </div>
                <div className="container">
                    <div className="row">
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">title</th>
                            <th scope="col">image</th>
                            <th scope="col">price</th>
                            <th scope="col">delete</th>
                            </tr>
                        </thead>
                        <tbody>
                          {
                            data.map((item,index)=>{
                                return(
                                    <tr key={index}>
                                    <th scope="row">{index+1}</th>
                                    <td>{item.title}</td>
                                    <td><img src={item.img} height={"60px"} width={"60px"} alt="" /></td>
                                    <td>{item.price}</td>
                                    <td><button onClick={()=>deleteItem(item._id)} className='btn btn-danger'>delete</button></td>
                                    </tr>
                                )
                            })
                          }
                        </tbody>
                    </table>
                    </div>
                </div>
              </div>
                </main>
        </>
        )
    }
    
    export default Add
        