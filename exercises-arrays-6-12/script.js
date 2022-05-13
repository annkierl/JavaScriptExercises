//7. Write a JavaScript program to sort the items of an array.
let sortArray = (array) => {

    let temp

    for (j = 0; j < array.length - 1; j++) {
        for (i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
            }
        }
    }
    return array
}
console.log(sortArray([2, 5, 1, 4, 7, 3, 0]))