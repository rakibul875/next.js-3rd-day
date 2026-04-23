import React from "react";

const ProductsCart = ({product}) => {
  return (
    <div className="card w-96 bg-base-100 card-sm shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p className="font-bold text-3xl">${product.price}</p>
        <p>
         {product.description}
        </p>
        <div className="justify-end card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCart;
