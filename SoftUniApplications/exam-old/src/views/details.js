import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import { deleteAlbum, getAlbumById, getAlbumLikes, getLikeForUser, likeAlbumById } from '../data/endpoints.js';
import { getUser } from '../util.js';


export async function renderDetails(ctx) {
    const id = ctx.params.id;
    const album = await getAlbumById(id);
    const user = getUser();
    const likes = await getAlbumLikes(id);
   
    async function deleteHandler(event) {
        event.preventDefault();
        if(confirm('Are you sure you want to delete this album?')) {
          await deleteAlbum(id);
          ctx.page.redirect('/dashboard');
        }
    }

    async function likeHandler(e) {
    e.target.style.display = 'none';
      await likeAlbumById(id);
      const userLike = await getLikeForUser(id, user._id);
      ctx.render(detailsTemplate(user, album, deleteHandler, likeHandler, likes + 1, userLike));
    }

    ctx.render(detailsTemplate(user, album, deleteHandler, likeHandler, likes));
  }

const detailsTemplate = (user, album, deleteHandler, likeHandler, likes, userLike) => html`
<section id="details">
<div id="details-wrapper">
  <p id="details-title">Album Details</p>
  <div id="img-wrapper">
    <img src=${album.imageUrl} alt="example1" />
  </div>
  <div id="info-wrapper">
    <p><strong>Band:</strong><span id="details-singer">${album.singer}</span></p>
    <p>
      <strong>Album name:</strong><span id="details-album">${album.album}</span>
    </p>
    <p><strong>Release date:</strong><span id="details-release">${album.release}</span></p>
    <p><strong>Label:</strong><span id="details-label">${album.label}</span></p>
    <p><strong>Sales:</strong><span id="details-sales">${album.sales}</span></p>
  </div>
  <div id="likes">Likes: <span id="likes-count">${likes}</span></div>
  <div id="action-buttons">
  ${user && user._id === album._ownerId ? 
    html`<a href="/edit/${album._id}" id="edit-btn">Edit</a>
    <a @click=${deleteHandler} href="javascript:void(0)" id="delete-btn">Delete</a>` 
    : html`${user && !userLike ? html`<a @click=${likeHandler} href="javascript:void(0)" id="like-btn">Like</a>` : nothing }`}
</div>
</div>
</section>
`;
