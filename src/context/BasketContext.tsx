import { createContext, ReactNode, useContext, useReducer } from "react";
import {
  BasketActions,
  BasketContextType,
  BasketState,
} from "../utils/basket_context_types";

const BasketContext = createContext<BasketContextType | null>(null);

function BasketContextReducer(state: BasketState, Actions: BasketActions) {
  switch (Actions.type) {
    case "ADD_TO_BASKET": {
      let updatedProducts;
      // check if product exist, if so add the quantity;
      if (state.products.find((product) => product.id == Actions.payload.id)) {
        updatedProducts = state.products.map((product) =>
          product.id == Actions.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      } else {
        updatedProducts = [Actions.payload, ...state.products];
      }
      const updatedCount = state.count + 1;

      const subtotal: number = updatedProducts.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );
      return {
        count: updatedCount,
        products: updatedProducts,
        subtotal,
      };
    }
    case "REMOVE_FROM_BASKET": {
      let updatedProducts =
        Actions.payload.quantity > 1
          ? state.products.map((product) =>
              product.id == Actions.payload.id
                ? { ...product, quantity: product.quantity - 1 }
                : product
            )
          : state.products.filter(
              (product) => product.id != Actions.payload.id
            );
      const subtotal: number = updatedProducts.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );
      return {
        count: state.count - 1,
        products: updatedProducts,
        subtotal,
      };
    }
    default:
      return state;
  }
}

export function BasketContextProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(BasketContextReducer, {
    count: 0,
    products: [],
    subtotal: 0,
  });

  return (
    <BasketContext.Provider value={{ state, dispatch }}>
      {children}
    </BasketContext.Provider>
  );
}

function useBasketContext() {
  const context = useContext(BasketContext);
  if (!context) throw new Error("Context out of Provider!");
  return context;
}
export default useBasketContext;
