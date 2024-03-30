// App.js
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div className="App">
      <Helmet>
        <title>My Online Store</title>
        <meta name="description" content="Welcome to My Online Store. Browse our collection of featured products." />
      </Helmet>
      <header>
        <h1>My Online Store</h1>
      </header>
      <main>
        <section className="static-section">
          <h2>About Us</h2>
          <p>Welcome to My Online Store! We offer a wide range of products to suit your needs.</p>
        </section>
        <section className="dynamic-section">
          <h2>Featured Products</h2>
          <div className="product-list">
            {products.map(product => (
              <div key={product.id} className="product">
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>{product.price}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 My Online Store</p>
      </footer>
    </div>
  );
};

export default App;
