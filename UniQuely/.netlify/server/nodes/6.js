import * as server from '../entries/pages/home/_page.server.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/home/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/home/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.BhNc2NyC.js","_app/immutable/chunks/scheduler.N6VJfDEH.js","_app/immutable/chunks/index.M1-m44HH.js","_app/immutable/chunks/each.6w4Ej4nR.js","_app/immutable/chunks/entry.QpfEUyPp.js","_app/immutable/chunks/index.VAiw07nq.js","_app/immutable/chunks/store.YNi3i2_3.js"];
export const stylesheets = ["_app/immutable/assets/6._jDRjf7a.css"];
export const fonts = [];
