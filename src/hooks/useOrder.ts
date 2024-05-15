import { OrderItem } from "./../types/index";
import { useState } from "react";
import { MenuItemX } from "../types";

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);
  // <OrderItem[]> esto es un generic y en este caso sirve para definir el tipo de datos que debe esperar el state, en este caso revisara que tenga la estructura del type que definimos en el index.ts
  const [tip, setTip] = useState(0)

  const addItem = (item: MenuItemX) => {
    const itemExist = order.find((OrderItem) => OrderItem.id === item.id);

    if (itemExist) {
      const updateOrder = order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );
      setOrder(updateOrder);
    } else {
      const newItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }
  };

  const removeItem = (id: MenuItemX['id']) => {
    setOrder(order.filter( item => item.id !== id ))
  }

  const placeOrder = () => {
    setOrder([])
    setTip(0)
  }

  return {
    order,
    tip,
    setTip,
    addItem,
    removeItem,
    placeOrder
  };
}
