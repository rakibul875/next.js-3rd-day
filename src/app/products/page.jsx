import React from 'react';

const productsData=async()=>{
 const res=await fetch('http://localhost:5000/products');
 const data= await res.json();
 return data;
}

const page = async () => {
    const products=await productsData();
    console.log(products);
    return (
        <div>
            <h1>Products:{products.length}</h1>
        </div>
    );
};

export default page;