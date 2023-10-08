<<<<<<< HEAD
import { useState } from "react";
=======
import React, { useState } from "react";
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
import styled from "styled-components";
import {
  CardContext,
  Drawer,
<<<<<<< HEAD
  Pagination,
} from "../components/index.js";
import { useSelector } from "react-redux";
import { Loader } from "../components/Loader/Loader.jsx";
import { ContainerLoader } from "../utils/ComponentsStyle.jsx";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar.jsx";



export default function HomePage() {
  
  const navigate = useNavigate();
  
  const user = useSelector((state)=> state.user)
  const { Clocks, allClocks, searchActive } = useSelector((state) => state);
  const whatches = searchActive ? Clocks : allClocks;
  
  const watchDel1 = whatches.filter(watch => watch.stock > 0);
  const watchDel = watchDel1.filter(watch => watch.del === false);

  const loading = useSelector((state) => state.isLoading);

  const [show, setShow] = useState(false);

  //const showOpen = show.toString();
=======
  BannerSlider,
  Pagination,
} from "../components/index.js";
import { useSelector } from "react-redux";

export default function HomePage() {
  const { Clocks, searchClocks, searchActive } = useSelector((state) => state);
  const whatches = searchActive ? searchClocks : Clocks;

  const [show, setShow] = useState(false);
  const showOpen = show.toString();
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13

  //funciones de paginacion
  const [page, setPage] = useState(1);
  const itemPerPage = 12;
<<<<<<< HEAD
  const totalPages = Math.ceil(watchDel && (watchDel.length / itemPerPage)) 
=======
  const totalPages = Math.ceil(whatches.length / itemPerPage);
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13

  const paginacion = () => {
    const startIndex = (page - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;
<<<<<<< HEAD
    if (watchDel && watchDel.length) return watchDel.slice(startIndex, endIndex);
  };

  const PaginacionRelojes = paginacion()
=======
    if (whatches.length) return whatches.slice(startIndex, endIndex);
  };

  const PaginacionRelojes = paginacion();
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13

  const onNextPage = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const onPreviusPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

<<<<<<< HEAD
  const renderMostrador = () => (
    <ContainerMostrador show={show}>
    
=======
  const slideContainer = () => (
    <ContainerSlide>
      <div className="slide-container">
        <BannerSlider />
      </div>
    </ContainerSlide>
  );

  const renderMostrador = () => (
    <ContainerMostrador show={show.toString()}>
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
      <div className="sidebar">
        <div className="btn-filter">
          <button onClick={() => setShow(!show)}>filtros</button>
        </div>
<<<<<<< HEAD
         {/* <Drawer show={show} setPage={setPage} /> */}
      </div>
      <section className="main-card">
        <CardContext pagination={PaginacionRelojes}  />
=======
        <Drawer show={show} />
      </div>
      <section className="main-card">
        <CardContext pagination={PaginacionRelojes} />
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
      </section>
    </ContainerMostrador>
  );

<<<<<<< HEAD
  const renderLoader = () => (
    <ContainerLoader>
      <Loader />
    </ContainerLoader>
  );
  
  if (user.del) {
    navigate("/home/loginout")   
  }

  return (
    <>
      {loading ? (
        renderLoader()
      ) : (
        <>
          
          <Pagination
            totalPages={totalPages}
            page={page}
            onPrev={onPreviusPage}
            onNext={onNextPage}
          />
          {renderMostrador()}
          <Pagination
            totalPages={totalPages}
            page={page}
            onPrev={onPreviusPage}
            onNext={onNextPage}
          />
          <Sidebar setPage={setPage}/>
        </>
      )}
      
      
=======
  return (
    <>
      {slideContainer()}
      <Pagination
        totalPages={totalPages}
        page={page}
        onPrev={onPreviusPage}
        onNext={onNextPage}
      />
      {renderMostrador()}
      <Pagination
        totalPages={totalPages}
        page={page}
        onPrev={onPreviusPage}
        onNext={onNextPage}
      />
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
    </>
  );
}

<<<<<<< HEAD
const ContainerMostrador = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  
  .sidebar {
    width: 0;
    
    background-color: #111;
    transition: 0.5s ease-in-out;
    position: relative;
    border-radius: 0 10px 10px 0;
    display: flex;
    
    .btn-filter {
      position: absolute;
      left: 0px;
      top: 0px;
      transition: all 0.5s ease-in-out;
      
      transition: 3s;
      button {
        
        width: 35px;
        height: 150px;
        background-color: #000000;
=======
const ContainerSlide = styled.section`
  width: 100%;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .slide-container {
    width: 80%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    overflow: hidden;
  }
`;
const ContainerMostrador = styled.div`
  width: 100%;
  min-height: 500px;
  height: 180vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .sidebar {
    width: ${(props) => (props.show === "true" ? "200px" : "0")};
    height: 100%;
    background: #111;
    transition: all 0.3s ease-in-out;
    position: relative;
    border-radius: 0 10px 10px 0;
    .btn-filter {
      position: absolute;
      left: ${(props) => (props.show === "true" ? "200px" : "0px")};
      top: 30px;
      transition: all 0.3s ease-in-out;
      button {
        width: 40px;
        height: 150px;
        background-color: #111;
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
        border: none;
        border-radius: 0 10px 10px 0;
        color: #fff;
        writing-mode: vertical-lr;
        text-transform: uppercase;
<<<<<<< HEAD
        letter-spacing: 7px;
        transition: 0.3s;
        
        &:hover {
          left: 100px;
          transition: all 0.5s ease-in-out;
          //opacity: 0;
=======
        letter-spacing: 3px;

        transition: 0.3s;
        &:hover {
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
          transform: scale(1.1);
          border-right: none;
        }
      }
    }
  }
  .main-card {
<<<<<<< HEAD
    width:100%;
    min-height: 500px;
    height: 100%;
    transition: all 0.5s ease-in-out;
    display: grid;
    place-content: center;
=======
    width: ${(props) =>
      props.show === "true" ? "calc(100% - 200px)" : "100%"};
    min-height: 500px;
    height: 100%;
    transition: all 0.3s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  @media (max-width: 768px) {
    height: 1600px;
  }
  @media (max-width: 500px) {
    height: 2400px;
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
  }
`;
