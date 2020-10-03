import { useSelector, useDispatch } from "react-redux";

function getMusicFormHash(musicDb, musicHash) {
    return musicDb.query((music) => music.musicHash === musicHash);
}

export const addMusicToOrbit = async (musicDb, musicDetails) => {
  try {
    await musicDb.load().finally(
     async() => {
        const existingMusic = getMusicFormHash(musicDb,musicDetails.musicHash);
        if (existingMusic === []) {
          //only updates the user's public key
          console.log("Song Already Exists In MusicDb!");
        }
        console.log("Music Details", musicDetails);
        const cid = await musicDb.put(musicDetails);
        console.log("Add Music to Db", cid);
        return cid;
      }
    );
  }
  catch (error) {
    console.log("Error on Adding to Db", error);
  }
  
};

export const removeMusicFromOrbit = async (musicDb, musicHash) => {
  const cid = await musicDb.del(musicHash);
  return cid;
};

export const updateMusicInOrbit = async (musicDb, musicDetails) => {};