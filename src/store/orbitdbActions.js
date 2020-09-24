import {START_ORBITDB_INITILIZE, CREATE_ORBITDB_SUCCESS, CREATE_ORBITDB_FAILED} from './actions'

import IPFS from "ipfs";
import OrbitDB from "orbit-db";


// const initilizeOrbitDbAction = () => {
//     return function (dispatch) {
//         dispatch(START_ORBITDB_INITILIZE());

//         const initIPFSInstance = async () => {
//             const ipfs = await IPFS.create();
//             return ipfs;
//         };

//         const initOrbitdb = initIPFSInstance.then(async (ipfs) => {
//             console.log("IPFS node is", ipfs);
//             const orbitdb = await OrbitDB.createInstance(ipfs);
//             dispatch(CREATE_ORBITDB_SUCCESS(orbitdb));
//             return orbitdb;
//         });

//         initOrbitdb();
//     }
// }
const initilizeOrbitDbAction = "Asdas";
export default initilizeOrbitDbAction;