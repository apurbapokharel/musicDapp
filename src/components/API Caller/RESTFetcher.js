import axios from 'axios';

const url  = "http://localhost:3000"

export const postSongs = (data) => {
    console.log("postSongs", data);
    let changeableUrl = `${url}/uploadSong`;
return new Promise(async (resolve, reject) => {
        const res = await axios.post(changeableUrl, data);
        console.log((res));
        if(res.data){
            resolve(true);
        }else{
            reject(false);
        }
});
};

export const postSongHash = (data) => {
    console.log("postSongHash", data);
    let changeableUrl = `${url}/uploadSongHash`;
    return new Promise(async (resolve, reject) => {
        const res = await axios.post(changeableUrl, data);
        console.log((res));
        if(res.data){
            resolve(true);
        }else{
            reject(false);
        }
            

});
}

export const getSongKey = async (data) => {
    console.log("getSongKey", data);
    var changeableUrl = `${url}/getSongKey`;

    return new Promise(async (resolve, reject) => {
        const res = await axios.get(changeableUrl);
        console.log(res);
        if(res){
            resolve({count: res})
        }else{
            reject('Cannot get song count');
        }
        
    });
};

export const compareSongHash = async (data) => {
    console.log("compareSongHash", data);
    var changeableUrl = `${url}/compareSongHash`;

    return new Promise(async (resolve, reject) => {
        const res = await axios.post(changeableUrl, data);
        console.log(res); 
        if(res.data == false){
           resolve(false)
            
        }else{
            reject(true);
        }

    });
};

export const getSongCount = async () => {
    var changeableUrl = `${url}/getSongsCount`;

    return new Promise(async (resolve, reject) => {
        const res = await axios.get(changeableUrl);
        console.log(res); 
        if(res.data){
            resolve(res.data)
            
        }else{
            reject(false);
        }
        
    });
};

export const getMusicIdentifiers = async () => {
    var changeableUrl = `${url}/getMusicIdentifiers`;

    return new Promise(async (resolve, reject) => {
        const res = await axios.get(changeableUrl);
        // console.log(res); 
        if(res.data){
            resolve(res.data)
            
        }else{
            reject(false);
        }
        
    });
};