import React, { useState, useEffect } from 'react';
import { getFiltered } from '../hooks/fetchfiltered';

const companies = ["AMZ", "FLP", "SNP", "MYN", "AZO"];
const categories = ["Phone", "Computer", "TV", "Earphone", "Tablet", "Charger", "Mouse", "Keypad", "Bluetooth", "Pendrive", "Remote", "Speaker", "Headset", "Laptop", "PC"];

const ProductsPage = () => {
  const [filters, setFilters] = useState({
    company: 'AMZ',
    category: 'TV',
    minPrice: 1,
    maxPrice: 10000,
    rating: 0,
  });
  
  const [products, setProducts] = useState([]);

  const getData = async () => {
    const data = await getFiltered(filters);
    setProducts(data);
  };

  useEffect(() => {
    getData();
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div className="p-4">
    <h1 className="text-2xl font-bold mb-4">Products Page</h1>
    <div className="mb-4 space-y-4">
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
        <label className="flex flex-col">
          <span className="font-medium">Company:</span>
          <select
            name="company"
            value={filters.company}
            onChange={handleFilterChange}
            className="border p-2 rounded-md"
          >
            {companies.map((company) => (
              <option key={company} value={company}>
                {company}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col">
          <span className="font-medium">Category:</span>
          <select
            name="category"
            value={filters.category}
            onChange={handleFilterChange}
            className="border p-2 rounded-md"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col">
          <span className="font-medium">Min Price:</span>
          <input
            type="number"
            name="minPrice"
            value={filters.minPrice}
            onChange={handleFilterChange}
            className="border p-2 rounded-md"
          />
        </label>
        <label className="flex flex-col">
          <span className="font-medium">Max Price:</span>
          <input
            type="number"
            name="maxPrice"
            value={filters.maxPrice}
            onChange={handleFilterChange}
            className="border p-2 rounded-md"
          />
        </label>
        <label className="flex flex-col">
          <span className="font-medium">Rating:</span>
          <input
            type="number"
            name="rating"
            value={filters.rating}
            onChange={handleFilterChange}
            className="border p-2 rounded-md"
          />
        </label>
      </div>
      <button
        onClick={getData}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Get Data
      </button>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.length > 0 ? (
        products.map((product, index) => (
          <div
            key={index}
            className="border p-4 rounded-md shadow-md space-y-2"
          >
            <h2 className="text-xl font-semibold">{filters.category}</h2>
            <p className="text-gray-700">Price: ${product.price}</p>
            <p className="text-gray-700">Rating: {product.rating}</p>
            <p className="text-gray-700">Discount: {product.discount}%</p>
            <p className="text-gray-700">Availability: {product.availability}</p>
            <p className="text-gray-700">Company: {filters.company}</p>
          </div>
        ))
      ) : (
        <p className="col-span-full text-center">No products available</p>
      )}
    </div>
  </div>
  
  );
};

export default ProductsPage;