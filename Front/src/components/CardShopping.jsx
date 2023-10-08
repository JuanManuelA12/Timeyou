import React from "react";
import styled from "styled-components";
import { AppendBTN } from "../utils/ComponentsStyle";
<<<<<<< HEAD
import { addToCart, removeFromCart } from "../redux/Actions";
=======
import { removeFromCart } from "../redux/Actions";
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
import { useDispatch } from "react-redux";

export const CardShopping = ({reloj}) => {
const dispatch = useDispatch()
<<<<<<< HEAD

  const handleRemove =() =>{
    dispatch(removeFromCart(reloj.id))
  }
  
  
=======
  const handleRemove =() =>{
    dispatch(removeFromCart(reloj.id))
  }
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
  return (
    <Container>
      <div className="section-card">
        <div className="top-content">
          <picture className="img-box">
<<<<<<< HEAD
         {   <img
              src={reloj.image[0]}
              alt={reloj.name}
            />}
=======
            <img
              src={reloj.image[0]}
              alt={reloj.name}
            />
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
          </picture>
          <div className="marca-modelo">
            <h5>{reloj.brandName}</h5>
            <h4>{reloj.model}</h4>
          </div>
        </div>

        <section className="content">
          <h4>${reloj.price * 500}</h4>
          <div className="inputs">
<<<<<<< HEAD
            <AppendBTN
              onClick={()=>dispatch(addToCart(reloj, -1))}
              alter="true">-</AppendBTN>
            <span className="visor">{reloj.quantity}</span>
            <AppendBTN 
              onClick={()=>dispatch(addToCart(reloj, 1))}
              alter="true">+</AppendBTN>
          </div>
        </section>
        <div className="clear">
          {reloj.quantity <= 0 && handleRemove() }
          <AppendBTN alter="true" onClick={handleRemove}>X</AppendBTN>
=======
            <AppendBTN alter>+</AppendBTN>
            <span className="visor">1</span>
            <AppendBTN alter>-</AppendBTN>
          </div>
        </section>
        <div className="clear">
          <AppendBTN alter onClick={handleRemove}>X</AppendBTN>
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
position: relative;
  margin: 5px 0;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #333;
 
  .section-card {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;
    .top-content{
        width: 30%;
        height:100%;
        display: flex;
        margin-right: 100px;
        .img-box{
            width: 40%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            img{
                width: 100%;
            }
        }
        .marca-modelo{
            margin-left: 5px;
            width: 60%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-evenly;

        }
    }
    .content{
        width: 70%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        
        h4{
        }
        .inputs{
            width: 30%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            .visor{
                width: 40px;
                height: 40px;
                background-color: grey;
                border: none;
                border-radius: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 20px;
                color:#fff;
            }
        }
    }
  }
`;

