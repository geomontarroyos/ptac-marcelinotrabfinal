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
const userAuth = await responsepOfapi.json();
return userAuth;
}

const getUsers = async () =>{

}
export { getUsers, getUserAuthenticated };