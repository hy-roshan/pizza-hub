import React from "react";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItemQuantity,
  getCart,
  increaseItemQuantity,
} from "./cartSlice";

function UpdateItem({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  const cart = useSelector(getCart);
  return (
    <div className="flex gap-3 items-center">
      <Button
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
        type="round"
      >
        -
      </Button>
      {currentQuantity}
      <Button
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
        type="round"
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItem;
