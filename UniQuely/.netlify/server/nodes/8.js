import * as server from '../entries/pages/products/all/_page.server.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/products/all/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/products/all/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.NnHwslmD.js","_app/immutable/chunks/scheduler.N6VJfDEH.js","_app/immutable/chunks/index.M1-m44HH.js"];
export const stylesheets = [];
export const fonts = [];
