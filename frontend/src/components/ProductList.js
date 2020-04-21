import React, { useState, useEffect } from 'react';
import Card from './Card';
import './styles/ProductList.css';

export default function ProductList({ category, products }) {
    return (
        <div class="section" id="index-banner">
        <div class="row" style={{ marginBottom: '0' }}>
          <div class="col s12 m10 offset-m2 l8 offset-l4 xl8 offset-xl3 center-on-small-only">
            <h2 class="header">Categoria: { category }</h2>
            <div className="product-list">
              {
                products
                // Ordenando por quantidade em estoque
                .sort((a, b) => {
                  if( a.quantity > b.quantity ) return -1;
                  else return 1;
                })
                .map( product => (
                <Card
                    id={ product._id }
                    name={ product.name }
                    price={ product.price }
                    quantity={ product.quantity }
                    photoURL={ product.photoURL }
                ></Card>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    );
}