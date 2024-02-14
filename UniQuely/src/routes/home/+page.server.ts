import { slugify } from '$lib/utils';
import { products } from '$lib/data';

/**
 * The load function iterates over the `product` array and returns an object.
 * Each object in the array 'mascots' has 'name' and 'mascot' properties.
 * The value for the 'name' and 'mascot' keys are derived from the corresponding properties of each 'team' object.
 *
 * @module {Function} load
 * @returns {{products: {ID: string, name: string, sellerName: string, condition: string, categoryOne: string, categoryTwo: string, price: number, imageUrl: string, slug: string}[]}} 
 */
export function load() {
  return {
    products: products.map((product) => ({
      ID: product.ID,
      name: product.name,
      imageUrl: product.imageUrl,
      sellerName: product.sellerName,
      condition: product.condition,
      categoryOne: product.categoryOne,
      categoryTwo: product.categoryTwo,
      price: product.price,
      slug: slugify(product.ID)
    }))
  };
}

