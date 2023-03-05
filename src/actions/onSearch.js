import axios from "axios";

const token = "USH3HYS7SwSNAkHMhbTNviNTcMcjuDUrLC";//Always triple check token is right it seems buggy


export function searchUser(name,realm){
    const options = {
        method: 'GET',
        url: ('https://us.api.blizzard.com/profile/wow/character/#realm/#name?namespace=profile-us&locale=en_US&access_token='+token).replace("#name",name.toLowerCase()).replace("#realm",realm.toLowerCase()),
        // content-type: "application/json;charset=UTF-8"
        responseType: 'json', // default
        responseEncoding: 'utf8', // default
    };
    console.log("START REQUEST");
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
    console.log("END REQUEST");
}
export function test(){
    console.log("test")
}