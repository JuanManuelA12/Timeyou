import React from "react";
import styled from "styled-components";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

=======
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineCopyrightCircle,
<<<<<<< HEAD
  AiOutlineTwitter,
} from "react-icons/ai";

export const Footer = () => {
  const user = useSelector((state) => state.user);

=======
} from "react-icons/ai";

export const Footer = () => {
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
  return (
    <Container>
      <div className="margin">
        <section className="media">
          <div className="about">
            <h3 className="title">TimeYou</h3>
            <ul>
<<<<<<< HEAD
              <StyledLink to="/sobreNosotros" target="_top">
                sobre nosotros
              </StyledLink>
              <StyledLink to='/contacto' target="_top">contacto</StyledLink>

              {user.role.trim() === "" ? (
                <StyledLink to="/auth" target="_top">
                  mi cuenta
                </StyledLink>
              ) : (user.provider === 'local' ? (
                <StyledLink to="/micuenta" target="_top">
                  mi cuenta
                </StyledLink>
              ) : (true))}
=======
              <li>sobre nosotros</li>
              <li>contacto</li>
              <li>trabaja con nosotros</li>
              <li>mi cuenta</li>
              <li>servicio tecnico</li>
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
            </ul>
          </div>
          <div className="help">
            <h3 className="title">ayuda</h3>
            <ul>
<<<<<<< HEAD
              <StyledLink to="/preguntas" target="_top">
                preguntas frecuentes
              </StyledLink>
              <StyledLink to="/privacidad" target="_top">
                Privacidad
              </StyledLink>
              <StyledLink to="/terminosycondiciones" target="_top">
                Terminos & condiciones
              </StyledLink>
=======
              <li>preguntas frecuentes</li>
              <li>Privacidad</li>
              <li>manuales</li>
              <li>Terminos & condiciones</li>
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
            </ul>
          </div>
          <div className="social">
            <h3>Seguinos</h3>
            <ul>
<<<<<<< HEAD
              <StyledLink to="https://www.facebook.com/soyhenryok/">
                <AiOutlineFacebook size={24} />
              </StyledLink>
              <StyledLink to="https://www.instagram.com/soyhenry_ok/">
                <AiOutlineInstagram size={24}/>
              </StyledLink>
              <StyledLink to="https://twitter.com/soyhenry_ok">
                <AiOutlineTwitter size={24}/>
              </StyledLink>
=======
              <li>
                <AiOutlineFacebook />
              </li>
              <li>
                <AiOutlineInstagram />
              </li>
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
            </ul>
          </div>
        </section>
        <hr />
        <section className="copy">
          <h4>
<<<<<<< HEAD
            <span>TimeYou</span> {<AiOutlineCopyrightCircle />} 2023
=======
            <span>TimeYou</span> {<AiOutlineCopyrightCircle />} 2023 - Todos los
            derechos reservados
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
          </h4>
        </section>
      </div>
    </Container>
  );
};

const Container = styled.footer`
  width: 100vw;
<<<<<<< HEAD
  height: 200px;
=======
  height: 350px;
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
  background-color: #111;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  hr {
    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.4);
  }
  .margin {
    width: 80%;
    margin: 0 auto;
    .media {
      width: 100%;
<<<<<<< HEAD
      height: 200px;
=======
      height: 300px;
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
      display: flex;
      align-items: center;
      .about,
      .help,
      .social {
        width: 33.33%;
        height: 100%;
        color: #fff;
        text-transform: capitalize;
        ul {
          list-style: none;
          text-transform: capitalize;
          li {
            font-weight: 300;
          }
        }
      }
      .about {
        display: flex;
        flex-direction: column;
        margin-top: 100px;
        gap: 10px;
        ul {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          gap: 10px;
        }
      }
      .help {
        display: flex;
        flex-direction: column;
        margin-top: 100px;
        gap: 10px;
        ul {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          gap: 10px;
        }
      }
      .social {
        display: flex;
        flex-direction: column;
        margin-top: 100px;
        gap: 10px;
        ul {
          width: 100%;
          display: flex;
          gap: 10px;
          li {
            font-size: 2rem;
          }
        }
      }
    }
    .copy {
      width: 100%;
<<<<<<< HEAD
      height: 25px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-bottom: 30px;
=======
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
      h4 {
        font-size: 0.8rem;
        color: #fff;
        letter-spacing: 1px;
        font-weight: 300;
        span {
          font-weight: 600;
        }
      }
    }
  }
`;
<<<<<<< HEAD
const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: bolder;
  font-size: 15px;
  color: #faf9f9;
`;
=======
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
