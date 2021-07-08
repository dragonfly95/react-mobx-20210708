import { observable } from 'mobx'

const market = observable({
    selectedItems: [],
    put(name, price) {
        let exists = this.selectedItems.find(item => item.name === name);
        if (!exists) {
            this.selectedItems.push({
                name, price, count:1
            });
            return;
        }
        exists.count++;
    },
    take(name) {
        const itemToTake = this.selectedItems.find(item => item.name === name);
        itemToTake.count--;
        if (itemToTake.count == 0) {
            this.selectedItems.remove(itemToTake);
        }
    },
    get total() {
        console.log('calculate sum');
        return this.selectedItems.reduce((previous, current) => {
            return previous + current.price * current.count
        }, 0)
    },
})

export { market }