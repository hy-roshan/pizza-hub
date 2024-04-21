import React from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  function handleDeleteItem() {
    console.log("inside delete");
    dispatch(deleteItem(pizzaId));
  }
  if (pizzaId)
    return (
      <Button onClick={handleDeleteItem} type="small">
        Delete
      </Button>
    );
  else return null;
}

export default DeleteItem;
