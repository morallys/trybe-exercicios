export async function getCategories() {
  // Implemente aqui
  const categories = await fetch('https://api.mercadolibre.com/sites/MLB/categories').then((result) => result.json());

  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let queryCategories = '';

  queryCategories = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`).then((result) => result.json());

  return queryCategories;
}

export async function getProductId(productId) {
  const getProduct = await fetch(`https://api.mercadolibre.com/items/${productId}`).then((result) => result.json());

  return getProduct;
}
