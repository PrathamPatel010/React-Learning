import React, { useEffect, useState } from 'react'
import { UseFetch } from './useFetch';
const FetchExample = () => {
    const url = "https://course-api.com/javascript-store-products";
    const {loading,products} = UseFetch(url);
    console.log(products);
    return (
        <section className="text-center">
            <h2>fetchExample</h2>
            <h2>{loading ? 'Loading' : 'Data'}</h2>
        </section>
      )
}

export default FetchExample;