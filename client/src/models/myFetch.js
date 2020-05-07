/* FETCH FUNCTION
 * Client side - models
 */
import { CurrentUser } from "./Users";

 const api_root = "http://localhost:3000"; //centralized constant of which server we are talking to

export default async function myFetch(url, data){ 	
    let response;
    const headers = {};

    if(CurrentUser && CurrentUser.userId != null){ //if there is a current user on client that has an ID
        headers.authorization = "bearer " + CurrentUser.userId //add new header with new property (auth) set with "bearer " + userId
    }

    if(data){
        response = await fetch(api_root + url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.; GET is default
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached; cache is default
            headers: { //create property called headers
                ...headers, //...: merging in all details/properties from header var. into outer object
                'Content-Type': 'application/json' //appending to end of that ^ another property called Content-Type
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
    }else{ //no data --> GET
        response = await fetch(api_root + url, { 
            headers //object with property named headers whose value is variable headers
         });
    }

    if(response.ok){
        console.log({ success: true })
        return await response.json();
    }else{
        console.log({ success: response.statusText })
        throw await response.json(); //trap error
    }
} 