<<<<<<< HEAD
import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { BTNHover, ContainerLoader } from "../utils/ComponentsStyle";
import { useLocation, useNavigate } from "react-router-dom";
import { CardShopping } from "../components/CardShopping";
import { useDispatch, useSelector } from "react-redux";
import { BTNCarritoDeCompras } from "../utils/ComponentsStyle";
import { setCart, totalPrice, updateCart } from "../redux/Actions";
import { ProductMP } from "../components/mp/MercadoPago";
import { BsStripe } from "react-icons/bs";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { Loader } from "../components/Loader/Loader";

const stripePromise = loadStripe(
  "pk_test_51NVgnTAYvuvU8SQ49gIo7GAYFVsJvzbxM4nYtK4dTWvvmSTBQgssGmwQbzqlWvznnEtmq7AMt8eVMuG3ZDy5Ex4L00Pkqqwp0w"
); // Reemplaza con tu clave secreta de Stripe

function Shopping() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.isLoadingCart);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.Cart);
  let brandCart = cart?.map((e) => e.model);
  let modelString = brandCart.toString();
  const customRef = useRef();
  const [toogle, setToogle] = useState(false);

  const compraTotal = Math.floor(
    cart?.reduce((acc, e) => acc + (e.price * e.quantity), 0) * 500
  );

  const toogleState = () => {
    setToogle(!toogle);
  };

  const handleStripeButton = async () => {
    try {
      const stripe = await stripePromise;
      const response = await axios.post(
        "http://localhost:3001/payment/create-checkout-session",
        {
          userName: user.userName,
          model: modelString,
          amount: compraTotal,
        }
      );
      const session = response.data;
      const result = await stripe.redirectToCheckout({
        sessionId: session.sessionId,
      });
      console.log(result);
      if (result.error) {
        console.error(result.error.message);
      } else {
        dispatch(updateCart());
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
=======
import React from "react";
import styled from "styled-components";
import { BTNHover } from "../utils/ComponentsStyle";
import { useNavigate } from "react-router-dom";
import { BsBagCheck, BsBag } from "react-icons/bs";
import { CardShopping } from "../components/CardShopping";
import { useDispatch, useSelector } from "react-redux";
import { BTNCarritoDeCompras } from "../utils/ComponentsStyle";
import { totalPrice } from "../redux/Actions";

function Shopping() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const cart = useSelector((state) => state.Cart);

  const compraTotal = Math.floor(
    cart.items.reduce((acc, e) => acc + e.price, 0) * 500
  );

  const handleCheckOut = () => {
    dispatch(totalPrice(compraTotal));
    navigate("/shopping/checkout");
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
  };

  const renderCart = () => (
    <Container>
<<<<<<< HEAD
      <Acordion className={toogle ? "active" : ""}>
        <div className="content-box">
          <div className="MP">
            <div className="btn">
              <ProductMP cart={cart} userBuy={user.id} />
              <p>Todos tus datos están protegidos</p>
            </div>
          </div>

          <div className="Stripe">
            <div className="btn">
              <BTNCarritoDeCompras alter="true" onClick={handleStripeButton}>
                <span className="icon-stripe">
                  <BsStripe />
                </span>
                Pagar con Stripe
              </BTNCarritoDeCompras>
              <p>Todos tus datos están protegidos</p>
            </div>
          </div>
        </div>
        <div className="btn">
          <BTNCarritoDeCompras onClick={toogleState}>
            Cerrar pasarela
          </BTNCarritoDeCompras>
        </div>
      </Acordion>
      <div className="btn-goback">
        <BTNHover alter="true" onClick={() => navigate(-1)}>
=======
      <div className="btn-goback">
        <BTNHover alter onClick={() => navigate("/")}>
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
          {"<"}
        </BTNHover>
      </div>
      <div className="main-Container">
<<<<<<< HEAD
        <div className="main-card">
          {cart.length === 0 ? (
            <ContainerEmpty>
              <h1>No tienes elementos cargados en el carrito</h1>
            </ContainerEmpty>
          ) : (
            <div className="main-products">
              <div className="products">
                {loading ? (
                  <ContainerLoader> <Loader/> </ContainerLoader>
                ) : (
                  cart.map((e, index) => <CardShopping key={index} reloj={e} />)
                )}
              </div>
              {cart.length > 0 ? (
                <div className="resumen-container">
                  <div className="resumen-text">
                    <h4>Resumen del pedido</h4>
                    <p>
                      Vea todas las opciones de envío para sus productos,
                      incluyendo los plazos y los precios de envío
                    </p>
                  </div>
                  <div className="total-text">
                    <h4>
                      sub-total: <span>${compraTotal}</span>{" "}
                    </h4>
                    <hr />
                    <h2>
                      Total: <span>${compraTotal}</span>{" "}
                    </h2>
                  </div>

                  <div className="btn-checkout">
                    <div className="btn-check">
                      <BTNCarritoDeCompras alter="false" onClick={toogleState}>
                        FINALIZAR COMPRA
                      </BTNCarritoDeCompras>
                    </div>
                    <div className={`btn-comprarmas`}>
                      <BTNCarritoDeCompras
                        alter="true"
                        onClick={() => navigate("/")}
                      >
                        VER OTROS PRODUCTOS
                      </BTNCarritoDeCompras>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          )}
        </div>
=======
        <header className="header-shpping">
          <div className="header">
            <span className="check">
              <BsBagCheck />
            </span>
            <h1>
              time<span>you</span>
            </h1>
            <span className="no-check">
              <BsBag />
            </span>
          </div>
        </header>
        <div className="main-card">
          <div className="main-products">
            <div className="products">
              {cart.items.length === 0 ? (
                <ContainerEmpty>
                  <h1>No tienes elementos cargados en el carrito</h1>
                </ContainerEmpty>
              ) : (
                cart.items.map((e, index) => (
                  <CardShopping key={index} reloj={e} />
                ))
              )}
            </div>
          </div>
        </div>
        {cart.items.length > 0 ? (
          <div className="resumen-container">
            <div className="resumen-text">
              <h4>Resumen del pedido</h4>
              <p>
                Vea todas las opciones de envío para sus productos, incluyendo
                los plazos y los precios de envío
              </p>
            </div>
            <div className="total-text">
              <h4>
                sub-total: <span>${compraTotal}</span>{" "}
              </h4>
              <hr />
              <h2>
                Total: <span>${compraTotal}</span>{" "}
              </h2>
            </div>
            <div className="btn-checkout">
              <div className="btn-check">
                <BTNCarritoDeCompras onClick={handleCheckOut}>
                  FINALIZAR COMPRA
                </BTNCarritoDeCompras>
              </div>
              <div className="btn-comprarmas">
                <BTNCarritoDeCompras alter onClick={() => navigate("/")}>
                  VER OTROS PRODUCTOS
                </BTNCarritoDeCompras>
              </div>
            </div>
          </div>
        ) : null}

        <footer className="footer-shopping">
          <div className="text-info">
            <p>TimeYou © 2019 - Todos los derechos reservados</p>
          </div>
        </footer>
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
      </div>
    </Container>
  );

  return <>{renderCart()}</>;
}

export default Shopping;

const Container = styled.main`
  width: 100vw;
<<<<<<< HEAD
=======
  min-height: 500px;
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
<<<<<<< HEAD
  z-index: 100;

  .active {
    visibility: visible;
    top: 0;
    z-index: 200;
    overflow-y: hidden !important;
  }
=======
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
  .btn-goback {
    position: absolute;
    top: 80px;
    left: 0px;
  }
  .main-Container {
    width: 100%;
<<<<<<< HEAD
    min-height: 100vh;
    height: auto;
=======
    height: 100%;
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
<<<<<<< HEAD
    .main-card {
      width: 90%;
      min-height: 600px;
=======
    .header-shpping {
      width: 100%;
      height: 8%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(0, 0, 0, 0.4);
      .header {
        width: 90%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        h1 {
          visibility: hidden;
          text-transform: uppercase;
          span {
            font-weight: 300;
          }
        }
        .check,
        .no-check {
          width: 40px;
          height: auto;
          font-size: 20px;
          font-weight: 300;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
    .main-card {
      margin: 40px 0;
      width: 100%;
      min-height: 300px;
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
      height: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
<<<<<<< HEAD
      margin: 20px 0;
      .main-products {
        margin-top: 20px;
        width: 90%;
        height: 100%;
        display: grid;
        grid-template-columns: 70% 30%;
        align-items: start;
        justify-items: start;
=======
      .main-products {
        width: 80%;
        height: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
        .products {
          width: 90%;
          height: auto;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
        }
<<<<<<< HEAD
        .resumen-container {
          margin-top: 30px;
          width: 100%;
          height: 550px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px 0;
          border-radius: 30px;
          box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.4);
          .resumen-text {
            width: 100%;
            height: calc(100% / 3);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 20px;
            h4 {
              text-transform: uppercase;
              font-size: 24px;
              text-decoration: underline;
            }
            p {
              width: 90%;
              opacity: 0.8;
            }
          }
          .total-text {
            width: 100%;
            height: calc(100% / 3);
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            gap: 30px;
            hr {
              width: 90%;
              margin: 0 auto;
            }
            h4 {
              margin: 0 auto;
              font-size: 20px;
              text-decoration: underline;
              text-transform: uppercase;
              width: 80%;
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
            h2 {
              margin: 0 auto;
              text-decoration: underline;
              text-transform: uppercase;
              width: 80%;
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
          }

          .btn-checkout {
            width: 100%;
            height: calc(100% / 3);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
            margin: auto;
            position: relative;
            .btn-check,
            .btn-comprarmas {
              width: 90%;
              height: 50px;
            }
          }
        }
=======
      }
    }
    .resumen-container {
      width: 90%;
      height: 200px;
      display: flex;
      flex-direction: row;
      .resumen-text {
        width: calc(100% / 3);
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        h4 {
          text-transform: uppercase;
          font-size: 24px;
          text-decoration: underline;
        }
        p {
          width: 90%;
          opacity: 0.8;
        }
      }
      .total-text {
        width: calc(100% / 3);
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 30px;
        hr {
          width: 80%;
          margin: 0 auto;
        }
        h4 {
          margin: 0 auto;
          font-size: 20px;
          text-decoration: underline;
          text-transform: uppercase;
          width: 80%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        h2 {
          margin: 0 auto;
          text-decoration: underline;
          text-transform: uppercase;
          width: 80%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      }
      .btn-checkout {
        width: calc(100% / 3);
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        margin: auto;
        .btn-check,
        .btn-comprarmas {
          width: 90%;
          height: 50px;
        }
      }
    }
    .footer-shopping {
      width: 100%;
      height: 10%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(0, 0, 0, 0.1);
      .text-info {
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
      }
    }
  }
`;

const ContainerEmpty = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

<<<<<<< HEAD
const Acordion = styled.div`
  position: fixed;
  top: -3500px;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  z-index: 300;
  transition: 1s ease-in-out;
  gap: 10px;

  .btn {
    width: 250px;
    height: 50px;
  }
  .content-box {
    width: 600px;
    height: 250px;
    background-color: #fff;
    display: grid;
    grid-template-columns: 50% 50%;
    place-content: center;
    border-radius: 15px;
    background: rgb(255, 255, 255);
    background: radial-gradient(circle, rgba(255, 255, 255, 1), transparent);
    box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.5);

    .MP {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .btn {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
      }
      button {
        margin: 0 auto;
        width: 95% !important;
        height: 50px !important;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      p {
        width: 100%;
        text-align: center;
        font-size: 10px;
        opacity: 0.8;
      }
    }
    .Stripe {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .btn {
        width: 90%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        button {
          width: 100% !important;
          height: 50px !important;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }
        p {
          width: 100%;
          text-align: center;
          font-size: 10px;
          opacity: 0.8;
        }
      }
    }
  }
`;
=======
const ContainerProduct = styled.div``;
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
