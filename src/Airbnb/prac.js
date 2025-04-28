let Array1 = [1,2,3,4,5]

let Array2 = Array1.map(sqr)

console.log(Array2)

function sqr(num){
    return num * num
}

let str1 =["shreyash","mangesh","saina","sana"]

let str2 = str1.map((string) => {
    return string[0].toUpperCase()+ string.slice(1)
})

console.log(str2)

let pokemon = ['bulbasour','charmander','squirtel']

let pokemon2 = pokemon.map((poke) => {
    return "<p>"+poke+"</p>"
})

console.log(pokemon2)