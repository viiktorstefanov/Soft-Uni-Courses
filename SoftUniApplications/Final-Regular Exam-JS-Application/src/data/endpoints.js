import { del, get, post, put } from './api.js';

const endpoints = {
  add: '/data/facts',
  facts: '/data/facts?sortBy=_createdOn%20desc',
  like: '/data/likes',
  countLikes: '/data/likes?where=factId%3D%22',
  userLikes: '/data/likes?where=factId%3D%22',
};

export async function createFact(data) {
    await post(endpoints.add, {
      category: data.category,
      imageUrl: data['image-url'], 
      description: data.description, 
      moreInfo: data['additional-info'],
    });
};

export async function getFacts() {
    return await get(endpoints.facts);
};

export async function getFactById(id) {
  return await get(endpoints.add + `/${id}`);
};

export async function deleteFactById(id) {
  return await del(endpoints.add + `/${id}`);
}

export async function editFactById(id, data) {
  return await put(endpoints.add + `/${id}`, {
    category: data.category,
    imageUrl: data['image-url'], 
    description: data.description, 
    moreInfo: data['additional-info'],
  });
}

export async function likeFact(factId) {
  return await post(endpoints.like, {
    factId,
  })
};

export async function getLikesCount(factId) {
  return await get(endpoints.countLikes + `${factId}%22&distinct=_ownerId&count`)
};

export async function getUserLikes(factId, userId) {
  return await get(endpoints.userLikes + `${factId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
}
