const students = [
    {
        id: 2,
        pesel: '123456789',
        name: "Jacek Kowalski",
        notes: [5, 3, 4, 2, 5, 5]
    },
    {
        id: 4,
        pesel: '234567890',
        name: "Ewa Nowak",
        notes: [2, 3, 3, 3, 2, 5]
    },
    {
        id: 3,
        pesel: '345678901',
        name: "Zygmunt Lewandowski",
        notes: [2, 2, 4, 4, 3, 3]
    },
    {
        id: 5,
        pesel: '234002190',
        name: "Adam Klejda",
        notes: [2, 3, 3, 3, 2, 5]
    },
    {
        id: 1,
        pesel: '345609213',
        name: "Zofia Zebrzyg",
        notes: [2, 1, 4, 5, 6, 3]
    }
];
// -----------------Exercise1 First Way that works well, but withaout use Array prototype------------------

// let getMaxNote = (studentArray, studentPesel, displayInfo) => {
//     for (i = 0; i < studentArray.length; i++) {
//         if (studentArray[i].pesel === studentPesel) {
//             let maxNote = studentArray[i].notes[0]
//             for (j = 1; j < studentArray[i].notes.length; j++) {
//                 if (studentArray[i].notes[j] > maxNote) {

//                     maxNote = studentArray[i].notes[j]
//                 }
//             }
//             displayInfo(studentArray[i].name, maxNote)
//         }
//     }
// }

// getMaxNote(students, "345609213", (studentName, maxNote) => {
//     console.log(`${studentName} max ${maxNote}`)
// })

// let getMinNote = (studentArray, studentPesel, displayInfo) => {
//     for (i = 0; i < studentArray.length; i++) {
//         if (studentArray[i].pesel === studentPesel) {
//             let minNote = studentArray[i].notes[0]
//             for (j = 0; j < studentArray[i].notes.length; j++) {

//                 if (studentArray[i].notes[j] < minNote) {

//                     minNote = studentArray[i].notes[j]
//                 }

//             }
//             displayInfo(studentArray[i].name, minNote)
//         }
//     }

// }
// getMinNote(students, "345609213", (studentName, minNote) => {
//     console.log(`${studentName} min ${minNote}`)

// })


//Exercise1 --------------------------------with use Array prototype ------------------------------------

let getMaxNote = (studentArray, studentPesel, displayInfo) => {
    let findStudentByPesel = studentArray.filter(item => {
        return item.pesel === studentPesel
    })
    let sortNotes = findStudentByPesel[0].notes.sort((a, b) => a - b)
    let sortNotesTheHighestValueFirst = sortNotes.reverse()
    displayInfo(findStudentByPesel[0].name, sortNotesTheHighestValueFirst[0])
}
//Checking if it works properly
getMaxNote(students, "345609213", (studentName, maxNote) => {
    console.log(`${studentName} max ${maxNote}`)
})





let getMinNote = (studentArray, studentPesel, displayInfo) => {
    let findStudentByPesel = studentArray.filter(item => {
        return item.pesel === studentPesel
    })
    let sortNotes = findStudentByPesel[0].notes.sort((a, b) => a - b)
    displayInfo(findStudentByPesel[0].name, sortNotes[0])

}
//Checking if it works properly
getMinNote(students, "345609213", (studentName, minNote) => {
    console.log(`${studentName} min ${minNote}`)

})




//Exercise2
let displayStudents = (studentArray) => {
    let sortStudentByName = (aName, bName) => {
        aName = aName.name.split(" ")[1].toLowerCase();
        bName = bName.name.split(" ")[1].toLowerCase();

        if (aName > bName) {

            return 1;
        }

        if (aName < bName) {

            return -1;
        }

        return 0;

    };
    let sortedStudentArray = studentArray.sort(sortStudentByName)
    //console.log(sortedStudentArray)
    sortedStudentArray.forEach((item) => {
        console.log(`Student: ${item.name}, Pesel: ${item.pesel}`)
    })
}


displayStudents(students)
