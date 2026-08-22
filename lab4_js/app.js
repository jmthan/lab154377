var fname = "Thanphitcha";
var lname = 'Somsarng'

var num1 = 123
var num2 = 10.45

var bol = false



// if (bol) {
//     console.log("yes")
// }

// window.alert(fname)
// console.log(arr[0] + " " + arr[1])
// document.getElementById("divname").innerHTML = fname + ' ' + lname
// console.log(fname + " " + lname)
// console.log(num1 + num2)
// console.log(fname + num1)

var arr = ["Thanphitcha", "Somsarng", 12, true]
console.log("arr:", arr[0])
var stdObj = {
    fname: "Thanphitcha",
    lname: "Somsarng",
    id: 670410027
}
console.log("Obj:", stdObj.fname)

//global variable
const x = "Thanphitcha"
console.log(x)


function showName(name) {
    console.log("hey " + name)
}

showName("Thanphitcha")


function addNumber(num) {
    let result = 1 + num
    return result
}

let res = addNumber(8)
console.log(res)


//arrow function
let addNumber2 = (num) => {
    let result = 1 + num
    return result
}

let res2 = addNumber2(4)
console.log(res2)

var score = 75
if (score <= 50) {
    console.log("F")
} else if (score <= 70) {
    console.log("B")
} else {
    console.log("A")
}


for (let i = 0; i < 10; i += 2) {
    console.log(i)
}

var arr2 = ["Thanphitcha", "Somsarng", 12, true]

arr2.forEach((x) => { console.log(x) })

arr2.forEach(function (x) { console.log(x) })