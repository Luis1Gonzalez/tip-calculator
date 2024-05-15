import type { MenuItemX } from "../types"
import { formatCurrency } from "./helpers"

type MenuItemProps = {
    item : MenuItemX,
    addItem: (item : MenuItemX) => void
}

export default function MenuItem({ item, addItem } : MenuItemProps) {
  return (
    <button
    onClick={() => addItem(item)}
    className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between">
    <p>{item.name}</p>
    <p className="font-black">{formatCurrency(item.price)}</p>
    </button>
  )
}
