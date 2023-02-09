//const axios = require("axios");
//https://us.api.blizzard.com/profile/wow/character/sargeras/slimwind/pvp-summary?namespace=profile-us&locale=en_US&access_token=US58It8sI8fpUrRGCSXPaV51piSMrXlvTI//Vars are profile, access token,
//Realm, char, access token
//consts are pvp-summary(depending on what call), namespace

import axios, * as others from 'axios';
const options = {
    method: 'GET',
    url: 'https://mboum-finance.p.rapidapi.com/ne/news',
    headers: {
        'X-RapidAPI-Key': '2c32c52680mshfce85c9bcc59db4p1a6f6cjsn097da7ccb84f',
        'X-RapidAPI-Host': 'mboum-finance.p.rapidapi.com'
    }
};

export async function doCall(){
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}
//      <button onClick={doCall}>  Activate Lasers
//</button>