import axios from "axios";
<<<<<<< HEAD
import Swal from "sweetalert2";
=======
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
import {
  GET_PRODUCTS,
  GET_PRODUCTS_DETAIL,
  RESET_DETAIL,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  SEARCH_PRODUCT_REQUEST,
  SEARCH_PRODUCT_SUCCESS,
  SEARCH_PRODUCT_FAILURE,
  FILTERS,
<<<<<<< HEAD
  GET_BRANDS,
  GET_STYLES,
  GET_STRAPS,
  GET_COLORS,
  GET_FUNCTIONS,
  UPDATE_SELECTED_CATEGORIES,
=======
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
  TOTAL_PRICE,
  UPDATE_PRICE,
  ALL_BRANDS,
  ALL_STYLES,
  ALL_COLORS,
  ALL_STRAPS,
  ALL_FUNCTIONS,
<<<<<<< HEAD
  POST_WATCH,
  CREATE_USER,
  LOGIN_USER,
  GET_WATCHES_BY_BRAND,
  LOGOUT_USER,
  LOGIN_GOOGLE,
  UPDATE_CART,
  SET_CART,
} from "./actionTypes";

import { searchClient } from "../settings_algolia/settingsAlgolia";
import { BsDisplayport } from "react-icons/bs";

=======
  POST_WATCH
} from "./actionTypes";

>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
//fetch de productos

export const getProducts = () => async (dispatch) => {
  const URL = "http://localhost:3001/watches";
  try {
    const response = await fetch(URL);
    const data = await response.json();
    dispatch({
      type: GET_PRODUCTS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
//fetch de un producto segun su modelo
<<<<<<< HEAD
export function addModel(id) {
  const endpoint = `http://localhost:3001/watches/${id}`;
  return async function (dispatch) {
    try {
      let { data } = await axios(endpoint);
      console.log(data);
=======
export function addModel(model) {
  const endpoint = `http://localhost:3001/watches/${model}`;
  return async function (dispatch) {
    try {
      let { data } = await axios(endpoint);
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
      dispatch({
        type: GET_PRODUCTS_DETAIL,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
<<<<<<< HEAD
//update Detail
=======

>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
export function resetDetail() {
  return {
    type: RESET_DETAIL,
  };
}

//funciones del carrito
<<<<<<< HEAD
/* Cambio realizado */
export const setCart = (cartData) => ({
  type: SET_CART,
  payload: cartData,
});
/* ------ */
export const updateCart = () => ({
  type: UPDATE_CART,
});

export const addToCart = (watchBuy, cant) => ({
  type: ADD_TO_CART,
  payload: {
    ...watchBuy,
    quantity: cant,
  },
});

=======

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});
 
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});
//Price
export const totalPrice = (payload) => ({
  type: TOTAL_PRICE,
  payload,
});
export const updatePrice = () => ({
  type: UPDATE_PRICE,
});
//Searchbar

export const searchProductRequest = () => ({
  type: SEARCH_PRODUCT_REQUEST,
});

<<<<<<< HEAD
export const searchProduct = (searchTerms) => async (dispatch) => {
  dispatch({ type: SEARCH_PRODUCT_REQUEST });

  try {
    const algoliaIndex = searchClient.initIndex("TimeYou2"); // Reemplaza 'timeyou_PF' con el nombre de tu índice en Algolia
    const searchResults = await algoliaIndex.search(searchTerms);

    // console.log("Algolia search results:", searchResults.hits);

    // Si se encontraron resultados, envía los hits al estado como antes
    dispatch({
      type: SEARCH_PRODUCT_SUCCESS,
      payload: searchResults.hits,
    });
  } catch (error) {
    // console.error("Algolia search error:", error);
    dispatch(searchProductFailure("Error al realizar la búsqueda."));
=======
export const searchProductSuccess = (searchTerms) => (dispatch, getState) => {
  console.log("Search terms:", searchTerms);

  // Agregar searchProductRequest para indicar que se ha iniciado la búsqueda
  dispatch(searchProductRequest());

  const state = getState();
  console.log(state);
  const { Clocks } = state;

  if (searchTerms.length === 0) {
    // Si no hay términos de búsqueda, devuelve todos los relojes sin filtrar
    dispatch({
      type: SEARCH_PRODUCT_SUCCESS,
      payload: [],
    });
  } else {
    // Filtra los relojes que cumplen con todas las palabras de búsqueda
    const filteredProducts = Clocks.filter((product) => {
      let foundMatch = false; // Variable para indicar si se encontró una coincidencia en algún campo anterior

      foundMatch = searchTerms.every((term) => {
        // Verifica que al menos uno de los campos contenga el término de búsqueda
        return (
          product.brandName.toLowerCase().includes(term.toLowerCase()) ||
          product.colorName.toLowerCase().includes(term.toLowerCase()) ||
          product.styleName.toLowerCase().includes(term.toLowerCase()) ||
          product.strapName.toLowerCase().includes(term.toLowerCase()) ||
          product.Functions.some((func) => {
            if (typeof func.name === "string") {
              return func.name.toLowerCase().includes(term.toLowerCase());
            }
            return false;
          }) ||
          (term.toLowerCase() === "femenino" &&
            ["female", "unisex"].includes(product.gender.toLowerCase())) ||
          (term.toLowerCase() === "masculino" &&
            ["male", "unisex"].includes(product.gender.toLowerCase())) ||
          (term.toLowerCase() === "unisex" &&
            product.gender.toLowerCase() === "unisex")
        );
      });

      // Si no se encontró coincidencia en campos anteriores, buscamos en product.description
      if (!foundMatch) {
        return product.description
          .toLowerCase()
          .includes(searchTerms.join(" ").toLowerCase()); // Búsqueda en la descripción con todos los términos
      }

      return foundMatch; // Si encontramos coincidencia en campos anteriores, retornamos el resultado
    });
    console.log("Filtered products:", filteredProducts);

    dispatch({
      type: SEARCH_PRODUCT_SUCCESS,
      payload: filteredProducts,
    });
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
  }
};

export const searchProductFailure = (error) => ({
  type: SEARCH_PRODUCT_FAILURE,
  payload: error,
});

// Filters
<<<<<<< HEAD
export const applyFilters = (filteredWatches) => async (dispatch) => {
  dispatch({
    type: FILTERS,
    payload: filteredWatches,
  });
};

export const getBrands = () => {
  const endpoint = `http://localhost:3001/brands`;
  return async function (dispatch) {
    try {
      let { data } = await axios(endpoint);
      dispatch({
        type: GET_BRANDS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getColor = () => {
  const endpoint = `http://localhost:3001/colors`;
  return async function (dispatch) {
    try {
      let { data } = await axios(endpoint);
      dispatch({
        type: GET_COLORS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getStraps = () => {
  const endpoint = `http://localhost:3001/straps`;
  return async function (dispatch) {
    try {
      let { data } = await axios(endpoint);
      dispatch({
        type: GET_STRAPS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getStyles = () => {
  const endpoint = `http://localhost:3001/styles`;
  return async function (dispatch) {
    try {
      let { data } = await axios(endpoint);
      dispatch({
        type: GET_STYLES,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getFunctions = () => {
  const endpoint = `http://localhost:3001/functions`;
  return async function (dispatch) {
    try {
      let { data } = await axios(endpoint);
      dispatch({
        type: GET_FUNCTIONS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateSelectedCategories = (selectedCategories) => ({
  type: UPDATE_SELECTED_CATEGORIES,
  payload: selectedCategories,
});
=======
export const filtersAll = (filterBrands) => (dispatch, getState) => {
  const state = getState();
  console.log("estado:", state, "filterBrands:", filterBrands);
  const { Clocks } = state;

  const filterActive = Object.values(filterBrands).some((selected) => selected);

  // Realiza el filtrado adicional si hay categorías seleccionadas
  let filteredClocks = Clocks;
  if (filterActive) {
    filteredClocks = Clocks.filter((product) => {
      let matchesAllCategories = true;
      for (const fieldName in filterBrands) {
        const selectedValue = filterBrands[fieldName];
        if (selectedValue && product[fieldName] !== selectedValue) {
          matchesAllCategories = false;
          break;
        }
      }
      return matchesAllCategories;
    });
  }

  dispatch({
    type: FILTERS,
    payload: filteredClocks,
  });
};

// Acción para limpiar los filtros
export const clearFilters = () => (dispatch) => {
  // Aquí dispatch la acción para restablecer los filtros en el estado del Redux
  dispatch(filtersAll({}));
};

>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13

//TRAER TODOS LAS PROPIEDADES DE RELOJES

export function allPropWatches(prop) {
  const endpoint = `http://localhost:3001/${prop}`;
  return async function (dispatch) {
    try {
      let { data } = await axios(endpoint);
<<<<<<< HEAD
      prop === "brands" &&
        dispatch({
          type: ALL_BRANDS,
          payload: data,
        });
      prop === "styles" &&
        dispatch({
          type: ALL_STYLES,
          payload: data,
        });
      prop === "colors" &&
        dispatch({
          type: ALL_COLORS,
          payload: data,
        });
      prop === "straps" &&
        dispatch({
          type: ALL_STRAPS,
          payload: data,
        });
      prop === "functions" &&
        dispatch({
          type: ALL_FUNCTIONS,
          payload: data,
        });
=======
      prop === 'brands' && dispatch({
        type: ALL_BRANDS,
        payload: data,
      });
      prop === 'styles' && dispatch({
        type: ALL_STYLES,
        payload: data,
      });
      prop === 'colors' && dispatch({
        type: ALL_COLORS,
        payload: data,
      });
      prop === 'straps' && dispatch({
        type: ALL_STRAPS,
        payload: data,
      });
      prop === 'functions' && dispatch({
        type: ALL_FUNCTIONS,
        payload: data,
      });
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
    } catch (error) {
      console.log(error);
    }
  };
}

export function postWatch(watch) {
<<<<<<< HEAD
  const endpoint = `http://localhost:3001/watches`;
  return async function (dispatch) {
    try {
      let newWatch = await axios.post(endpoint, watch);
      console.log(newWatch.data);
=======
  const endpoint = `http://localhost:3001/watches/`;
  return async function (dispatch) {
    try {
      let newWatch = await axios.post(endpoint, watch);
      console.log(newWatch);
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
      dispatch({
        type: POST_WATCH,
        payload: newWatch,
      });
<<<<<<< HEAD
      Swal.fire({
        icon: "success",
        title: "Carga del reloj exitosa.",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: `Verifique los datos", ${error}`,
        showConfirmButton: false,
        timer: 1500,
      });
=======
      alert ("La Carga del WATCH fue con Exito!!")
    } catch (error) {
      alert ('Verifique si el MODELO en ese COLOR ya Existe')
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
    }
  };
}

<<<<<<< HEAD
//funcion de registro

export const createUser = (user) => async (dispatch) => {
  const endpoint = "http://localhost:3001/users/register";
  try {
    const newUser = await axios.post(endpoint, user);

    dispatch({
      type: CREATE_USER,
      payload: newUser,
    });
    Swal.fire({
      icon: "success",
      title: "Usuario creado con exito",
      showConfirmButton: false,
      timer: 1500,
    });
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "No pudo crearse el usuario",
      showConfirmButton: false,
      timer: 1500,
    });
  }
};

export const loginUser = (user) => async (dispatch) => {
  const endpoint = "http://localhost:3001/users/login";
  try {
    const { data } = await axios.post(endpoint, user, {
      headers: { "Content-Type": "application/json" },
    });
    console.log(data);
    dispatch({
      type: LOGIN_USER,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const loginGoogle = (user) => ({
  type: LOGIN_GOOGLE,
  payload: user,
});

// Peticiones para cada una de las Brand en el Navbar //
export const getWatchesByBrand = (brand) => async (dispatch) => {
  const URL = `http://localhost:3001/brands/${brand}`;
  try {
    let { data } = await axios.get(URL);
    // console.log("data.Watches", data.Watches);
    dispatch({
      type: GET_WATCHES_BY_BRAND,
      payload: data.Watches,
    });
    //console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const logOut = () => {
  return {
    type: LOGOUT_USER,
  };
};
=======
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
