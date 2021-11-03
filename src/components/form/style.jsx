import styled from 'styled-components'

export const Container = styled.div`

    margin: 30px auto;
    width: 55%;

    form{
        margin: auto;
        width: 40%;

        h1{
            color: #000;
            font-family: 'Nunito', sans-serif;
            font-size: 22px;
            font-weight: 400;
            margin-bottom:20px;
        }

        div{

            margin: 12px 0;

            label{
                font-family: 'Nunito', sans-serif;
                font-size: 18px;
                font-weight: 200;
            }
    
            input{
                background: #E5E7E9;
                border: none;
                border-radius: 5px;
                margin-top: 4px;
                padding: 8px;
                width: 100%;
            }
            span{
                color: #C0392B;
                font-family: 'Nunito', sans-serif;
                font-size: 14px;
                right: 0;
            }
        }

        button{
            background: #2C3E50;
            border: none;
            border-radius: 5px;
            color: #FFF;
            cursor: pointer;
            margin: 15px 0;
            padding: 10px;
            text-transform: uppercase;
            width: 40%; 
            &:hover{
                background: #566573;
            }
        }
    }
`