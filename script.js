// Exercices 


/*
| Arguments : 2 nombres
| Retour    : Somme des 2 nombres
*/

function Somme(n1,n2){  
    return  
}
console.log(Somme(7,15))


/*
| Argument  : Base et hauteur d'un triangle 
| Retour    : L'aire du triangle
*/
function TriangleArea(B,H){
    return 
}
console.log(TriangleArea(10,12))

/*
| Argument  : Hauteur et largeur d'un rectangle 
| Retour    : Périmètre du rectangle
*/
function RectanglePerimetre(W,H){
    return 
}
console.log(RectanglePerimetre(6,6))


/*
| Argument  : Un nombre 
| Retour    : Ce nombre élevé au carré
*/
function SquareNumber(n){
    return 
}
console.log(SquareNumber(9))

/*
| Argument  : 2 nombres le premier est divisé par le second
| Retour    : Le reste de la division
*/
function Rest(N ,n ){
    return 
}

console.log(Rest(450,55))

/*
| Argument  : Un nombre d'heure
| Retour    : Conversion en secondes
*/
function HourToSecond(H){
    return 
}
console.log(HourToSecond(24))

/*
| Argument  : 2 nombres, le 1er en heures, le second en minutes
| Retour    : Conversion en secondes
*/
function ConvertToSecond(H , M){
    return 
}
console.log(ConvertToSecond(24,15))

/*
| Argument  : Un nom 
| Retour    : Dis bonjour à l'utilisateur si le nom est Joseph la fonction retourne : Bonjour Joseph !
*/
function Greeting(name){
    return 
}
console.log(Greeting("Joseph"))


/*
| Argument  : Une string
| Retour    : La longueur de la string
*/
function LengthOfString(str){
    return 
}
console.log(LengthOfString("Bonjour Simplonien"))

/*
| Argument  : Une string contenant un nombre 
| Retour    : Conversion en nombre
*/
function StringToNumber(str){
    return 
}
console.log(StringToNumber("200"))


/*
| Argument  : Un nombre
| Retour    : Conversion en string
*/
function NumberToString(number){
    return 
}
console.log(NumberToString(200))


//------- Exercice avancés


// Exercice
// Create a function that takes two numbers,and returns true if the sum of both numbers is less than 100. Otherwise return false.
// sumOfNumbers(10,20)➞ true
// 10+20=40<100
// sumOfNumbers(90,20)➞ false

function sumOfNumbers(num1,num2) {
    return
}

// Exercice

// Create a function that takes two numbers and returns true when num1 is equal to num2; otherwise return false
// isEqual(1,7)➞false
// isEqual(100,100)➞true

function isEqual(num1,num2) {
    return
}


// Exercice:

// Create a function that takes in three arguments (a, b, c) and returns true if the product of a and b is more than c; otherwise return false.
// ifOneIsSum(2,2,3)➞ true
// ifOneIsSum(0,2,5)➞ false
function ifOneIsProduct(num1,num2,num3) {
    return
}

// Exercice:

// Create a function  that takes a string as argument and returns true if a string is empty and false otherwise.
// isEmpty(“”)➞ true
// isEmpty(“ ”)➞ true
// isEmpty(“Chaima”)➞ false

function isEmpty(str) {
    return
}

// Exercice:

// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
// isEqualZero (2)➞ false
// isEqualZero (0)➞ true
// isEqualZero (-52)➞ true
function isEqualZero(num) {
    return
}


// Exercice:

// Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false.
// isDevisible (500)➞ true
// isDevisible (2)➞ false
function isDevisible(num) {
    return
}

// Exercice:

// Create a function that takes two strings as arguments and returns true if the total number of characters in the first string is equal to the total number of characters in the second string.Otherwise return false.
// isEqualStr (“ Simplon”,”Tunis ”)➞ false
// isEqualStr (“CA”,”FS”)➞ true

function isEqualStr(str1, str2) {
    return
}

// Exercice:

// Create a function that takes two numbers, a and b, return true if a can be divided evenly by b , return false otherwise.
// oneDevideByTwo(9,3)➞true
// oneDevideByTwo(10,2)➞true
// oneDevideByTwo(13,2)➞false

function isDevideBy(num1,  num2)   { 
    return 
}

// Exercice:

// Create a function that takes in a mood and return a sentence in the following format: "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neuter".
// moodToday("happy") ➞ "Today, I am feeling happy"
// moodToday( ) ➞ "Today, I am feeling neuter"
function moodToday(mood) { 
    return 
}

// Exercice:

// Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers.
// isEvenOrOdd(3) ➞ "odd"
// isEvenOrOdd(146) ➞ "even"
// isEvenOrOdd(19) ➞ "odd"
function isEvenOrOdd(num) { 
    return 
}

// Exercice:

// Write a function that validates whether two strings are identical. Make it case insensitive.
// match(“HELLO WORLD”,”hello world”) → true
// match("mask", "mAskinG") ➞ false

function match(str1, str2 ) {
    return
}

// Exercice:

// Create a function that takes a string as argument and returns "upper" if all the letters in a word are uppercase, "lower" if lowercase and "mixed" for any mix of the two.
// getCase("javascript..") ➞ "lower"
// getCase("SHOUT!") ➞ "upper"

function getCase(str) {
    return
}


// Exercice:

// Create a function that takes  a string as argument (of a person’s first and last name) and returns a string with the first and last name swapped.
// swapName("Ada Lovelace") ➞ "Lovelace Ada"
// swapName(“Alan Turing”)➞  “Turing Alan”
function swappName(NameLastName) {
    return
}

// Exercice:

// Create a function that takes a string and returns a string with its letters in alphabetical order.
// AlphabetSoup("javascript") ➞ "aacijprstv"
// AlphabetSoup(“simplon”) ➞”ilmnops”
function AlphabetSoup(str) {
    return
}

// Exercice:

// Create a function that returns true if an input string contains only uppercase or only lowercase letters.
// onlyCase("good") ➞ true
// onlyCase("GOOD") ➞ true
// onlyCase("SimpLoN") ➞ false

function onlyCase(str) {
    return
}

// Exercice:

// Create a function that takes two strings as arguments and returns true if the first string ends with the second string; otherwise return false.
// checkEnding("abc", "bc") ➞ true
// checkEnding("simplonien", "zi") ➞ false

function checkEnding(str1,  str2) {
    return
}


// Exercice:

// Create a function that takes a number as argument and returns the incrementing (+1) for each even number and decrementing (-1) for each odd number.
// incrementOrDecrement(5) ➞4
// incrementOrDecrement(2) ➞3

function incrementOrDecrement(num1) {
    return
}


// Exercice

// Create a function that takes two arguments and returns the smaller number.
// Numbers will be represented as strings, and your output should also be a string.

// transformToString("21", "100") ➞ "21"
// transformToString("200", "80") ➞ "80"

function transformToString(num1, num2) {
    return
}

module.exports = {
    Somme,
    TriangleArea,
    RectanglePerimetre,
    SquareNumber,
    Rest,
    HourToSecond,
    ConvertToSecond,
    Greeting,
    LengthOfString,
    StringToNumber,
    NumberToString,
    sumOfNumbers,
    isEqual,
    ifOneIsProduct,
    isEmpty,
    isEqualZero,
    isDevisible,
    isEqualStr,
    isDevideBy,
    moodToday,
    isEvenOrOdd,
    match,
    getCase,
    swappName,
    AlphabetSoup,
    onlyCase,
    checkEnding,
    incrementOrDecrement,
    transformToString
}