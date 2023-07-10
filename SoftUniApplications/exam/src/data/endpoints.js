import { del, get, post, put } from './api.js';

const endpoints = {
  fruit: '/data/fruits',
  fruits: '/data/fruits?sortBy=_createdOn%20desc',
  data: '/data/fruits',
  search: '/data/fruits?where=name%20LIKE%20%22'
};

export async function getFruits() {
  return await get(endpoints.fruits);
}

export async function addFruit(fruit) {
  return await post(endpoints.fruit, {
    name: fruit.name,
    imageUrl: fruit.imageUrl,
    description: fruit.description,
    nutrition: fruit.nutrition,
  });
}

export async function getFruitById(id) {
  return await get(`${endpoints.fruit}/${id}`);
}

export async function deleteFruit(id) {
  return await del(`${endpoints.data}/${id}`);
}

export async function editFruit(fruit, id) {
  return await put(`${endpoints.data}/${id}`, {
    name: fruit.name,
    imageUrl: fruit.imageUrl,
    description: fruit.description,
    nutrition: fruit.nutrition
  });
}

export async function searchFruit(query) {
  return await get(`${endpoints.search}${query}%22`);
}

