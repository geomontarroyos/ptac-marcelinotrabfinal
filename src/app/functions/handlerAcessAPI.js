'use server'
const url = "https://aula-17-10-eight.vercel.app";

const getUserAuthenticated = async (userLogin) => {
    console.log(userLogin)
const responsepOfApi = await fetch(url + "/user/authenticated", 
{
    method:"POST",
    headers:{"content-Type": "application/json"},
    body: JSON.stringify(userLogin)
});

const userAuth = await responsepOfApi.json();
console.log(userAuth)
return userAuth;
}

const getUsers = async () =>{
    try {
        const responseOfApi = await fetch(url + "/users", {cache:"no-cache"})
        const userAuth = await responseOfApi.json();
        console.log(userAuth)
        return userAuth;
    } catch (error) {
        console.log(error);
        return "Erro ao listar usuários";
    }
}

const postUser = async (user) => {
try{
    const responsepOfApi = await fetch(url + "/user", 
    {
        method:"POST",
        headers:{"content-Type": "application/json"},
        body: JSON.stringify(user)
    });

const userSave = await responsepOfApi.json();
return userSave;
}catch(error){
    console.error(`Error: ${error}`);
    return null;
}
}

export { getUsers, getUserAuthenticated, postUser  };