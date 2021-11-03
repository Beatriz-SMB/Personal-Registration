import React, { useState, useEffect } from 'react';
import { Container } from './style';
import InputMask from 'react-input-mask';
import { cepRequest } from '../../api/cep';

const Registration = () => {

    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [cpf, setCpf] = useState("")
    const [email, setEmail] = useState("")
    const [zipcode, setZipcode] = useState("")
    const [street, setStreet] = useState("")
    const [district, setDistrict] = useState("")
    const [city, setCity] = useState("")
    const [data, setData] = useState([])
    const [error, setError] = useState("")

    const handleZipcode = () => {
        
        const zip = zipcode.replace('-','')
        cepRequest(zip, setData)
    }
    useEffect(() => {
        console.log(data)
        setStreet(data.logradouro)
        setDistrict(data.bairro)
        setCity(data.localidade)
    }, [data]);
    
    const handleFomr = (event) => {
        event.preventDefault()
        if(name && surname && cpf && email && zipcode){
            console.log(name)
            setError("")
        }else{
            setError("Campo obrigatório")
        }
        
    }

    return(
        <Container>
            <form onSubmit={handleFomr}>
                <h1>Formulárido de Cadástro</h1>
                <div>
                    <label htmlFor="name">Nome*</label>
                    <input type="text" aria-label="nome" value={name} onChange={event => setName(event.target.value)} />
                    <span>{error}</span>
                </div>
                <div>
                    <label htmlFor="surname">Sobrenome*</label>
                    <input type="text" aria-label="sobrenome" value={surname} onChange={event => setSurname(event.target.value)} />
                    <span>{error}</span>
                </div>
                <div>
                    <label htmlFor="cpf">CPF*</label>
                    <InputMask mask='999.999.999-99' maskChar="_" value={cpf} onChange={event => setCpf(event.target.value)} />
                    <span>{error}</span>
                </div>
                <div>
                    <label htmlFor="email">E-mail*</label>
                    <input type="text" aria-label="email" value={email} onChange={event => setEmail(event.target.value)}/>
                    <span>{error}</span>
                </div>
                <div>
                    <label htmlFor="zipCode">CEP*</label>
                    <InputMask mask='99999-999' maskChar="_" value={zipcode} onChange={event => setZipcode(event.target.value)} onBlur={handleZipcode}/>
                    <span>{error}</span>
                </div>
                <div>
                    <label htmlFor="street" >Rua</label>
                    <input type="text" value={street} readOnly/>
                </div>
                <div>
                    <label htmlFor="district">Bairro</label>
                    <input type="text" value={district} readOnly/>
                </div>
                <div>
                    <label htmlFor="city">Cidade</label>
                    <input type="text" value={city} readOnly/>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </Container>
    );
}

export default Registration;