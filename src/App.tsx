import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import ProductsPage from './components/ProductsPage';
import useFetchProducts from './hooks/fetchProducts';

const App: React.FC = () => {
  const { data } = useFetchProducts();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        {/* <Route path="/product/:id">
          <ProductDetails data={data} />
        </Route> */}
      </Routes>
    </Router>
  );
};

export default App;