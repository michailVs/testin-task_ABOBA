import {encoded, translations} from './data.js'

console.log("Let's rock")
console.log(encoded, translations)


function decoded(arr, dict) {
    let tempArr = []
    let unicalId = {}
    arr.forEach(obj => {
        Object.keys(obj).map(field => {
            if (field === 'groupId' || field === 'service' || field === 'formatSize' || field === 'ca') return
            if (obj[field] != null) {
                if (unicalId[+obj[field]]) {
                    unicalId[+obj[field]] += 1
                } else {
                    unicalId[+obj[field]] = 1
                }
                if (dict[+obj[field]] != undefined) {
                    return obj[field] = dict[+obj[field]]
                } else {
                    return obj[field] = obj[field]
                }
            }
            return field
        })
        tempArr.push(obj)
    })
    let unical = {}
    Object.keys(unicalId).forEach(id => unicalId[id] > 1 ? 0 : unical[dict[+id]] = unicalId[id])
    return {decode: tempArr, unicalId: unical}
}
console.log(decoded(encoded, translations))
// console.log(decoded)
