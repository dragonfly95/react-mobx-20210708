import React from 'react'

const ShopItem = ({name, price, onPut}) => {
    return (
        <div onClick={() => onPut(name, price)}>
            <h4>{name}</h4>
            <div>{price} won</div>
        </div>
    )
}

export default ShopItem;