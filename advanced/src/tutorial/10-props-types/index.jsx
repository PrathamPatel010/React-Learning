import React from 'react'
import {UseFetch} from '../09-customHooks/useFetch';
import Product from './Product';
const url = "https://course-api.com/react-prop-types-example";

const Index = () => {
    const {products} = UseFetch(url);
    return(
        <div className="container">
            <header className="text-center">
                <h2>Products</h2>
            </header>
            <div className="row">
            {products.map((product)=>{
                return (
                <div key={product.id} className="col-12 col-md-3 text-center"> 
                <Product {...product}/>
                </div>)
            })}
            </div>
        </div>
    )
}

export default Index;