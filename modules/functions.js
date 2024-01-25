import {marvels} from "./marvels.js";

console.log(marvels);

function getMarvelsCollect() {
    return marvels.map((item) => {
        return {id: item.id, name: item.name,}
    })
}

console.log(getMarvelsCollect())
export default {
    getMarvelsCollect
}