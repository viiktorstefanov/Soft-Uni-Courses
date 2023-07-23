import { html } from '../../node_modules/lit-html/lit-html.js';

export const layoutTemplate = (user, content) => html`
<div id="wrapper">
    <header>
      <a id="logo" href="/"
        ><img id="logo-img" src="./images/logo.png" alt=""/></a>
      <nav>
        <div>
          <a href="/dashboard">Fun Facts</a>
        </div>
            ${user ? html`  <div class="user">
            <a href="/add">Add Fact</a>
            <a href="/logout">Logout</a>
            </div>` : html`  <div class="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>

        </div>`}
      </nav>
    </header>
    <main>${content}</main>
    <footer>
    <p>@Fun Facts</p>
  </footer>
</div>
`;