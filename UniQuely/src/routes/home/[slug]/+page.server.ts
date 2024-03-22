import { error } from '@sveltejs/kit';
import { slugify } from '$lib/utils.js';
/**
 * Load a team based on the provided parameters.
 *
 * @param {Object} options - The options object.
 * @param {Object} options.params - The parameters object.
 * @param {string} options.params.slug - The slug of the team to load.
 * @returns {Object} An object containing the team data.
 * @throws Will throw an error if the team is not found.
 */

import { supabase } from "$lib/supabaseClient";

export async function load({params}) {
  const { data } = await supabase.from("items").select().eq('categoryOne', params.slug);
  return {
    items: data ?? [],
  };
}