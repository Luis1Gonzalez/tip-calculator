export type MenuItemX = {
id: number,
name: string,
price: number
}

export type OrderItem = MenuItemX & {
    quantity: number
    // Este nuevo tigy cointiene todo lo del type anterior (MenuItemx) + quantity
}