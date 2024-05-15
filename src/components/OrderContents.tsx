import { MenuItemX, OrderItem } from "../types";
import { formatCurrency } from "./helpers";

type OrderContentsProps = {
  order: OrderItem[],
  removeItem: (id: MenuItemX['id']) => void
};

export default function OrderContents({ order, removeItem }: OrderContentsProps) {
  return (
    <div>
      <h2 className="font-black text-4xl">Consumo</h2>

      <div className="space-y-3 mt-10">
        {order.map((itemsOrder) => (
            <div
            className="flex justify-between items-center border-t border-gray200 py-5 last-of-type:border-b"
            key={itemsOrder.id}>

                <div>
              <p>
                {itemsOrder.name} - {formatCurrency(itemsOrder.price)}
              </p>
              <p className="font-black">
                Cantidad: {itemsOrder.quantity} -{" "}
                {formatCurrency(itemsOrder.quantity * itemsOrder.price)}
              </p>
              </div>

              <button
              onClick={() =>removeItem(itemsOrder.id)}
              className="bg-red-600 h-8 w-8 rounded-full text-white font-black">X</button>
            </div>
))}
      </div>
    </div>
  );
}
