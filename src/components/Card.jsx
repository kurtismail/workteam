import React from 'react';
import content from "../data";
import Main, { CardImg, CardTitle, Description } from './styles/Card.styled';

const Card = () => {
  return (
    <>
     {content.map((item)=>{
        const {id, body, image, title} =item;
        return(
            <Main key={id} id={id}>
                <div>
                    <CardImg src={`./images/${image}`} alt="" />
                </div>
                <div>
                    <CardTitle>{title}</CardTitle>
                    <Description>{body}</Description>
                </div>
            </Main>
        )
     })}
    </>
  )
}

export default Card;
