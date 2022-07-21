import React, { useState } from "react";


const Contacto = ({cart, totalPrecio, createBuyOrder, clearCart}) => {


    const [comprador, setComprador] = useState( {
        nombre:"",
        telefono:"",
        email:""
    })

    const handleChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        setComprador({
            ...comprador,
            [field]: value, 
        })

    }

    function handleBuyOrder (e) {
        e.preventDefault();
        const dataOrder = {
            comprador,
            items: cart.map(product => ({id: product.id, titulo: product.titulo, precio: product.precio, cantidad: product.cantidad})),
            total: totalPrecio(),
        }
        createBuyOrder(dataOrder).then((orderDataCreated) => {
            clearCart(orderDataCreated.id);
        });
    }

    return (
        <form>

            <label className="label" for="nombre">Usuario:</label>
            <input className="input" onChange={handleChange} name="nombre" type="text"></input>

            <label className="label" for="telefono">Telefono:</label>
            <input className="input" onChange={handleChange} name="telefono" type="number"></input>

            <label className="label" for="email">Email:</label>
            <input className="input" onChange={handleChange} name="email" type="email"></input>
            <button className="boton" onClick={handleBuyOrder}>Finalizar Compra</button>
        </form>
    )
}

export default Contacto;