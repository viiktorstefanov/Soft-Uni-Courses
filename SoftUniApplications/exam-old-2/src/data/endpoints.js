import { del, get, post, put } from './api.js';

const endpoints = {
  offer: '/data/offers',
  offers: '/data/offers?sortBy=_createdOn%20desc',
  apply: '/data/applications',
  applyCount: '/data/applications?where=offerId%3D%22',
  userApply: '/data/applications?where=offerId%3D%22'
};

export async function getOffers() {
  return await get(endpoints.offers);
}

export async function addOffer(offer) {
  return await post(endpoints.offer, {
    title: offer.title,
    imageUrl: offer.imageUrl,
    category: offer.category,
    description: offer.description,
    requirements: offer.requirements,
    salary: offer.salary,
  });
}

export async function getOfferById(id) {
  return await get(`${endpoints.offer}/${id}`);
}

export async function deleteOffer(id) {
  return await del(`${endpoints.offer}/${id}`);
}

export async function editOffer(offer, id) {
  return await put(`${endpoints.offer}/${id}`, {
    title: offer.title,
    imageUrl: offer.imageUrl,
    category: offer.category,
    description: offer.description,
    requirements: offer.requirements,
    salary: offer.salary
  });
}

export async function applyOffer(offerId) {
  return await post(`${endpoints.apply}`, {
    offerId
  })
}

export async function getOfferApplicationsCount(id) {
  return await get(`${endpoints.applyCount}${id}%22&distinct=_ownerId&count`);
}

export async function getUserApplicationCheck(id, userId) {
  return await get(`${endpoints.userApply}${id}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}

