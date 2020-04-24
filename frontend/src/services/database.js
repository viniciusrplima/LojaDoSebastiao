import axios from 'axios';

const apiURL = 'https://api-loja-do-sebastiao.herokuapp.com/';

const index = ( category ) => {
    return axios.get(`${apiURL}${category}`);
}

const store = ({ name, price, quantity, category, image }) => {
    axios.post(apiURL, {
        name, 
        price, 
        quantity, 
        category
      }).then( ({ data }) => {
  
        // Armazena imagem
        const id = data._id;
        if(id) {
          const formData = new FormData();
          formData.append('file', image);
  
          axios.post(`${ apiURL }${ id }`, formData, {
            'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
          })
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

export default {
    index, 
    store
}