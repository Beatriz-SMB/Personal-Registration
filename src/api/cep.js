import axios from 'axios';
// import t from 'typy';

export const api = axios.create(
    {
        baseURL: 'https://viacep.com.br', 
    }
)

export const  cepRequest  = async(cep, setData) => {
 
    await api.get(`/ws/${cep}/json/`) 
        .then( response => { 
            setData(response.data) 
        }) 
        .catch( error => { 
            console.log(error); 
        }) 
}