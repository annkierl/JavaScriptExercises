//1. Write a JavaScript function to check whether an `input` is an array or not.
let checkArray = (a) => {
    if (Array.isArray(a)) {
        return console.log("input is array")
    }
    else {
        return console.log("input is not array")
    }
}
checkArray("test")
// 2. Write a JavaScript function to clone an array.

let cloneMyArray = (a) => {
    let clonedArray = [...a]
    return console.log(clonedArray)
}
let array1 = [1, 2, 3, 4]
cloneMyArray(array1)
// 3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
// create new array in this task
let getNFirsElementsOfArray = (array, n) => {
    let modifiedArray = array.splice(0, n);
    return modifiedArray
}
console.log(getNFirsElementsOfArray([1, 2, 3, 4, 5, 6], 3))
// 3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
// modify array in this task\
let getMFirsElementsOfArray = (array, m) => {
    array.slice(0, m);
    return array
}
console.log(getNFirsElementsOfArray([7, 8, 9, 10, 11, 33], 5))

// 4.  Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array. 
let getNLastElementsOfArray = (array, n) => {
    let newArray = array.splice(-n)
    return newArray
}
console.log(getNLastElementsOfArray([1, 3, 4, 5, 6, 7, 9, 20], 3))
// 5. Write a simple JavaScript program to join all elements of the following array into a string. 
let joinArrayelementsToString = (array) => {
    let newArray = array.join("-")
    return newArray
}
console.log(joinArrayelementsToString(["Zuzanna", "Fin", "Mike", "Albert"]))
// 6.  Write a JavaScript program which accept a number as input 
//and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8. 
let checkifNumbers = (array) => {
    return array.every(element => {
        return typeof element === "number"
    })
}
let insertDashesBetweenEvennumbers = (array) => {
    if (!checkifNumbers(array)) {
        return console.log("wrong parameter")
    }
    let j = 0
    let outputArray = [...array]
    for (let i = 0; i < array.length; i++) {
        j++
        if ((array[i] % 2 === 0) && (array[i + 1] % 2 === 0)) {
            outputArray.splice(j, 0, '-');
            j++
        }
    }
    return console.log(outputArray.join(""))
}
insertDashesBetweenEvennumbers([1, 2, 4, 6, 8, 5, 6, 8, 8])