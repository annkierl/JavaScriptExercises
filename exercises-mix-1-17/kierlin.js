const people = [
    {
        id: 1,
        first_name: 'Kaylil',
        last_name: 'Hovey',
        email: 'khovey0@gizmodo.com',
        gender: 'Female',
        ip_address: '128.158.239.223',
        title: 'Rev',
        job_title: 'Recruiting Manager',
        race: 'Vietnamese',
        company: 'Browseblab',
        age: 33
    },
    {
        id: 2,
        first_name: 'Cesare',
        last_name: 'Caroline',
        email: 'ccaroline1@tmall.com',
        gender: 'Male',
        ip_address: '7.78.224.248',
        title: 'Rev',
        job_title: 'Computer Systems Analyst II',
        race: 'Black or African American',
        company: 'Wordtune',
        age: 50
    },
    {
        id: 3,
        first_name: 'Xaviera',
        last_name: 'Danilchenko',
        email: 'xdanilchenko2@so-net.ne.jp',
        gender: 'Female',
        ip_address: '161.223.97.94',
        title: 'Mr',
        job_title: 'Statistician IV',
        race: 'Asian',
        company: 'Rhynyx',
        age: 55
    },
    {
        id: 4,
        first_name: 'Shandy',
        last_name: 'Sanford',
        email: 'ssanford3@uiuc.edu',
        gender: 'Female',
        ip_address: '40.218.230.208',
        title: 'Honorable',
        job_title: 'Data Coordiator',
        race: 'Eskimo',
        company: 'Topdrive',
        age: 76
    },
    {
        id: 5,
        first_name: 'Muire',
        last_name: 'Pothecary',
        email: 'mpothecary4@mit.edu',
        gender: 'Female',
        ip_address: '82.151.63.26',
        title: 'Honorable',
        job_title: 'Executive Secretary',
        race: 'Chickasaw',
        company: 'Realbridge',
        age: 15
    },
    {
        id: 6,
        first_name: 'Mano',
        last_name: 'Gwatkins',
        email: 'mgwatkins5@auda.org.au',
        gender: 'Male',
        ip_address: '134.244.218.162',
        title: 'Ms',
        job_title: 'Automation Special',
        age: 23
    },
    {
        id: 7,
        first_name: 'Frederica',
        last_name: 'Shackleton',
        email: 'fshackleton6@examiner.com',
        gender: 'Female',
        ip_address: '191.141.61.25',
        title: 'Honorable',
        job_title: 'Help Desk Operator',
        race: 'Yuman',
        company: 'Yoveo',
        age: 89
    },
    {
        id: 8,
        first_name: 'Garvey',
        last_name: 'Islep',
        email: 'gislep7@nps.gov',
        gender: 'Male',
        ip_address: '101.45.75.228',
        title: 'Mr',
        job_title: 'Internal Auditor',
        race: 'Cambodian',
        company: 'Livefish',
        age: 76
    },
    {
        id: 9,
        first_name: 'Aristotle',
        last_name: 'Gozard',
        email: 'agozard8@exblog.jp',
        gender: 'Male',
        ip_address: '87.43.196.133',
        title: 'Rev',
        job_title: 'Software Test Engineer IV',
        race: 'Chippewa',
        company: 'Feedspan',
        age: 34
    },
    {
        id: 10,
        first_name: 'Bryon',
        last_name: 'Boulder',
        email: 'bboulder9@parallels.com',
        gender: 'Male',
        ip_address: '251.50.80.89',
        title: 'Honorable',
        job_title: 'Senior Editor',
        race: 'Argentinian',
        company: 'Kazu',
        age: 25
    }
];
/*Zad1  Stwórz funkcję, która zwróci jedynie osoby z podaną rasą w argumencie.
    Input: showOnlyUsersWithRace('Cambodian')
    Output: '5.1: [{id: 8, first_name: "Garvey", last_name: "Islep", email: "gislep7@nps.gov", gender: "Male", …}]'
    Input: showOnlyUsersWithRace(1)
    Output: '5.2: taka rasa nie istnieje'
    Input: showOnlyUsersWithRace('Polish')
    Output: '5.3: []'*/
let searchForRace = people.filter(item => {
    return typeof item.race === "string"
})
console.log(searchForRace);
/*Zad2
Wyświetl każdego z userów w konwencji: title first_name last_name work as job_title in company.
    Output:
    Rev Kaylil Hovey work as Recruiting Manager in Browseblab
    Rev Cesare Caroline work as Computer Systems Analyst II in Wordtune
    Mr Xaviera Danilchenko work as Statistician IV in Rhynyx
    Honorable Shandy Sanford work as Data Coordiator in Topdrive
    Honorable Muire Pothecary work as Executive Secretary in Realbridge
    Ms Mano Gwatkins work as Automation Specialist IV in InnoZ
    Honorable Frederica Shackleton work as Help Desk Operator in Yoveo
    Mr Garvey Islep work as Internal Auditor in Livefish
    Rev Aristotle Gozard work as Software Test Engineer IV in Feedspan
    Honorable Bryon Boulder work as Senior Editor in Kazu*/
let showText = (a) => {
    for (let i = 0; i < a.length; i++) {
        console.log(`${a[i].title} ${a[i].first_name} ${a[i].last_name} work as ${a[i].job_title} in ${a[i].company}`)
    }
}
showText(people);
/*Zad3  Ogranicz zawartość kolekcji do kluczy id, first_name, last_name i dodaj nowy klucz full_name składający się z first_name i last_name.
    Output: [
        {id:1, first_name: "Kaylil", last_name: "Kaylil", full_name: "Kaylil Hovey"}
        {id:2 ,first_name: "Cesare", last_name: "Cesare", full_name: "Cesare Caroline"}
        {id:3 ,first_name: "Xaviera", last_name: "Xaviera", full_name: "Xaviera Danilchenko"}
        {id:4 ,first_name: "Shandy", last_name: "Shandy", full_name: "Shandy Sanford"}
        {id:5 ,first_name: "Muire", last_name: "Muire", full_name: "Muire Pothecary"}
        {id:6 ,first_name: "Mano", last_name: "Mano", full_name: "Mano Gwatkins"}
        {id:7 ,first_name: "Frederica", last_name: "Frederica", full_name: "Frederica Shackleton"}
        {id:8 ,first_name: "Garvey", last_name: "Garvey", full_name: "Garvey Islep"}
        {id:9 ,first_name: "Aristotle", last_name: "Aristotle", full_name: "Aristotle Gozard"}
        {id:10 ,first_name: "Bryon", last_name: "Bryon", full_name: "Bryon Boulder"}
    ]*/
let newObjectPeople = people.map((item => {
    return {
        id: item.id,
        first_name: item.first_name,
        last_name: item.last_name,
        full_name: item.first_name + item.last_name
    }
}))
console.log(newObjectPeople)
/*Zad4 Wyświetl jedynie osoby, które mają co najmniej 30 lat i są kobietami w konwencji 'imię ma X lat' i na koniec wyświetl sumę ich lat.
    Output:
    Kaylil ma 33 lat
    Xaviera ma 55 lat
    Shandy ma 76 lat
    Frederica ma 89 lat
    Razem mają: 253 lat*/
let womansOver30 = people.filter(item => {
    return (item.gender === "Female") && (item.age > 30)
})

let showTextAboutWoman = (a) => {
    let tempVariableforAge = 0
    for (let i = 0; i < a.length; i++) {
        console.log(`${a[i].first_name} ma ${a[i].age}`)
        tempVariableforAge = tempVariableforAge + a[i].age
    }
    console.log(`Razem mają ${tempVariableforAge} lat`)
}
showTextAboutWoman(womansOver30);
/*Zad5 Dodaj do kolekcji dodatkowe klucze:
    height: wiek + 100
    weight: wiek + 10
    bmi: weight / (height/100) ^ 2
    Następnie zwróc tablie imion tych osób, które mają BMI w zakresie 18,5–24,99.
    Output: ["Kaylil", "Muire", "Aristotle", "Mano", "Bryon"]
*/
detaliedPeople = people.map((item => {
    return {
        first_name: item.first_name,
        last_name: item.last_name,
        email: item.email,
        gender: item.gender,
        ip_address: item.ip_address,
        title: item.title,
        job_title: item.job_title,
        race: item.race,
        company: item.company,
        age: item.age,
        height: item.age + 100,
        weight: item.age + 10,
        bmi: item.age + 10 / Math.pow((item.age + 100) / 100, 2)
    }
}))
console.log(detaliedPeople)

let bmiList = detaliedPeople.filter(item => {
    return item.bmi > 18.5 && item.bmi < 24.99
})
console.log(bmiList)

/*Zad6 Policz sumę wszytskich elementów tablicy
    Output: '1.1 Suma elementów w tablicy: 215'*/
let array = [11, -10, 50, 5, -8, 9, 20, 21, -4, 11, -5, -12, 100, 20, 14, 8, 19, 44, -21, -53, 17, -21]
let sumArray = (a) => {
    let sum = 0
    for (i = 0; i < a.length; i++) {
        sum = sum + a[i]
    }
    return console.log(sum)
}
sumArray(array)

/*Zad7Policz sumę wartości bezwględnych w tablicy
    Output: '1.2 Suma wartości bezwględnych z elementów w tablicy: 483'*/
let absSumArray = (a) => {
    let sum = 0
    let as = [...a]
    for (i = 0; i < a.length; i++) {
        as[i] = Math.abs(a[i])
        sum = sum + as[i]
    }
    return console.log(sum)

}
let ABS = absSumArray(array)
/*Zad8 Wyświetl tylko elementy większe lub równe od 20:
    Output: '1.3 Elementy większe lub równe od 20: 50,20,21,100,20,44'*/
let showAbove20 = (a) => {
    let newarray = []
    let j = 0
    for (i = 0; i < a.length; i++) {
        if (a[i] >= 20) {
            newarray[j] = a[i]
            j++
        }
    }
    console.log(newarray)
}
showAbove20(array)
/*Zad9 Wyświetl sumę elementów tylko ujemnych:
    Output: '1.4 Sume elementów ujemnych: -134'*/
showSumBelow0 = (a) => {
    let b = 4
    for (i = 0; i < a.length; i++) {
        if (a[i] < 0) {
            b = b + a[i]
        }
    }
    return b
}
console.log(showSumBelow0(array))

/*Zad10 Wyświetl sumę elementów na indeksach parzystych:
    Output: '1.5 Suma elementów parzystych: 193'*/
let showEvenIndex = (a) => {
    let sum = 0;
    for (i = 0; i < a.length; i = i + 2) {
        sum = sum + a[i]
    }
    return sum
}
console.log(showEvenIndex(array))
/*Zad11 Napisz funkcję, która przyjmuje 2 parametry (znak, liczbę), która wyświetli ciąg znaków połączony '-' ale nie więcej niż 10 znaków.
 Input: $, 5         Output: $-$-$-$-$
 Input: $, 17        Output: $-$-$-$-$-$-$-$-$-$*/
const showXTimes = (symbol, number) => {
    let sym = symbol
    let array = []
    if (number <= 10) {
        for (i = 0; i < number; i++) {
            array[i] = sym
        }
        const merged = array.join('-')
        return console.log(merged)
    }
    else (console.log("max number is 10!"))
}
showXTimes("#", 5)

/* 12. Napisz funkcję, która przyjmuje 3 parametry (2x number, 1x string jako operator (dostępne +,-,/,*) i zwraca wartość wyniku:
 Input: 1, '+', 2    Output: 3
 Input: 20, '-', 3   Output: 17
 Input: -1, '*', 8   Output: -8
 Input: 4, '/', 2    Output: 2
 Input: 5, '!', 5    Output: Nie znany operator
 Input: 4, '/', 0    Output: Nie można dzielić przez zero*/
const calculator = (num1, toDo, num2) => {
    let result
    if (toDo === "-") {
        result = num1 - num2
        return result
    }
    if (toDo === "+") {
        result = num1 + num2
        return result
    }
    if (toDo === "*") {
        result = num1 * num2
        return result
    }
    if (toDo === "/" && num2 === 0) {
        console.log("Nie dziel przez 0!")
    }
    if (toDo === "/" && num2 !== 0) {
        result = num1 / num2
        return result
    }
    if (toDo === "!") {
        console.log("Nieznany parametr")
    }

}

/*13. Napisz pętle, która zwróci dany ciąg znaków w konsoli (dokładnie w takiej strukturze).
 Output:
 *
 * *
 * * *
 * * * *
 * * * * *
  */
const makeXmasTree = (number) => {
    let star = ""
    for (i = 0; i < number; i++) {
        star += "*"
        console.log(star)
    }
}
makeXmasTree(5)

/*14.Stwórz obiekt o nazwie 'szkola'. W obiekcie niech będą pola z przedmiotami: 'matematyka', 'polski', 'muzyka'.
 Niech każdy z przedmiotów ma wartość w postaci obiektu z ocenami, imieniem nauczyciela i nazwiskiem nauczyciela.
 Wartości pól w tych obiektach dobierz sam/sama. Następnie w consoli wyświetl 3 stringi. Każdy z nich niech ma nazwę
 przedmiotu, oceny oraz imię i nazwisko nauczyciela prowadzącego zajęcia.
  */
let school = {
    matematyka: {
        oceny: [1, 2, 3],
        imie_nauczyciela: "Jan",
        nazwisko_nauczyciela: "Kowalski"
    },
    muzyka: {
        oceny: [4, 6, 3],
        imie_nauczyciela: "Janek",
        nazwisko_nauczyciela: "Kowal"
    },
    polski: {
        oceny: [4, 5, 3],
        imie_nauczyciela: "Janislaw",
        nazwisko_nauczyciela: "Kowalczyk"
    },
}
console.log(`${school.matematyka.imie_nauczyciela} ${school.matematyka.nazwisko_nauczyciela} ${school.matematyka.oceny}`)
console.log(`${school.polski.imie_nauczyciela} ${school.polski.nazwisko_nauczyciela} ${school.polski.oceny}`)
console.log(`${school.muzyka.imie_nauczyciela} ${school.muzyka.nazwisko_nauczyciela} ${school.muzyka.oceny}`)

/*15.  Napisz funkcję, która z tablicy stringów zwróci pierwszy najdłuższy string
 Input: ['warzywo', 'ziemianka', 'kot']         Output: 'ziemianka'
 Input: ['pies', 'wąż', 'pasikonik']            Output: 'pasikonik'
 Input: ['dom', 'oko', 'on']                    Output: 'dom'
 Input: ['kamil zadaje', 'super prace domowe']  Output: 'super prace domowe' */

let theLongestString = (array) => {
    let theLongest = array[0]
    for (i = 0; i < array.length; i++) {
        if (theLongest.length < array[i].length) {
            theLongest = array[i]
        }
    }
    return theLongest

}
console.log(theLongestString(["alalala", "hshshs", "ssdddddddddddddddddddd", "ssssssssssssssss"]))

/*16. Napisz funkcję, która jako argument przyjmuje tablicę i zwróci tablicę, która zawiera parzyste liczby.
 Input: [1, 2, 3, 4, 5, 6, 7]                                    Output: [2, 4, 6]
 Input: ['Czasem', 12, 'Słońce', 3, 'czasem', 600, 'deszcz']     Output: [12, 600]
 Input: [{}, {}, [], [], 'abc', 2]                               Output: [2]
 Input: ['a', null, true, undefined, {}, []]                     Output: [] */

let findEvenNumbers = (array) => {
    let output = []
    let j = 0
    for (i = 0; i < array.length; i++) {

        if (array[i] % 2 === 0 && typeof array[i] === "number") {
            output[j] = array[i]
            j++
        }

    }
    return output
}

/* 17. Napisz funkcję, która w przypadku kiedy jako argument otrzyma string, zwróci każdy z wyrazów w tym stringu
 z powiększoną pierwszą literą.
 Input: 'ale super zadanie'                 Output: 'Ale Super Zadanie'
 Input: 'uwielbiam javascript'              Output: 'Uwielbiam Javascript'
 Input: 'koty, mewy i sroki'                Output: 'Koty, Mewy I Sroki'*/
let toUpperFirstLetters = (a) => {
    let stringtoarray = a.split(" ")
    if (typeof a === "string") {
        for (i = 0; i < stringtoarray.length; i++) {
            console.log(stringtoarray[i].charAt(0).toUpperCase() + stringtoarray[i].slice(1))

        }

        return stringtoarray
    }
    else {
        console.log("gimmie string")
    }
}
console.log(toUpperFirstLetters("alicja pawel"))