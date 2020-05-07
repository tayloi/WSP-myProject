/* FETCH FUNCTION
 * Client side - models
 */
export default function myFetch(url){
    return fetch(url, { })
        .then(x=> x.json()); //request object sent back by server
}                 //^reads string and turns it into javascript object 