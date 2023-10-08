import React from "react";
import styled from "styled-components";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { AppendBTN } from "../utils/ComponentsStyle";

export const Pagination = ({ totalPages, page, onPrev, onNext }) => {
  return (
    <Container>
      {page > 1 && (
<<<<<<< HEAD
        <AppendBTN onClick={onPrev} alter="false">
=======
        <AppendBTN onClick={onPrev}>
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
          <AiOutlineLeft />
        </AppendBTN>
      )}
      <h4>
        {page} de {totalPages}
      </h4>
      {page !== totalPages && (
<<<<<<< HEAD
        <AppendBTN onClick={onNext} alter="false">
=======
        <AppendBTN onClick={onNext}>
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
          <AiOutlineRight />
        </AppendBTN>
      )}
    </Container>
  );
  I;
};

const Container = styled.div`
  width: 100vw;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
