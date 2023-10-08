import { useState } from "react";
import styled from "styled-components";
<<<<<<< HEAD
import { Link, useNavigate } from "react-router-dom";
import { BiUser, BiUserX } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Searchbar } from "./index.js";
import iconAdminBlack from "../../public/iconAdminBlack.svg";
import {
  logOut,
  getProducts,
  getWatchesByBrand,
  clearCart,
  updateSelectedCategories,
} from "../redux/Actions.js";
import { BTNCarritoDeCompras } from "../utils/ComponentsStyle.jsx";
import './navbar.css';

export const Navbar = () => {
  const cart = useSelector((state) => state.Cart);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedLink, setSelectedLink] = useState(null);

  const itemCount = cart?.length;

  console.log(itemCount);
  const handleLogOut = () => {
    dispatch(clearCart());
    dispatch(logOut());
    navigate("/auth");
  };

  const handleLinkClick = (brand) => {
    const brandLowerCase = brand.toLowerCase();
    if (brandLowerCase === "ver todo") {
      dispatch(getProducts());
      dispatch(updateSelectedCategories([]))
      setSelectedLink(brand);
    }else{
      dispatch(getWatchesByBrand(brandLowerCase));
      dispatch(updateSelectedCategories(brandLowerCase))
      setSelectedLink(brand);
    }
  };

  /* controlador de la barra de busqueda */

  const [showSearch, setShowSearch] = useState(false);
  const [inputHover, setInputHover] = useState(false);

  /* Controlador del globo de usuario */
  const [showLogout, setShowLogout] = useState(false);

  const handleShowLogout = () => {
    setShowLogout(!showLogout);
    setShowSearch(false);
  };
  const handleShowSearch = () => {
    setShowSearch(!showSearch);
    setShowLogout(false);
  };
  return (
    <Container itemCount={itemCount.toString()}>
      <header className="header">
        <h1>
          <StyledLink2 to="/">
            Time<span>You</span>
          </StyledLink2>
=======
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Searchbar } from "./index.js"

export const Navbar = () => {


  const cart = useSelector((state) => state.Cart);


  const [showSearchbar, setShowSearchbar] = useState(false);

  const handleSearchClick = () => {
    setShowSearchbar(!showSearchbar);
  };

  const handleCloseSearch = () => {
    setShowSearchbar(!!showSearchbar);
  };

  const itemCount = cart.items?.length;

  return (
    <Container itemcount={itemCount}>
      <header className="header">
        <h1>
          Times<span>You</span>
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
        </h1>
      </header>
      <nav className="navigation">
        <ul className="nav">
<<<<<<< HEAD
          <li>
            <StyledLink to="/home" onClick={() => handleLinkClick("ver todo")} className={selectedLink === "ver todo" ? "selected" : ""}>
              Catálogo
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/home" onClick={() => handleLinkClick("festina")} className={selectedLink === "festina" ? "selected" : ""}>
              festina
            </StyledLink>
          </li>
          <li>
            {" "}
            <StyledLink to="/home" onClick={() => handleLinkClick("citizen")} className={selectedLink === "citizen" ? "selected" : ""}>
              citizen
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/home" onClick={() => handleLinkClick("mistral")} className={selectedLink === "mistral" ? "selected" : ""}>
              mistral
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/home" onClick={() => handleLinkClick("prune")} className={selectedLink === "prune" ? "selected" : ""}>
              prÜne
            </StyledLink>
          </li>
        </ul>
        <div className="icons">
          <ul className="icon">
            <li>
              <BsSearch onClick={handleShowSearch} />
              <ul className={`search-conteiner ${showSearch ? " active" : ""}`}>
                <li>
                  <Searchbar
                    setInputHover={setInputHover}
                    setShowSearch={setShowSearch}
                    inputHover={inputHover}
                  />
                </li>
              </ul>
            </li>
            <li>
              {user.token.trim() === "" ? (
                <BiUser onClick={() => navigate("/auth")} />
              ) : (
                <BiUserX title={user.email} onClick={handleShowLogout} />
              )}
              {user.token && (
                <ul className={`logout ${showLogout ? " active-log" : ""}`}>
                  <li>
                    <p>Cerrar sesion</p>
                    <div className="btn">
                      <BTNCarritoDeCompras onClick={handleLogOut}>
                        logOUT
                      </BTNCarritoDeCompras>
                    </div>
                  </li>
                </ul>
              )}
=======
          <li>Ver todo</li>
          <li>Casio</li>
          <li>g-shock</li>
          <li>mistral</li>
          <li>prÜne</li>
        </ul>
        <div className="icons">
          <ul className="icon">
            {showSearchbar ? (
              <Searchbar onClose={handleCloseSearch} />
            ) : (
              <li onClick={handleSearchClick}>
                <BsSearch />
              </li>
            )}
            <li>
              <BiUser />
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
            </li>
            <li>
              <Link to="/shopping">
                <span>{itemCount}</span>
                <FiShoppingCart />
              </Link>
            </li>
<<<<<<< HEAD
            {user.role === "admin" && (
              <li title="Dashboard">
                <Link to="/admin/dashboard">
                  <img
                    className="iconImg"
                    src={iconAdminBlack}
                    alt="SVG Image"
                  />
                </Link>
              </li>
            )}
=======
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
          </ul>
        </div>
      </nav>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
<<<<<<< HEAD
=======

>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
  .header {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    h1 {
      text-transform: uppercase;
      font-size: 2.4rem;
      span {
        font-weight: 300;
      }
    }
  }
  .navigation {
    margin: 0 auto;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    ul {
      list-style: none;
<<<<<<< HEAD
      position: relative;
      li {
        text-transform: uppercase;
        font-weight: 300;
       }
      }
    .nav {
    margin: 0 auto;
    width: 60%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly; 
    }
  }

    .icons {
      width: 40%;
=======
    }
    li {
      text-transform: uppercase;
      font-weight: 300;
    }
    .nav {
      margin: 0 auto;
      width: 70%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }
    .icons {
      width: 30%;
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
      display: flex;
      align-items: center;
      justify-content: center;
      .icon {
<<<<<<< HEAD
        position: relative;
=======
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 40px;
        li {
          font-size: 1.4rem;
          font-weight: 500;
          position: relative;
<<<<<<< HEAD
          cursor: pointer;
          .search-conteiner {
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
            position: absolute;
            width: 300px;
            height: 100px;
            top: 40px;
            left: -10px;
            padding: 5px 10px;
            border-radius: 10px;
            background: #fff;
            visibility: hidden;
            opacity: 0;
            transition: 0.3s all ease-in-out;
            display: grid;
            place-items: center;
            z-index: 100;
            &::before {
              content: "";
              position: absolute;
              width: 25px;
              height: 25px;
              top: -25px;
              left: 15px;
              border-left: 15px solid transparent;
              border-right: 15px solid transparent;
              border-bottom: 12px solid #fff;
            }
          }
          .logout {
            position: absolute;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
            border-radius: 10px;
            width: 200px;
            height: 80px;
            top: 40px;
            left: -80px;
            background: #fff;
            visibility: hidden;
            opacity: 0;
            transition: 0.3s all ease-in-out;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            z-index: 100;
            .btn {
              width: 90%;
              height: 35px;
              button {
                font-size: 15px;
              }
            }
            p {
              font-size: 15px;
            }
            &::before {
              content: "";
              position: absolute;
              width: 25px;
              height: 25px;
              top: -25px;
              left: 75px;
              border-left: 15px solid transparent;
              border-right: 15px solid transparent;
              border-bottom: 12px solid #fff;
            }
          }
          .active {
            visibility: visible;
            opacity: 1;
            z-index: 200;
          }
          .active-log {
            visibility: visible;
            opacity: 1;
            z-index: 200;
          }
=======
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
          a {
            text-decoration: none;
            color: #111;
          }
          span {
            visibility: ${(props) =>
<<<<<<< HEAD
              props.itemCount === "0" ? "hidden" : "visible"};
=======
              props.itemcount === 0 ? "hidden" : "visible"};
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
            position: absolute;
            right: -10px;
            bottom: 0;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: #111;
            font-size: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
          }
<<<<<<< HEAD
          .iconImg {
            width: 30px;
            transition: 1s;
            animation: girar 10s linear infinite;
            &:hover {
              animation: girar 3s linear infinite;
              transition: 1s;
            }
          }
          @keyframes girar {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
=======
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
        }
      }
    }
  }
`;
<<<<<<< HEAD

const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: bolder;
  font-size: 20px;
  color: #111;
`;

const StyledLink2 = styled(Link)`
  text-decoration: none;
  font-size: 50px;
  color: #111;
`;
=======
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
