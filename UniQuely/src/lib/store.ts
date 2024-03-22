import { writable } from 'svelte/store';
import { browser } from '$app/environment';

interface CartItem {
    ID:string,
    name: string;
    sellerName: string;
    price: number;
    categoryOne: string;
}

let initialCart: CartItem[] = [];
if (browser) {
    const storedData = localStorage.getItem('userId');
    if (storedData) {
        initialCart = JSON.parse(storedData);
    }
}
export const cart = writable<CartItem[]>(initialCart);

cart.subscribe((val) => {
    if (browser) {
        localStorage.setItem('userId', JSON.stringify(val));
    }
});