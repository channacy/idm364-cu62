

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0._G5uVuJV.js","_app/immutable/chunks/scheduler.N6VJfDEH.js","_app/immutable/chunks/index.M1-m44HH.js"];
export const stylesheets = ["_app/immutable/assets/0.Y___amcb.css"];
export const fonts = [];
