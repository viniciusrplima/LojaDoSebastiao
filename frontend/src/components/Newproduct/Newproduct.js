import React from 'react';


export default function Newproduct() {
  return (
    <div className="section" id="index-banner">
      <div className="row" style={{ marginBottom: '0' }}>
        <div className="col s12 m10 offset-m2 l8 offset-l4 xl8 offset-xl3 center-on-small-only">
          <h2 className="header">Novo Produto</h2>
          <div className="row">
            <form className="col s12">

              <div className="row">
                <div className="input-field col s12 m12 l6">
                  <i className="material-icons prefix">add_shopping_cart</i>
                  <input id="icon_prefix" type="text" className="validate" />
                  <label for="icon_prefix">Nome do Produto</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12 m12 l6">
                  <i className="material-icons prefix">attach_money</i>
                  <input id="money" type="text" className="validate" />
                  <label for="money">Valor do Produto</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12 m12 l6">
                  <i className="material-icons prefix">details</i>
                  <input id="quantidade" type="text" className="validate" />
                  <label for="quantidade">Quantidade Inicial</label>
                </div>
              </div>
              <div className="row">
                <div class="input-field col s12 m12 l6">
                  <i className="material-icons prefix">content_paste</i>
                  <select>
                    <option value="tv">Tv's</option>
                    <option value="eletronicos">Eletronicos</option>
                    <option value="videogame">Videogames</option>
                    <option value="celulares">Celulares</option>

                  </select>
                  <label>Selecione a Categoria</label>
                </div>
              </div>
              <div className="row">
                <div className="file-field input-field col s12 m12 l6">
                  <div className="btn grey darken-2">
                    <span>Arquivo da foto</span>
                    <input type="file" />
                  </div>
                  <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" />
                  </div>
                </div>
              </div>
              <button class="btn waves-effect waves-light grey darken-2" type="submit" name="action">
                Cadastrar
                <i class="material-icons right">send</i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
