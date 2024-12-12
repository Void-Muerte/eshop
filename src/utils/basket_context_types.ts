import { Dispatch } from "react";
import { BasketProductType} from "./product_types";

export type BasketState = {
  count: number;
  products: BasketProductType[];
  subtotal:number;
};
export type BasketActions = {
  type: "ADD_TO_BASKET" | "REMOVE_FROM_BASKET";
  payload: BasketProductType;
};

export type BasketContextType = {
    state:BasketState;
    dispatch:Dispatch<BasketActions>
}
