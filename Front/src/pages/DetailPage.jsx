// eslint-disable-next-line no-unused-vars
import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
<<<<<<< HEAD
import { BiUser } from "react-icons/bi";
import { BTNCarritoDeCompras } from "../utils/ComponentsStyle";
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import { addModel, resetDetail } from "../redux/Actions";
import { addToCart } from "../redux/Actions";
import { translateGender } from "../components/helpers/translateGenderWords";
import CommentsList from "../components/comments/CommentsList";
import AverageRating from "../components/comments/AverageRating";
import CreateComment from "../components/comments/CreateComment";
import detailTY from "../../public/logoDetaild_Ty.svg";

import { ContainerLoader } from "../utils/ComponentsStyle";
import { Loader } from "../components/Loader/Loader";

function DetailPage() {
  const [color, setColor] = useState(0);
  const [color2, setColor2] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const dispatch = useDispatch();
  const { id } = useParams();
  const detailClock = useSelector((state) => state.detailClock);
  const loading = useSelector((state) => state.detailLoading);
  const user = useSelector((state) => state.user);
  const isLoggedIn = !!user.token;
  const cart = useSelector((state) => state.Cart);

  console.log(cart);

  const handleAddToCart = () => {
    dispatch(addToCart(detailClock[color], 1));
    setShowSuccessMessage(true);
  };

  const backPag = () => {
    dispatch(resetDetail());
  };

  useEffect(() => {
    console.log(id);
    dispatch(addModel(id));
    return backPag();
  }, [dispatch]);

  useEffect(() => {
    if (showSuccessMessage) {
      const timer = setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000); // El mensaje se mostrará durante 3 segundos
      return () => clearTimeout(timer);
    }
  }, [showSuccessMessage]);

  const renderLoader = () => (
    <ContainerLoader>
      <Loader />
    </ContainerLoader>
  );

  return loading ? (
    renderLoader()
=======
import { BTNCarritoDeCompras } from "../utils/ComponentsStyle";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addModel } from "../redux/Actions";
import { addToCart } from "../redux/Actions";

function DetailPage() {
  const [color, setColor] = useState(0);
  const dispatch = useDispatch();
  const { model } = useParams();
  const detailClock = useSelector((state) => state.detailClock);
  const loading = useSelector((state) => state.detailLoading);
 

  

  const handleAddToCart = () => {
   
    dispatch(addToCart(detailClock[color]));
  };

  useEffect(() => {
    dispatch(addModel(model));
  }, [dispatch]);

  return loading ? (
    <div>loanding</div>
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
  ) : (
    <Container>
      <div className="main_container">
        <header className="title">
          <h3>
            <span>
<<<<<<< HEAD
              TimeYou {">"} {detailClock[0].brandName} {">"}
=======
              TimesYou {">"} {detailClock[0].brandName} {">"}
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
            </span>{" "}
            {`${detailClock[0].model}`}
          </h3>
        </header>
        <section className="show-clocks">
<<<<<<< HEAD
          <div className="navVert">
            {detailClock[color].image.map((img, i) => (
              <img
                onClick={() => {
                  setColor2(i);
                  setSelectedImageIndex(i);
                }}
                key={i + 50}
                src={img}
                alt="imgB"
                className={selectedImageIndex === i ? "selected-image" : ""}
              />
            ))}
          </div>
          <picture className="img-box">
            <img src={detailClock[color].image[color2]} alt="imgD" />
=======
          <picture className="img-box">
            <img src={detailClock[color].image[0]} alt="imgD" />
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
          </picture>
          <article className="show-cart">
            <section className="body-cart">
              <header className="title-body">
                <h3>{`${detailClock[0].model} - ${detailClock[
                  color
                ].colorName.toUpperCase()}`}</h3>
                <h1>{`${detailClock[0].brandName.toUpperCase()} | ${
                  detailClock[0].model
                }`}</h1>
              </header>
              <hr />
              <div className="price">
<<<<<<< HEAD
                <h1>$ {parseInt(detailClock[0].price * 500)}.- </h1>
=======
                <h1>$ {detailClock[0].price * 500}.- </h1>
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
                <div className="colors">
                  <h3>Colores:</h3>
                  <div className="color">
                    {detailClock.map((wat, i) => (
<<<<<<< HEAD
                      <img
                        src={wat.image[0]}
                        alt=""
                        onClick={() => {
                          setColor(i);
                          setColor2(0);
                          setSelectedImageIndex(0);
                        }}
                        key={i + wat.colorName}
                        className={color === i ? "selected" : ""}
                      />
=======
                      <span
                        onClick={() => setColor(i)}
                        key={i + wat.colorName}
                        className={wat.colorName}
                      >
                        {i}
                      </span>
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
                    ))}
                  </div>
                </div>
              </div>
              <div className="btn-cart">
<<<<<<< HEAD
                <BTNCarritoDeCompras onClick={handleAddToCart} alter="false">
                  <span>
                    <FiShoppingCart />
                  </span>
                  Agregar al carrito
                </BTNCarritoDeCompras>
              </div>
              <div className="detail-compra">
                <img src={detailTY} alt="" />
              </div>
            </section>
          </article>
        </section>
        <section className="descriptions">
          <div className="description-container">
            <article className="description">
              <div className="title-description">
                <h3>Descripción</h3>
              </div>
              <p className="scrollable-description">
                {detailClock[0].description}
              </p>
            </article>
            <article className="ficha-tecnica">
              <div className="title-description">
                <h3>Ficha Técnica</h3>
              </div>
              <div className="body-content">
                <div className="gender">
                  <h3>*Género</h3>
                  <ul>
                    <li>{translateGender(detailClock[0].gender)}</li>
                  </ul>
                </div>
                <div className="container-mesh">
                  <div className="mesh">
                    <h3>*Malla</h3>
                    <ul>
                      <li>{detailClock[0].strapName}</li>
                    </ul>
                  </div>
                </div>
                <div className="container-functions">
                  <h3>*Funciones</h3>
                  <ul>
                    {detailClock[0].Functions.map((fun, i) => (
                      <li key={i + fun}>{fun.name}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </section>
        {isLoggedIn ? (
          <div>
            <div className="container-reviews">
              <section className="reviews">
                <CommentsList watchId={detailClock[0].id} />
              </section>
              <section className="ratings">
                <CreateComment watchId={detailClock[0].id} />
              </section>
            </div>
          </div>
        ) : (
          <div>
            <div className="login">
              <StyledNavLink
                to={`/auth?redirect=/product/${detailClock[0].id}`}
              >
                <BiUser /> Inicia sesión para calificar
              </StyledNavLink>
            </div>
            <hr />
            <div className="container-reviews">
              <section className="reviews">
                <CommentsList watchId={detailClock[0].id} />
              </section>
              <section className="ratings">
                <AverageRating watchId={detailClock[0].id} />
              </section>
            </div>
          </div>
        )}
=======
                <BTNCarritoDeCompras onClick={handleAddToCart}>
                  <span>
                    <FiShoppingCart />
                  </span>
                  agregar al carrito
                </BTNCarritoDeCompras>
              </div>
              <div className="detail-compra"></div>
            </section>
          </article>
        </section>
        <hr />
        <section className="descriptions">
          <article className="description">
            <div className="title-description">
              <h3>Descripcion</h3>
            </div>
            <p>{detailClock[0].description}</p>
          </article>
          <article className="ficha-tecnica">
            <div className="title-description">
              <h3>ficha tecnica</h3>
            </div>
            <div className="body-content">
              <div className="container-mesh">
                <div className="mesh">
                  <h3>Malla</h3>
                  <ul>
                    <li>{detailClock[0].strapName}</li>
                  </ul>
                </div>
                <div className="gender">
                  <h3>genero</h3>
                  <ul>
                    <li>{detailClock[0].gender}</li>
                  </ul>
                </div>
              </div>
              <div className="container-functions">
                <h3>funciones</h3>
                <ul>
                  {detailClock[0].Functions.map((fun, i) => (
                    <li key={i + fun}>{fun.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </section>
        <hr />
        <section className="reviews"></section>
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
      </div>
    </Container>
  );
}

export default DetailPage;

const Container = styled.main`
  width: 100vw;
  height: auto;
  display: flex;
<<<<<<< HEAD
=======
  flex-direction: column;
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom #f1f1f1, #fff);
  hr {
    width: 90%;
    height: 1px;
    background: #111;
    opacity: 0.5;
    margin: 20px auto;
  }
<<<<<<< HEAD
  .navVert {
    width: 60px;
    height: 450px;
    img {
      width: 50px;
      padding: 3px;
      cursor: pointer;
    }
    .selected-image {
      border: 2px solid #e4dbda;
      border-radius: 3px;
    }
  }
=======
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
  .main_container {
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .title {
      margin: 10px 0;
      width: 100%;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      h3 {
        font-size: 1.2rem;
        font-weight: 400;
        letter-spacing: 1px;
        text-transform: uppercase;
        span {
          font-size: 1.1rem;
          font-weight: 500;
          color: #333;
          text-transform: capitalize;
        }
      }
    }
    .show-clocks {
      width: 100%;
      height: 500px;
      display: flex;
      flex-direction: row;
<<<<<<< HEAD
      align-items: flex-start;
=======
      align-items: center;
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
      justify-content: center;
      .img-box {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
<<<<<<< HEAD
        border: 1px solid #e4e4e4;
        overflow: hidden;
        img {
          height: 100%;
=======
        overflow: hidden;
        img {
          width: 350px;
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
          object-fit: contain;
        }
      }
      .show-cart {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .body-cart {
          width: 80%;
          height: 100%;
          border-radius: 30px;
<<<<<<< HEAD
=======
          box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          .title-body {
            width: 90%;
            height: 90px;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            h3 {
              font-size: 0.9rem;
              color: #333;
              font-weight: 400;
            }
            h1 {
<<<<<<< HEAD
              font-size: 1.6rem;
              font-weight: 700;
=======
              font-size: 1.4rem;
              font-weight: 600;
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
              text-transform: uppercase;
            }
          }
          hr {
            width: 90%;
            height: 1px;
            background: #111;
            opacity: 0.5;
<<<<<<< HEAD
            margin: 0;
          }
          .price {
            width: 90%;
            height: 190px;
=======
            margin-bottom: 10px;
          }
          .price {
            width: 90%;
            height: 180px;
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            h1 {
              font-size: 2rem;
              font-weight: 500;
              letter-spacing: 1px;
            }
            .colors {
              width: 100%;
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              h3 {
<<<<<<< HEAD
                margin-top: 10px;
                font-size: 1rem;
              }
              .color {
                width: 100%;
                height: 100px;
                display: flex;
                align-items: center;
                justify-content: center;

                img {
                  height: 70%;
                  margin: 10px;
                  cursor: pointer;
                  border: 2px solid transparent;
                }
                .selected {
                  border-color: #e4dbda;
=======
                font-size: 1rem;
                text-decoration: underline;
              }
              .color {
                width: 100%;
                height: 50px;
                display: flex;
                align-items: center;
                justify-content: center;
                .rojo {
                  background-color: red;
                }
                .amarillo {
                  background-color: yellow;
                }
                .azul {
                  background-color: blue;
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
                }
                span {
                  position: relative;
                  display: inline-block;
                  width: 40px;
                  height: 40px;
                  border-radius: 50%;
                  margin: 15px;
                  transition: 0.5s ease;
                  &:hover {
                    transition: 0.3s ease-in-out;
                    &::after {
                      content: "";
                      position: absolute;
                      top: -5px;
                      left: -5px;
                      width: 50px;
                      height: 50px;
                      border: 1px solid #111;
                    }
                  }
                }
              }
            }
          }
          .btn-cart {
            width: 80%;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .detail-compra {
<<<<<<< HEAD
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 95%;
            height: 180px;
            margin-top: 8px;
            margin-bottom: 8px;

            img {
              opacity: 0.2;
              height: 80%;
            }
=======
            width: 90%;
            height: calc(500px - 280px);
            margin-top: 10px;
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
          }
        }
      }
    }
    .descriptions {
<<<<<<< HEAD
      margin: 50px auto;
      padding-top: 0 auto;
      width: 90%;
      height: 360px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #e4e4e4;

      .description-container {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }

=======
      margin: 0 auto;
      width: 90%;
      height: 250px;
      display: flex;
      align-items: center;
      justify-content: center;
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
      .description {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        .title-description {
          width: 90%;
          height: 35px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          border-bottom: 1px solid #333;
          h3 {
            text-transform: uppercase;
          }
        }
<<<<<<< HEAD
        .scrollable-description {
          max-height: 12em;
          overflow: auto;
        }
        p {
          width: 90%;
          margin-top: 10px;
=======
        p {
          width: 90%;
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
          margin-bottom: 20px;
        }
      }
      .ficha-tecnica {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
<<<<<<< HEAD
        margin-bottom: 30px;
=======
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
        .title-description {
          width: 90%;
          height: 35px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          border-bottom: 1px solid #333;
          h3 {
            text-transform: uppercase;
          }
        }
        .body-content {
          width: 100%;
          height: 62%;
          display: flex;
<<<<<<< HEAD
          align-items: flex-start;
          justify-content: space-between;
          gap: 15px;
          margin-top: 20px;
          margin-left: 80px;
          .container-mesh,
          .gender,
          .container-functions {
            /* Estilos comunes para las tres secciones */
            flex: 1;
=======
          align-items: center;
          justify-content: flex-start;
          gap: 50px;
          margin-left: 100px;
          .container-mesh {
            width: 20%;
            height: 100%;
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-around;
<<<<<<< HEAD
            h3 {
              text-transform: uppercase;
              font-size: 1em;
            }
            ul {
              margin-top: 12px;
              margin-left: 10px;
              list-style: none;
              li {
                opacity: 0.9;
                text-transform: capitalize;
                list-style: none;
                font-size: 0.9em;
              }
            }
            .mesh,
            .gender,
            .container-functions {
              margin-right: 0;
              h3 {
                text-transform: uppercase;
                font-size: 1em;
              }
              ul {
                margin-top: 12px;
                list-style: none;
                li {
                  opacity: 0.8;
                  text-transform: capitalize;
                  list-style: none;
                  font-size: 0.9em;
=======
            .mesh,
            .gender {
              h3 {
                text-transform: capitalize;
              }
              ul {
                li {
                  opacity: 0.8;
                  text-transform: uppercase;
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
                }
              }
            }
          }
<<<<<<< HEAD
        }
      }
    }
  }
  .login {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
  }

  .container-reviews {
    padding-top: 0 auto;
    margin: 0 auto;
    width: 90%;
    min-height: auto;
    display: flex;
    justify-content: space-between;
  }
  .reviews {
    width: 60%;
    min-height: auto;
    margin-bottom: 20px;
    padding-right: 20px;
  }
  .ratings {
    width: 50%;
    min-height: auto;
    padding: 0 auto;
    margin-bottom: 20px;
    margin-left: 20px;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #1e1616;
  font-size: 1rem;
  padding: 0;

  &:hover {
    font-weight: bolder;
=======
          .container-functions {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            h3 {
              text-transform: capitalize;
            }
            ul {
              margin-top: 10px;
              width: 50%;
              height: auto;
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              align-items: center;
              justify-items: center;
              gap: 10px;
              li {
                text-transform: uppercase;
                margin: 0 auto;
              }
            }
          }
        }
      }
    }
    .reviews {
      width: 100%;
      height: 400px;
      margin-bottom: 20px;
      background-color: red;
    }
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
  }
`;
