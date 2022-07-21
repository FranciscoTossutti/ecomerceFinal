import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";
import { createBuyOrder } from "../Firebase/config";
import CartItem from "./CartItem";
import Contacto from "./Contacto";


const Cart = () => {

    const { cart, totalPrecio, clearCart} = useCartContext();

    if ( cart.length === 0) {
        return (
            <>
            <p>No hay productos en el carrito</p>
            <Link to='/'>Comprar</Link>
            </>
        );
    }

    return (
        <>
        {
            cart.map(product => <CartItem key={product.id} product = {product} />)
        }
        <Contacto cart={cart} totalPrecio={totalPrecio} createBuyOrder={createBuyOrder} clearCart={clearCart}/>
        </>
    );
}

export default Cart;