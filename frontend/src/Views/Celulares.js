import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import database from '../services/database';


export default function Celulares() {

  const [ products, setProducts ] = useState([]);

  useEffect(() => {

    database.index('celular')
    .then( ({ data }) => {
      setProducts([...data]);
    });

  }, []);

  return (
    <ProductList category="Celulares" products={ products } />
  );
}
