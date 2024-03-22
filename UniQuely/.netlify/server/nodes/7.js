import * as server from '../entries/pages/products/_slug_/_page.server.ts.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/products/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/products/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/7.TcIUQGhz.js","_app/immutable/chunks/scheduler.N6VJfDEH.js","_app/immutable/chunks/index.M1-m44HH.js"];
export const stylesheets = ["_app/immutable/assets/7.1wz_XRot.css"];
export const fonts = [];
