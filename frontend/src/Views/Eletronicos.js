import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import database from '../services/database';


export default function Eletronicos() {

  const [ products, setProducts ] = useState([]);

  useEffect(() => {

    database.index('eletrodomestico')
    .then( ({ data }) => {
      setProducts([...data]);
    });

  }, []);

  return (
    <ProductList category="Eletrodomésticos" products={ products } />
  );
}
