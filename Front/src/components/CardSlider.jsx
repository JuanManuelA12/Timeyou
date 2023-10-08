<<<<<<< HEAD
import React, { useState } from "react";
=======
/*
import React from "react";
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Card } from "./Card";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { BTNHover } from "../utils/ComponentsStyle";
<<<<<<< HEAD

export const CardSlider = () => {
  const watches = useSelector((state) => state.Clocks);

  const numWatches = 90;
  const cardsPerPage = 4;
  const maxPages = Math.ceil(numWatches / cardsPerPage);

  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % maxPages);
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + maxPages) % maxPages);
  };

  // Calcular el índice inicial para el grupo actual de tarjetas
  const startIndex = currentPage * cardsPerPage;
  // Obtener las tarjetas para mostrar en la página actual
  const cardsToShow = watches.slice(startIndex, startIndex + cardsPerPage);
=======
export const CardSlider = () => {
  const watches = useSelector((state) => state.Clocks);
  const randomize = () => {
    const result = Math.floor(Math.random() * watches.length);
    return result;
  };
*/
  // const randomSlide = () => {
  //   while(i<5){
  //   const random1 = randomize()
  //   const random2 = randomize()
  //   const cardsShown = [];
  //   }
  //   random1 === random2 ? random1 = randomize(): cardsShown.push(random1);
  // }

  // function obtenerTresNumerosRandomDistintos(length) {
  //   if (length < 3) {
  //     throw new Error("El tamaño del array debe ser mayor o igual a 3.");
  //   }

  //   const numerosRandom = [];

  //   // Generamos los tres números random distintos
  //   while (numerosRandom.length < 3) {
  //     const numeroRandom = Math.floor(Math.random() * length);
  //     if (!numerosRandom.includes(numeroRandom)) {
  //       numerosRandom.push(numeroRandom);
  //     }

  //   }

  //   return numerosRandom;
  // }

  // function obtenerTresObjetosDelArray(array) {
  //   const indicesRandom = obtenerTresNumerosRandomDistintos(array.length);
  //   const objetosRandom = indicesRandom.map((indice) => array[indice]);
  //   return objetosRandom;
  // }

  //   obtenerTresNumerosRandomDistintos(watches.length);
  //   obtenerTresObjetosDelArray(watches);

  //   console.log(obtenerTresObjetosDelArray(watches));
/*
  function obtenerTresObjetosDelArray(ind1, ind2, ind3, array) {
    const indicesRandom = [ind1, ind2, ind3];
    const objetosRandom = indicesRandom.map((indice) => array[indice]);
    return objetosRandom;
  }

  const numWatches = 90;
  let index1;
  let index2;
  let index3;
  const funcionRandom = (numWatches) => {
    let watch = numWatches;
    const indexRandom = (num) => {
      return Math.floor(Math.random() * num);
    };
    index1 = indexRandom(numWatches);
    index2 = indexRandom(numWatches);
    index3 = indexRandom(numWatches);
    if (index1 == index2 || index1 == index3 || index2 === index3) {
      funcionRandom(numWatches);
    }
  };
  funcionRandom(numWatches);
  let quieroTres = obtenerTresObjetosDelArray(index1, index2, index3, watches);
  console.log(index1, index2, index3);
  console.log(quieroTres);
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13

  return (
    <Container>
      <div className="bodyContainer">
        <div className="bodyCard">
<<<<<<< HEAD
          <div className="controles">
            <BTNHover alter="true" onClick={handlePrev}>
              <AiOutlineLeft />
            </BTNHover>
            <BTNHover alter="true" onClick={handleNext}>
              <AiOutlineRight />
            </BTNHover>
          </div>
          {/* Mostrar las tarjetas para la página actual */}
          {cardsToShow.map((watch) => (
            <Card key={watch.id} watch={watch} />
          ))}
        </div>
      </div>
=======
        <div className="controles">
          <BTNHover alter>
            <AiOutlineLeft/>
          </BTNHover>
          <BTNHover alter>
            <AiOutlineRight/>
          </BTNHover>
        </div>
          <div className="caja1">
            <Card watch={quieroTres[0]}/>
          </div>
          <div className="caja2">
            <Card watch={quieroTres[1]}/>
          </div>
          <div className="caja3">
            <Card watch={quieroTres[2]}/>
          </div>
        </div>
      </div>
*/
      {/* <div className="slider">
      <img src="https://www.timeshop.com.ar/arquivos/casio_categoria23.jpg" alt="" className="card-img" />
      <img src="https://www.timeshop.com.ar/arquivos/casio_categoria23.jpg" alt="" className="card-img" />
      <img src="https://www.timeshop.com.ar/arquivos/casio_categoria23.jpg" alt="" className="card-img" />
      <img src="https://www.timeshop.com.ar/arquivos/casio_categoria23.jpg" alt="" className="card-img" />
      <img src="https://www.timeshop.com.ar/arquivos/casio_categoria23.jpg" alt="" className="card-img" />
      <img src="https://www.timeshop.com.ar/arquivos/casio_categoria23.jpg" alt="" className="card-img" />

      </div> */}

/*
      
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
    </Container>
  );
};

const Container = styled.div`
<<<<<<< HEAD
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px auto;
  .bodyContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
=======
  width: 100vw;
  height: 400px;
  position: relative;
  
  
  .bodyContainer {
    width: 90%;
    height: 100%;
    margin: 0 auto;
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
    .bodyCard {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
<<<<<<< HEAD
      gap: 25px;
      border-radius: 20px;
      position: relative;
      transition: 0.5s ease-in-out;
      .controles {
        position: absolute;
=======
      gap: 10px;
      box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
      border-radius: 20px;
      position: relative;
      .controles{
        position: absolute;
        top: 0;
        left: 0;
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
<<<<<<< HEAD
        z-index: 10;
        pointer-events: all;
      }
      .controles :hover{
        cursor: pointer;
=======
        z-index: 20;
      }
      .caja1 {
        width: 25%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .caja2 {
        width: 25%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .caja3 {
        width: 25%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
      }
    }
  }
`;

<<<<<<< HEAD

=======
*/

  //---------------------------------------------------------------------------------


/*
import React from "react";
import styled from 'styled-components'

export const CardSlider = () => {

  const watches = useSelector((state) => state.Clocks);
  const numWatches = 90;

  const getRandomIndexes = () => {
    const indexes = new Set();
    while (indexes.size < 3) {
      indexes.add(Math.floor(Math.random() * numWatches));
    }
    return Array.from(indexes);
  };

  const [randomIndexes, setRandomIndexes] = useState(getRandomIndexes());

  const handleNextClick = () => {
    setRandomIndexes(getRandomIndexes());
  };

  const handlePrevClick = () => {
    setRandomIndexes(getRandomIndexes());
  };

  const obtenerTresTarjetas = () => {
    return randomIndexes.map((index) => watches[index]);
  };

  const tresTarjetas = obtenerTresTarjetas();

  return (
    <div>
      
    </div>
  );
};

const Container = styled.div`
  
  
`
*/
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
