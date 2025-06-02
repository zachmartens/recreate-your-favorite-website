// at this stage yo don't have to link up to your page
// event listeners, ids, etc etc


// ES6 -
let name1 = "Zach"

const name2 =  "John"
// cannot go and change this name

let num =10; // semicolons are optional?!

console.log("Hello, World!");


// create a funtion that can print a list
let nameList = ["Zach", "Stefan", "Cozmo", "Parker", "Brendan"];

// function printList(list) {
//     console.log(list[0]);
//     console.log(list[1]);
//     console.log(list[2])
//     console.log(list[3])

// }

function printList(list) {
    for (let i = 0; i < list.length; i ++) {
        console.log(list[i]);
    }
}

printList(nameList);



function validateEmail (email) {
    // if (email.length < 10) {
    //     return "Bad email";
    // }
    // else {
    //     return "Good email";
    // }
    if(email.includes("@") && email.includes(".")) {
        return true;
    }
    else {
        return false;
    }
}

console.log(validateEmail("Zach"));
console.log(validateEmail("zach.martens@gmail.com"));
