import { html } from '../../node_modules/lit-html/lit-html.js';

export async function renderHome(ctx) {
    ctx.render(homeTemplate());
}

const homeTemplate = () => html`
<section id="welcomePage">
<div id="welcome-message">
    <h1>Welcome to</h1>
    <h1>My Music Application!</h1>
</div>
<div class="music-img">
    <img src="./images/musicIcons.webp">
</div>
</section>
`;