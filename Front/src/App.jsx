<<<<<<< HEAD
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MyRoutes from "./routes/MyRoutes";
import { allPropWatches, clearCart, getProducts, logOut, setCart } from "./redux/Actions";
import { useNavigate } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  /* cambio realizado */
  /* Se agrega user al array de dependencias del effect */
  const user = useSelector(state=> state.user);
  /* ---- */
  const allProps = useCallback(() => {
    dispatch(getProducts());
    dispatch(allPropWatches("brands"));
    dispatch(allPropWatches("styles"));
    dispatch(allPropWatches("colors"));
    dispatch(allPropWatches("straps"));
    dispatch(allPropWatches("functions"));
  }, [dispatch]);

  useEffect(() => {
    allProps();
  }, [allProps]);
  /* cambio realizado */
  useEffect(() => {
    const userStored = localStorage.getItem("user");
    const userData = userStored ? JSON.parse(userStored) : false;
    const userName = userData ? userData.userName : null;
    const storedCart = localStorage.getItem(userName);
    if (storedCart && user) {
      console.log("se ejecuto!")
      dispatch(setCart(JSON.parse(storedCart))); // Cargar el carrito desde el almacenamiento local
    }
  }, [dispatch, user]);
  /* ---- */
  
  const [isActive, setIsActive] = useState(true);

   useEffect(() => {
    let inactivityTimer;

    const resetTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        setIsActive(false);
      }, 3000000); // 1/2 hr in milliseconds

      setIsActive(true);
    };
    
    window.addEventListener('mousemove', resetTimer);
    window.addEventListener('keydown', resetTimer);
    window.addEventListener('click', resetTimer);

    return () => {
      
      window.removeEventListener('mousemove', resetTimer);
      window.removeEventListener('keydown', resetTimer);
      window.removeEventListener('click', resetTimer);
      
    };
  }, []);
  
  const handleLogOut = (USER) => {
  console.log("evalua LOGout");
    USER.length ?(
    dispatch(clearCart()),
    dispatch(logOut()),
    setIsActive(true),
    navigate("/"),
    Swal.fire({
      icon: 'warning',
      title: 'Se cerró sessión',
      showConfirmButton: false,
      timer: 1500
    })
    )
    : null
  };
  
  return (
    <div>
      {!isActive && handleLogOut(user.token)}
      <MyRoutes />
    </div>
  );
=======

import { useEffect } from "react";
import MyRoutes from "./routes/MyRoutes";
import { useDispatch } from "react-redux";
import { allPropWatches } from "./redux/Actions";

function App() {
  const dispatch = useDispatch()
  
  useEffect(()=>{
  dispatch(allPropWatches('brands'))
  dispatch(allPropWatches('styles'))
  dispatch(allPropWatches('colors'))
  dispatch(allPropWatches('straps'))
  dispatch(allPropWatches('functions'))
  },[dispatch])
  
  return <MyRoutes/>;
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
}

export default App;
