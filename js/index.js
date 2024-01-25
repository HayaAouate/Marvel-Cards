import Functions from "../modules/functions";
console.log("Loading")

const marvels = Functions.getMarvelsCollect()
console.log(marvels)

displayMarvels(marvels)

function displayMarvels(marvels) {
    const targetEl = document.querySelector("#marvels-container")
    marvels.forEach((marvels) => {
        createMarvelsElements(marvels, targetEl)
    })


}
function createMarvelsElements(data,targetEl) {
    const marvelCardTemplate = document.querySelector("#marvel-card")
    let clone = marvelCardTemplate.content.cloneNode(true)
    clone.querySelector("#marvel-name").textContent = data.name
    clone.querySelector("#marvel-img").src = data.image
    clone.querySelector("#marvel-link").href = `./view.html?slug=${data.slug}`
    targetEl.append(clone)

}