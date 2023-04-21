let map=new Map()
const deepCopy = function (obj) {
    let result
    if ( obj instanceof Array) {
        result = []
    }
    else if (obj instanceof Object) {
        result = {}
    }
    else {
        return obj
    }
    if(map.has(obj)) return map.get(obj)
    map.set(obj,result)
    for (let i in obj) {
        if (typeof obj[i] === 'object'){
            result[i]=deepCopy(obj[i])
        }else{
            result[i]=obj[i]
        }
    }
    return result
}

const person = {
    name: 'zyj',
    age: 20,
    sister: {
        name: 'duoduo',
        age: 13,
        mother: {
            name: 'lili',
            age:45
        }
    }
}
person.person=person
// const newPerson = deepCopy(person)
// newPerson.sister.mother.age = 50
// console.log(newPerson)
// {
//     name: 'zyj',
//     age: 20,
//     sister: { name: 'duoduo', age: 13, mother: { name: 'lili', age: 50 } }
// }
// console.log(person)
// {
//     name: 'zyj',
//     age: 20,
//     sister: { name: 'duoduo', age: 13, mother: { name: 'lili', age: 45 } }
// }
console.log(deepCopy(person));