/* USERS MODEL
 * Client side
 */
const Users = [
    { Name: 'Imani', Password: '2020', Email: 'taylori1@newpaltz.edu', isAdmin: true },
    { Name: 'User1', Password: '1234', Email: 'user1@newpaltz.edu', isAdmin: false }
];

export let CurrentUser = null;

export function Login(email, password) {

    const user = Users.find(x => x.Email == email);
    if(!user) throw Error('User not found');
    if(user.Password != password) throw Error('Wrong Password');

    return CurrentUser = user;
} 