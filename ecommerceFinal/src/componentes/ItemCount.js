import React from "react";
import { useState, useEffect } from "react";

const ItemCount = ({initial, stock, onAdd}) => {
    const[count, setCount] = useState(parseInt(initial));

    const sumar = () => {
        setCount(count + 1);
    }

    const restar = () => {
        setCount(count - 1);
    }

    useEffect(() => {
        setCount(parseInt(initial));

    },[initial])

    return (
        <div className="count">
            <button className="botonC" disabled={count <= 1} onClick={restar}>-</button>
            <span className="contador1">{count}</span>
            <button className="botonC" disabled={count >= stock} onClick={sumar}>+</button>
            <div>
                <button className="botonA" disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    );
}

export default ItemCount;