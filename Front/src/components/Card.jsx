import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const Card = ({ watch }) => {
<<<<<<< HEAD

  if (!watch || typeof watch !== 'object') {
    return []; 
  }
  
=======
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
  const navigate = useNavigate();
  const cleanedWatch = {};
  Object.keys(watch).forEach((key) => {
    const cleanedKey = key.trim();
    cleanedWatch[cleanedKey] = watch[key];
  });

  return (
<<<<<<< HEAD
    <Container onClick={() => navigate(`/product/${cleanedWatch.id}`)}>
=======
    <Container onClick={() => navigate(`/product/${cleanedWatch.model}`)}>
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
      <div className="top-content">
        <span className="span-title">Envio gratis</span>
        <picture className="img-box">
          <img src={cleanedWatch.image[0]} alt={cleanedWatch.brand} />
        </picture>
      </div>
      <div className="section-content">
        <h3>{cleanedWatch.brandName}</h3>
        <h4>{cleanedWatch.model +' - '+ cleanedWatch.colorName}</h4>
<<<<<<< HEAD
        <h5>${parseInt(cleanedWatch.price * 500)}</h5>
=======
        <h5>${cleanedWatch.price * 500}</h5>
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
      </div>
    </Container>
  );
};

const Container = styled.article`
  width: 250px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  overflow: hidden;
  opacity: 0.8;
  transition: 0.3s;
<<<<<<< HEAD
  z-index: 20;
  pointer-events: all;
  cursor: pointer;
  &:hover {
    transform: translateY(-1px) translateX(1px);
    opacity: 1;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.8);
=======
  &:hover {
    transform: translateY(-10px) translateX(5px);
    opacity: 1;
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.8);
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
  }
  .top-content {
    width: 100%;
    height: 280px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    .span-title {
      position: absolute;
      top: 10px;
      left: 5px;
      display: block;
      padding: 5px 10px;
      font-size: 0.6rem;
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 5px;
    }
    .img-box {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      img {
<<<<<<< HEAD
        //width: 80%;
        height: 95%;
=======
        width: 80%;
        height: 80%;
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
        object-fit: cover;
      }
    }
  }
  .section-content {
    width: 100%;
    height: calc(100%-380px);
    margin: 5px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3px;
    h3 {
      width: 95%;
      text-align: center;
      font-size: 1rem;
      color: #000;
      font-weight: 600;
      text-transform: uppercase;
    }
    h4 {
      width: 95%;
      text-align: center;
      font-size: 1rem;
      color: #111;
      opacity: 0.5;
      font-weight: 600;
      text-transform: uppercase;
    }
    h5 {
      width: 95%;
      text-align: center;
      font-size: 1rem;
      color: #111;
      font-weight: 600;
      text-transform: uppercase;
    }
  }
`;
