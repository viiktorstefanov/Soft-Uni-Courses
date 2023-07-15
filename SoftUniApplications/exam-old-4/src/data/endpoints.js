import { del, get, post, put } from './api.js';

const endpoints = {
  create: '/data/albums',
  albums: '/data/albums?sortBy=_createdOn%20desc&distinct=name',
  search: '/data/albums?where=name%20LIKE%20%22'
};

export async function createAlbum(data) {
    await post(endpoints.create, {
    name: data.name,
    imgUrl: data.imgUrl,
    price: data.price,
    releaseDate: data.releaseDate,
    artist: data.artist,
    genre: data.genre,
    description: data.description,
    });
};

export async function getAlbums() {
    return await get(endpoints.albums);
};

export async function getAlbumById(id) {
  return await get(endpoints.create + `/${id}`);
};

export async function deleteAlbumById(id) {
  return await del(endpoints.create + `/${id}`);
}

export async function editAlbumById(id, data) {
  return await put(endpoints.create + `/${id}`, {
    name: data.name,
    imgUrl: data.imgUrl,
    price: data.price,
    releaseDate: data.releaseDate,
    artist: data.artist,
    genre: data.genre,
    description: data.description,
  });
}

export async function searchAlbum(query) {
  return await get(endpoints.search + `${query}%22`)
}