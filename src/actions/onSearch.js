import axios from "axios";

const token = "RoPlb1Y8T8L1WqNp8bnapfb1uccMyIae";


export function searchUser(name,realm){
    const options = {
        method: 'GET',
        url: ('https://us.api.blizzard.com/profile/wow/character/#realm/#name?namespace=profile-us&locale=en_US&access_token='+token).replace("#name",name).replace("#realm",realm),
        // accept: '*/*', 
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