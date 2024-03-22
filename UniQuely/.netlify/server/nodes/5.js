

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/cart/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.uoqEwfn8.js","_app/immutable/chunks/scheduler.N6VJfDEH.js","_app/immutable/chunks/index.M1-m44HH.js","_app/immutable/chunks/each.6w4Ej4nR.js","_app/immutable/chunks/Header.tS805s8b.js","_app/immutable/chunks/store.YNi3i2_3.js","_app/immutable/chunks/index.VAiw07nq.js"];
export const stylesheets = ["_app/immutable/assets/Footer.bALIHz_q.css","_app/immutable/assets/TabBar.i0OHNBjU.css"];
export const fonts = [];
