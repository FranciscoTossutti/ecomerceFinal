import React from "react";
import { useCartContext } from "../Context/CartContext";


const CartItem = ({ product }) => {

    const {EliminarP} = useCartContext();

    return (
        <div className="CartItem">
            <img src={product.img}></img>
            <div className="cartcontenedor">
                <p><b>Titulo:</b> {product.titulo}</p>
                <p><b>Cantidad:</b> {product.cantidad}</p>
                <p><b>Precio:</b> ${product.precio}</p>
                <p><b>Subtotal:</b> ${product.cantidad * product.precio}</p>
                <button className="boton" onClick={() => EliminarP(product.id)}>Eliminar</button>
            </div>
        </div>
    )

}

export default CartItem;