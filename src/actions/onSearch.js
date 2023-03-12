import axios from "axios";
import { processProfileData } from "./processProfile";

const token = "USH3HYS7SwSNAkHMhbTNviNTcMcjuDUrLC";//Always triple check token is right it seems buggy
const apikey = "RGAPI-979fbc61-67ba-4df5-ad04-4249b9f6fdca"
//    "X-Riot-Token": "RGAPI-979fbc61-67ba-4df5-ad04-4249b9f6fdca"
//act id 3ec8084a-4e45-4d22-d801-f8a63e5a208b
export function searchUser(name,realm){
    const profileData = {};
    const options = {
        method: 'GET',
        url: ('https://us.api.blizzard.com/profile/wow/character/#realm/#name?namespace=profile-us&locale=en_US&access_token='+token).replace("#name",name.toLowerCase()).replace("#realm",realm.toLowerCase()),
        // content-type: "application/json;charset=UTF-8"
        responseType: 'json', // default
        responseEncoding: 'utf8', // default
    };
    console.log("START REQUEST");
    axios.request(options).then(function (response) {
        if(response.status===401){
            console.error("AUTHENTICATION ERROR!!!");

        }
        profileData=response.data;
        processProfileData(profileData);
    }).catch(function (error) {

        console.error("Search Request Error");
    });
}