import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import database from '../services/database';


export default function Tv() {

  const [ products, setProducts ] = useState([]);

  useEffect(() => {

    database.index('tv')
    .then( ({ data }) => {
      setProducts([...data]);
    });

  }, []);

  return (
    <ProductList category="TVs" products={ products } />
  );
}
