import { logout } from "../data/auth.js";

export async function logoutAction(ctx) {
    await logout();
    ctx.page.redirect('/');
}