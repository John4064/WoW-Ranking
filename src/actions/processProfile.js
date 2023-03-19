import axios from "axios";
//when we get a map of urls, add ttoken to end and excute call
const token = "USipfZk8t7ubrLzb5x8mNRtUS7nmpOOvi0";//Always triple check token is right it seems buggy(do sample request in site)
const addon="&access_token="+token;


const testData ={
    "_links": {
        "self": {
            "href": "https://us.api.blizzard.com/profile/wow/character/sargeras/slimwind/pvp-bracket/rbg?namespace=profile-us"
        }
    },
    "character": {
        "key": {
            "href": "https://us.api.blizzard.com/profile/wow/character/sargeras/slimwind?namespace=profile-us"
        },
        "name": "Slimwind",
        "id": 194226160,
        "realm": {
            "key": {
                "href": "https://us.api.blizzard.com/data/wow/realm/76?namespace=dynamic-us"
            },
            "name": "Sargeras",
            "id": 76,
            "slug": "sargeras"
        }
    },
    "faction": {
        "type": "ALLIANCE",
        "name": "Alliance"
    },
    "bracket": {
        "id": 3,
        "type": "BATTLEGROUNDS"
    },
    "rating": 1490,
    "season": {
        "key": {
            "href": "https://us.api.blizzard.com/data/wow/pvp-season/34?namespace=dynamic-us"
        },
        "id": 34
    },
    "tier": {
        "key": {
            "href": "https://us.api.blizzard.com/data/wow/pvp-tier/18?namespace=static-10.0.5_47621-us"
        },
        "id": 18
    },
    "season_match_statistics": {
        "played": 33,
        "won": 15,
        "lost": 18
    },
    "weekly_match_statistics": {
        "played": 0,
        "won": 0,
        "lost": 0
    }
};

export function processProfileData(profileData){
    profileData=testData;//Delete this line once api calls go through!
    axios.get(profileData.tier.key.href+addon).then(function (response){

        console.log(response);
        console.log("BLEP")


    }).catch(function (error) {
        console.error(error)
        console.error("Search Request Error");
    });
    console.log(profileData)
    console.log(profileData["season_match_statistics"]);


    //THE MAGIC
}