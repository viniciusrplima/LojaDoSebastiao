import axios from 'axios';

//const apiURL = 'https://api-loja-do-sebastiao.herokuapp.com/';
const apiURL = 'https://api-loja-do-sebastiao.herokuapp.com/';

const index = ( category ) => {
    const token = localStorage.getItem('loja-do-sebastiao-token');
    return axios.get(`${apiURL}${category}?token=${ token }`);
}

const store = ({ name, price, quantity, category, image }) => {
    const token = localStorage.getItem('loja-do-sebastiao-token');

    axios.post(`${apiURL}?token=${ token }`, {
        name, 
        price, 
        quantity, 
        category
      }).then( ({ data }) => {
  
        // Armazena imagem
        const id = data._id;
        if(id) {
          updateImage( id, image )
          .then(() => {
            console.log('Foto adicionada');
          })
          .catch(err => {
            console.log(err);
          })
        }
  
      }).catch( err => {
        console.log(err);
      });
}

const update = ( id, product ) => {
    const token = localStorage.getItem('loja-do-sebastiao-token');
    return axios.put(`${ apiURL }${ id }?token=${ token }`, product);
}

const remove = ( id ) => {
    const token = localStorage.getItem('loja-do-sebastiao-token');
    return axios.delete(`${ apiURL }${ id }?token=${ token }`);
}

const updateImage = ( id, image ) => {
    const token = localStorage.getItem('loja-do-sebastiao-token');
    const formData = new FormData();
    formData.append('file', image);

    return axios.post(`${ apiURL }image/${ id }?token=${ token }`, formData, {
      'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
    });

}

export default {
    index, 
    store, 
    update, 
    remove, 
    updateImage
}
