// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { Card } from "../components/index.js";
import styled from "styled-components";
<<<<<<< HEAD

import { useDispatch, useSelector } from "react-redux";

export const CardContext = ({ pagination, show }) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.isLoading);

  return (
    <Container show={show}>
      <div className="context-card">
        {pagination &&
          Array.isArray(pagination) &&
          pagination.map((e, i) => <Card key={i} watch={e} />)}
=======
import { getProducts } from "../redux/Actions.js";
import { useDispatch, useSelector } from "react-redux";

export const CardContext = ({pagination}) => {
  const dispatch = useDispatch();
 
  const loading = useSelector(state=> state.isLoading);

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <Container>
      <div className="context-card">
      {
        loading ? (<h1>Cargando...</h1>):(pagination.map(e=>(
          <Card key={e.idProduct} watch={e}/>
        )))
      }
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
      </div>
    </Container>
  );
};

const Container = styled.section`
<<<<<<< HEAD
  width: 100%;
=======

  width: 90%;
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
<<<<<<< HEAD
  padding: 20px;
  .context-card {
    margin-top: 20px;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: ${(props) =>
      props.show ? "repeat(3, 1fr)" : "repeat(4,1fr)"};
    /* se agrega template row */
    grid-template-rows:${(props) =>
      props.show ? "repeat(4, 1fr)" : "repeat(3,1fr)"};
    align-items: start;
    justify-items: center;
    gap: 40px;
    transition: all 0.3s ease-in-out;
=======
  .context-card {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
   /*  display: flex;
    flex-wrap: wrap; */
    align-items: center;
    justify-items: center;
    
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
  }
  @media (max-width: 768px) {
    .context-card {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (max-width: 500px) {
    .context-card {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
