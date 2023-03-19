import axios from "axios";
import { processProfileData } from "./processProfile";
const token = "USipfZk8t7ubrLzb5x8mNRtUS7nmpOOvi0";//Always triple check token is right it seems buggy(do sample request in site)
export function searchUser(name,realm){
    let profileData = {};
    const options = {
        method: 'GET',
        url: ('https://us.api.blizzard.com/profile/wow/character/#realm/#name?namespace=profile-us&locale=en_US&access_token='+token).replace("#name",name.toLowerCase()).replace("#realm",realm.toLowerCase()),
        // content-type: "application/json;charset=UTF-8"
        responseType: 'json', // default
        responseEncoding: 'utf8', // default
    };
    console.log("START REQUEST");
    console.log(name,realm);
    axios.request(options).then(function (response) {
        
        profileData=response.data;
        processProfileData(profileData);
    }).catch(function (error) {
        console.error(error)
        console.error("Search Request Error");
    });
}