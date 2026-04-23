import ProductsCart from '@/components/ProductsCart';
import React from 'react';


const productsData=async()=>{
 const res=await fetch('http://localhost:5000/products',{next:{revalidate:10}});
 const data= await res.json();
 return data;
}

const product = async () => {
    const products=await productsData();

    return (
        <div>
            <h1>Products:{products.length}</h1>
            <div className="grid grid-cols-3 gap-4 container mx-auto my-10">
                {
                    products.map(product=> <ProductsCart key={product.id} product={product}/>)
                }
            </div>
        </div>
    );
};

export default product;