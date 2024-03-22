

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.qvC8rNDP.js","_app/immutable/chunks/scheduler.N6VJfDEH.js","_app/immutable/chunks/index.M1-m44HH.js"];
export const stylesheets = ["_app/immutable/assets/4.uGtreflW.css","_app/immutable/assets/Footer.bALIHz_q.css"];
export const fonts = [];
