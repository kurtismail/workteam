import styled from 'styled-components';

const Flex = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    gap: 2rem;
    justify-content: space-evenly;
    margin: 2rem 3rem;
    @media (max-width: ${({theme})=> theme.responsive}){
        margin: 2rem 0;
        flex-direction: column;
    }
`;

export default Flex;
