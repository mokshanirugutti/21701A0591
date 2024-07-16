import React from 'react';
import { useParams } from 'react-router-dom';

interface Product {
  productName: string;
  price: number;
  rating: number;
  discount: number;
  availability: string;
  company: string;
  category: string;
}

interface Params {
  id: string;
}

const ProductDetails: React.FC<{ data: Product[] }> = ({ data }) => {
  const { id } = useParams<Params>();
  const product = data[Number(id)];

  if (!product) return <p>Product not found</p>;

  return (
    <div style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
      <h3>{product.productName}</h3>
      <p>Company: {product.company}</p>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Discount: {product.discount}%</p>
      <p>Availability: {product.availability}</p>
    </div>
  );
};

export default ProductDetails;
