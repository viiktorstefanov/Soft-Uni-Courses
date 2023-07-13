import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../data/auth.js';
import { createSubmitHandler } from '../util.js';


export async function renderRegister(ctx) {
    ctx.render(loginTemplate(createSubmitHandler(onRegister)));

    async function onRegister(data) {
        if(!data.email || !data.password || !data['re-password']) {
            return alert('All fields are required');
        }
        if(data.password !== data['re-password']) {
            return alert('Passwords do not match');
        }
       const newUser = await register(data.email, data.password);
       ctx.page.redirect('/dashboard');
    }
}

const loginTemplate = (handler) => html`
<section id="register">
<div class="form">
  <h2>Register</h2>
  <form @submit=${handler} class="login-form">
    <input
      type="text"
      name="email"
      id="register-email"
      placeholder="email"
    />
    <input
      type="password"
      name="password"
      id="register-password"
      placeholder="password"
    />
    <input
      type="password"
      name="re-password"
      id="repeat-password"
      placeholder="repeat password"
    />
    <button type="submit">register</button>
    <p class="message">Already registered? <a href="/login">Login</a></p>
  </form>
</div>
</section>
`;