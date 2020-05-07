/* USERS MODEL
 * Client side
 */
import myFetch from "./myFetch";

export let CurrentUser = null;

export async function Login(email, password) {
    //delegating login process to server --> makes it more secure
    const user = await myFetch('/users/login', {email, password}); //send a msg to login, passing same email and password
    return CurrentUser = user;
} 