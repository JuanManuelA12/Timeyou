import {
  GET_PRODUCTS,
  GET_PRODUCTS_DETAIL,
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_FROM_CART,
  RESET_DETAIL,
  SEARCH_PRODUCT_REQUEST,
  SEARCH_PRODUCT_SUCCESS,
  SEARCH_PRODUCT_FAILURE,
  FILTERS,
  ALL_BRANDS,
  ALL_STYLES,
  ALL_COLORS,
  ALL_STRAPS,
  ALL_FUNCTIONS,
  POST_WATCH

} from "./actionTypes";


// Obtenemos el carrito almacenado en el localStorage (si existe)
const storedCart = localStorage.getItem("cart");

const initialState = {
  Clocks: [],
  Clock: {},
  searchClocks: [],
  searchActive: false,
  filteredClocks: [],
  Cart: storedCart ? JSON.parse(storedCart) : { items: [] },
  detailClock: [],
  isLoading: true,
  detailLoading: true,
  BRANDS:[],
  STYLES:[],
  COLORS:[],
  STRAPS:[],
  FUNCTIONS:[],
};

// Función para guardar el carrito en el localStorage
const saveCartToLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        Clocks: payload,
        isLoading: false,
      };
    case GET_PRODUCTS_DETAIL:
      return {
        ...state,
        detailClock: payload,
        detailLoading: false,
      };
    //Searchbar
    case SEARCH_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case SEARCH_PRODUCT_SUCCESS:
      const searchedProducts = payload;
      const searchActive = searchedProducts.length > 0;

      return {
        ...state,
        searchClocks: searchedProducts,
        isLoading: false,
        error: null,
        searchActive,
      };
    case SEARCH_PRODUCT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case ADD_TO_CART:
      const updatedCart = [...state.Cart.items, payload];
      saveCartToLocalStorage({ items: updatedCart });
      return {
        ...state,
        Cart: { items: updatedCart },
      };
    case REMOVE_FROM_CART:
      const filteredCart = state.Cart.items.filter(
        (item) => item.id !== payload
      ); // Aquí accedemos al array 'items'
      saveCartToLocalStorage({ items: filteredCart });
      return {
        ...state,
        Cart: { items: filteredCart },
      };
    case CLEAR_CART:
      localStorage.removeItem("cart");
      return {
        ...state,
        Cart: { items: [] },
      };
    case RESET_DETAIL:
      return {
        ...state,
        detailClock: [],
      };
    case FILTERS:
      const filterBrands = payload || {};
      console.log("filterBrands", filterBrands)
     
      const filterActive = Object.values(filterBrands).some((selected) => selected);
      console.log(filterActive)

      let filteredClocks = state.Clocks;
      if (filterActive) {
        filteredClocks = state.Clocks.filter((product) => {
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

      return {
        ...state,
        searchClocks: filterBrands,
        isLoading: false,
        error: null,
        searchActive: filterActive,
        filteredClocks: filteredClocks,
      };
      case ALL_BRANDS:
        return {
          ...state,
          BRANDS: payload,
        }; 
      case ALL_STYLES:
        return {
          ...state,
          STYLES: payload,
        };
      case ALL_COLORS:
        return {
          ...state,
          COLORS: payload,
        };
      case ALL_STRAPS:
        return {
          ...state,
          STRAPS: payload,
        };
      case ALL_FUNCTIONS:
        return {
          ...state,
          FUNCTIONS: payload,
        };
      case POST_WATCH:
        return {
          ...state,
        }
    default:
      return state;
  }
  }
    

