import React from 'react';

export default function Tv() {
  return (

    <div className="card">
      <div className="card-image">
        <img  src="/assets/img/sidenavimg.jpg"/>
        <a className="btn-floating btn-large halfway-fab waves-effect waves-light green" href="/app/edit">
          <i class="material-icons">edit</i>
          </a>
      </div>
      <div className="card-content" style={{backgroundColor: '#c62828'}}>
        <span className="card-title">NOME DO PRODUTO</span>
        <h6>Valor: R$</h6>
        <p>
          Quantidade em Estoque:
        </p>
      </div>
    </div>

    

  );
}
