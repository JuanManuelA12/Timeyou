import styled from "styled-components";

export const BTNCarritoDeCompras = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 10px;
  background-color: /* #4ebcc7 */ ${(props) =>
<<<<<<< HEAD
    props.alter === "true" ? "rgba(0,0,0,0.4)" : "#4ebcc7"};
=======
    props.alter ? "rgba(0,0,0,0.4)" : "#4ebcc7"};
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  gap: 10px;
  color: #fff;
  text-transform: capitalize;
  transition: 0.5s ease-in-out;
<<<<<<< HEAD
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    background-color:${(props) =>
      props.alter === "true" ? "rgba(0,0,0,0.8)" : "#35838a"};
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  }
`;
export const BTNHover = styled.button`
  width: 60px;
  height: 60px;
  border: ${(props) => (props.alter === "true" ? "1px solid #666565" : "none")};
  border-radius: 50%;
  background: none;
  font-size: 50px;
  color: ${(props) => (props.alter === "true" ? "#666565" : "#fff")};
=======
  &:hover {
    transform: scale(1.1);
    background-color: /* #35838a */ ${(props) =>
      props.alter ? "rgba(0,0,0,0.8)" : "#35838a"};
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  }
`;

export const BTNHover = styled.button`
  width: 60px;
  height: 60px;
  border: ${(props) => (props.alter ? "1px solid #111" : "none")};
  border-radius: 50%;
  background: none;
  font-size: 50px;
  color: ${(props) => (props.alter ? "#111" : "#fff")};
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
  transition: 0.3s ease-in all;
  pointer-events: none;
  pointer-events: all;
  margin: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
<<<<<<< HEAD
  pointer-events: all;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.alter === "true" && "#fff"};
    border: ${(props) => props.alter === "true" && "none"};
    transform: scale(1.2);
    background-color: rgba(0, 0, 0, 0.4);
    cursor: pointer;
  }
`;
export const AppendBTN = styled.button`
  width: 30px;
  height: 30px;
  background: ${(props) => (props.alter === "true" ? "#888" : "none")};
=======
  &:hover {
    color: ${(props) => props.alter && "#fff"};
    border: ${(props) => props.alter && "none"};
    transform: scale(1.2);
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

export const AppendBTN = styled.button`
  width: 30px;
  height: 30px;
  background: ${(props) => (props.alter ? "#888" : "none")};
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
  border: none;
  border-radius: 50%;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease-in-out all;
<<<<<<< HEAD
  color: ${(props) => props.alter === "true" && "#fff"};
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.alter === "true" ? "#888" : "rgba(0,0,0,0.8)"};
    transform: scale(1.2);
    color: ${(props) => (props.alter === "true" ? "green" : "#fff")};
  }
`;
export const BTNLogin = styled.button`
  width: 150px;
  background-color: #4ebcc7;
  border: none;
  outline: none;
  height: 49px;
  border-radius: 49px;
  color: #111;
  text-transform: uppercase;
  font-weight: 600;
  margin: 10px 0;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    background-color: #35838a;
    transform: scale(1.2);
  }
`;

export const ContainerLoader = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
=======
  color: ${(props) => props.alter && "#fff"};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.alter ? "#888" : "rgba(0,0,0,0.8)")};
    transform: scale(1.2);
    color: ${(props) => (props.alter ? "green" : "#fff")};
  }
`;
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
