/* FETCH FUNCTION
 * Client side - models
 */
const api_root = "http://localhost:3000"; //centralized constant of which server we are talking to

export default async function myFetch(url, data){ 	
    let response;
    //const headers = { authorization: "bearer " + User.UserId  }

    if(data){
        response = await fetch(api_root + url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.; GET is default
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached; cache is default
            headers: {
                //...headers,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
    }else{ //no data --> GET
        response = await fetch(api_root + url, { 
            //headers
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