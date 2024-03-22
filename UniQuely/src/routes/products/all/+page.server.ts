// src/routes/[slug]/+page.server.js
import { error } from '@sveltejs/kit';
import { slugify } from '$lib/utils.js';
import { products } from '$lib/data';

/**
 * Load a team based on the provided parameters.
 *
 * @param {Object} options - The options object.
 * @param {Object} options.params - The parameters object.
 * @param {string} options.params.slug - The slug of the team to load.
 * @returns {Object} An object containing the team data.
 * @throws Will throw an error if the team is not found.
 */
// export function load({ params }) {
//   const product = products.find((product) => slugify(product.ID) === params.slug);

//   if (!product) throw error(404);

//   return {
//     product
//   };
// }

import { supabase } from "$lib/supabaseClient";

export async function load({params}) {
  const { data } = await supabase.from("items").select();
  console.log(data)
  return {
    item: data ?? [],
  };
}