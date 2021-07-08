
import React from 'react'
import { useObserver } from 'mobx-react'


const BasketItem = ({name, price, count, onTake}) => {
    return useObserver(() =>(
            <div>
                <div>{name}</div>
                <div>{price}</div>
                <div>{count}</div>
                <div onClick={() => onTake(name)}>갖다놓기</div>
            </div>
    ))
    
}

export default BasketItem;