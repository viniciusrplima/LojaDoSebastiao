import React from 'react';
import Cards from '../Cards/Cards';


export default function Eletronicos() {
  return (
    <div class="section" id="index-banner">
      <div class="row" style={{ marginBottom: '0' }}>
        <div class="col s12 m10 offset-m2 l8 offset-l4 xl8 offset-xl3 center-on-small-only">
          <h2 class="header">Categoria: Eletrônicos</h2>
          <div className="row">
            <div className="col s12 m6 l4 xl4">
              <Cards></Cards>
            </div>
            <div className="col s12 m6 l4 xl4">
              <Cards></Cards>
            </div>
            <div className="col s12 m6 l4 xl4">
              <Cards></Cards>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
