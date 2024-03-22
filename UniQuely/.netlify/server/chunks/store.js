import { w as writable } from "./index.js";
let initialCart = [];
const cart = writable(initialCart);
cart.subscribe((val) => {
});
export {
  cart as c
};
