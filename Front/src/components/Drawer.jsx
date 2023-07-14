import React from "react";
import styled from "styled-components";

export const Drawer = ({ show }) => {
  return (
    <Container show={show}>
      <ul>
        <li>filtro1</li>
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
    </Container>
  );
};

const Container = styled.aside`
  width: 100%;
  height: 100%;
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
`;
