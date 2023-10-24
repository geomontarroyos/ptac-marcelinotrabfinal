'use server'
const url = "https://aula-17-10-7jz5qx3er-marisantosteixeira.vercel.app/";

const getUserAuthenticated = async (userLogin) => {
const responsepOfapi = await fetch(url + "/user/authenticated", 
{
    method:"POST",
    headers:{"content-Type": "application/json"},
    body: JSON.stringify(userLogin)
}

);
const userAuth = await responsepOfApi.json();
return userAuth;
}

const getUsers = async () =>{
 const responseOfApi = await fetch(url + "/users", {cache:"no cache"})
 const userAuth = await responseOfApi.json();
 return userAuth;

}
export { getUsers, getUserAuthenticated };