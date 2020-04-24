import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import database from '../services/database';


export default function Games() {

  const [ products, setProducts ] = useState([]);

  useEffect(() => {

    database.index('videogame')
    .then( ({ data }) => {
      setProducts([...data]);
    });

  }, []);

  return (
    <ProductList category="Games" products={ products } />
  );
}
