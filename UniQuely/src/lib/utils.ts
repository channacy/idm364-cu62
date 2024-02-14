// src/lib/utils.js
/**
 * A function that converts a string into a slug.
 * @param {string} str - String being converted to slug
 * @returns {string}
 */
 export function slugify(str:String) {
    return str
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/--+/g, '-');
  }