import { del, get, post, put } from './api.js';

const endpoints = {
  album: '/data/albums',
  dashboard: '/data/albums?sortBy=_createdOn%20desc',
  likes: '/data/likes',
};

export async function getAlbums() {
  return await get(endpoints.dashboard);
}

export async function getAlbumById(id) {
  return await get(`${endpoints.album}/${id}`);
}

export async function deleteAlbum(id) {
  return await del(`${endpoints.album}/${id}`);
}

export async function editAlbum(album, id) {
  return await put(`${endpoints.album}/${id}`, {
    singer: album.singer,
    album: album.album,
    imageUrl: album.imageUrl,
    release: album.release,
    label: album.label,
    sales: album.sales
  });
}

export async function createAlbum(album) {
  return await post(endpoints.album, {
    singer: album.singer,
    album: album.album,
    imageUrl: album.imageUrl,
    release: album.release,
    label: album.label,
    sales: album.sales
  });
}

export async function likeAlbumById(albumId) {
  return await post(endpoints.likes, {
    albumId,
  });
}

export async function getAlbumLikes(albumId) {
  return await get(
    `${endpoints.likes}?where=albumId%3D%22${albumId}%22&distinct=_ownerId&count`
  );
}

export async function getLikeForUser(albumId, userId) {
  return await get(
    `${endpoints.likes}?where=albumId%3D%22${albumId}%22%20and%20_ownerId%3D%22${userId}%22&count`
  );
}