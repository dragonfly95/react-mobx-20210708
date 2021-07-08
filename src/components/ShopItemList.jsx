
import React from 'react'
import ShopItem from './ShopItem'
import useStore from '../useStore'
import { useObserver } from 'mobx-react-lite';

const items = [
    { name: 'water', price: 800 },
    { name: '신라면', price: 1000 },
    { name: '새우깡', price: 1200 },
    { name: '남양유업', price: 1100 },
    { name: 'water', price: 800 },
];

const ShopItemList = () => {
    const { market } = useStore();

    const onPut = (name, price) => {
        market.put(name, price);
    }

    return useObserver(() => {
        const itemList = items.map((item) => <ShopItem {...item} key={item.name} onPut={onPut}/>);
        return <div>{itemList}</div>;
    });
}

export default ShopItemList;
