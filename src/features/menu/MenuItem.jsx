import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
// import { addItem, deleteItem } from "./cart/cartSlice";

import {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearItems,
  getCart,
  getCartItemById,
} from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItem from "../cart/UpdateItem";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const cart = useSelector(getCartItemById(id));

  // const cart = useSelector(getC(id));
  const dispatch = useDispatch();

  function handleClick() {
    const newItem = {
      pizzaId: id,
      name,
      unitPrice,
      quantity: 1,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
    console.log(pizza.id);
  }
  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice * 10)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          {!soldOut && (
            <>
              {cart > 0 ? (
                <div className="flex gap-2 ">
                  <DeleteItem pizzaId={id} />
                  <UpdateItem pizzaId={id} currentQuantity={cart} />
                </div>
              ) : (
                <Button onClick={handleClick} type="small">
                  Add to cart
                </Button>
              )}
            </>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
