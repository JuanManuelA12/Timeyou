import React from "react";
import styled from "styled-components";
import { FiltersAll } from "./index.js";

<<<<<<< HEAD
export const Drawer = ({ show, setPage }) => {
  return (
    <Container show={show.toString()}>
      <FiltersAll setPage={setPage} show={show.toString()} />
=======
export const Drawer = ({ show }) => {
  return (
    <Container show={show}>
      <ul>
        <li><FiltersAll /></li>
        <li>filtro1</li>
        <li>filtro1</li>
        <li>filtro1</li>
        <li>filtro1</li>
        <li>filtro1</li>
        <li>filtro1</li>
        <li>filtro1</li>
        <li>filtro1</li>
        <li>filtro1</li>
      </ul>
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
    </Container>
  );
};

const Container = styled.aside`
  width: 100%;
  height: 100%;
<<<<<<< HEAD
  display: flex;
  align-items: center;
  justify-content: center;
  transition-delay: 0.3s;
=======
  position: absolute;
  top: 0;
  left: ${(props) => (props.show ? "0" : "-1000px")};
  transition: 0.4s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  ul {
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    list-style: none;
    li {
      color: #fff;
    }
  }
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
`;
