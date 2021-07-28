const VOWELS = ["a", "i", "o", "e", "u"]
function translatePigLatin(str) {
    let newStr = "";
    // console.log(str[0])
    if (VOWELS.includes(str[0])) {
        return str + "way"
    }
    else {
        for (let l of str) {
            if (VOWELS.includes(l) !== true) {
                newStr += l
            }
            else {
                let start = str.indexOf(l)
                return str.slice(start,) + newStr + "ay"
            }

        }
    }
    return str + "ay"
}

let result = translatePigLatin("rhythm");
console.log(result)