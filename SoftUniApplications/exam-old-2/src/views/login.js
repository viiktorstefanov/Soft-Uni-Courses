import { html } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../data/auth.js';
import { createSubmitHandler } from '../util.js';

export async function renderLogin(ctx) {
    ctx.render(loginTemplate(createSubmitHandler(onLogin)));
    

    async function onLogin (data) {
      if(!data.email || !data.password) {
        return alert('All fields are required');
      }

        const user = await login(data.email, data.password);
        ctx.page.redirect('/dashboard');
    }
}



const loginTemplate = (handler) => html`
<section id="login">
<div class="form">
  <h2>Login</h2>
  <form @submit=${handler} class="login-form">
    <input type="text" name="email" id="email" placeholder="email" />
    <input
      type="password"
      name="password"
      id="password"
      placeholder="password"
    />
    <button type="submit">login</button>
    <p class="message">
      Not registered? <a href="/register">Create an account</a>
    </p>
  </form>
</div>
</section>
`;