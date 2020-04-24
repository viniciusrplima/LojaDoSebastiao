import React  from 'react';
import Card from './Card';

export default function ProductList({ category, products }) {
    return (
        <div className="section" id="index-banner">
        <div className="row">
          <div className="col s12 m12 l8 offset-l4 xl8 offset-xl3">
            <h3 className="header">Categoria: { category }</h3>
            <div className="row">
            
               {
                products
                // Ordenando por quantidade em estoque
                .sort((a, b) => {
                  if( a.quantity > b.quantity ) return -1;
                  else return 1;
                })
                .map( product => (
                <Card
                    key = { product._id }
                    product={ product }
                ></Card>
                ))
              } 
            </div>
          </div>
        </div>
      </div>
    );
}