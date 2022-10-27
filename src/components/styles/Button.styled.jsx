import styled from 'styled-components';

const Button = styled.button`
    background-color: ${({bg})=> bg || "white"};
    color: ${({color})=> color || "white"};
    border: 1px solid #a62440;
    border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
        padding: 1rem 1.2rem;
        font-size: 1.1rem;
        margin: 2rem 0.5rem;
        box-shadow: 5px 5px 10px black;
        cursor: pointer;
        &:hover {
            opacity: 0.9;
            transform: scale(0.97);
        }

`;

export default Button;
