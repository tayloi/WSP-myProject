/* USERS MODEL
 * Server side
 */
const Users = [
    { Name: 'Imani', Password: '2020', Email: 'taylori1@newpaltz.edu', userId: 0, isAdmin: true },
    { Name: 'User1', Password: '1234', Email: 'user1@newpaltz.edu', userId: 1, isAdmin: false }
];

module.exports = {
    Login(email, password) {
        const user = Users.find(x => x.Email == email);
        if(!user) throw Error('User not found');
        if(user.Password != password) throw Error('Wrong Password');

        return user;
    },
    Get(userId) { //Get: (userId) => Users[userId]
        return Users[userId];
    } 
}