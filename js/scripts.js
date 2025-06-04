// Functions to implement in the future

// Validate Email | for Connect page & modal btn
function validateEmail (email) {
    if (email.includes ("@") && email.includes (".")) {
        return true;
    } else {
        return ("Please enter valid email");
    }
}

console.log(validateEmail("Zach"));
console.log(validateEmail("Zach.Martens@gmail.com"));




// Contact Storage:
// *use for the "stay connected" modal button in footer, site-wide
const storeSubmissions = [];

function addSubmissions(first,last,email) {
    const entry = {
        firstName: first,
        lastName: last,
        email: email,
    };
    storeSubmissions.push(entry);
    return storeSubmissions;
}


console.log(addSubmissions('Zach', 'Martens','Zach.Martens@gmail.com'));
console.log(addSubmissions('John', 'Doe', 'jd@gmail.com'));
console.log(addSubmissions('test', 'round', 'three@thirdtimesacharm.com'));




// Search function | Project landing page
function searchProjects (search) {
    const input = search.toLowerCase().trim();


    const routes = {
        "good bones" : "good-bones.html",
        "from on high" : "from-on-high.html",
        "test kitchen" : "test-kitchen.html",
    };

    if (routes[input]) {
        console.log(`Match! nagvigate to /pages/${routes[input]}`)
        return routes[input];
    } else {
        console.log("Project not found. Please try again");
        return null;
    }
}

console.log(searchProjects("good bones"));
console.log(searchProjects("from on high"));
console.log(searchProjects("TEST KITCHEN   "));
console.log(searchProjects("not a show"));


// Search Cast & Show details
// *simulating an 'imdb' for details around produtions
const productionData = [
    {
        firstName: "Tiffany",
        lastName: "Ogburn",
        Show: "Good Bones",
        Status: "Active",
    },
    {
        firstName: "Ching Ching",
        lastName: "Wong",
        Show: "Test Kitchen 3",
        Status: "Active",
    },
    {
        firstName: "Tiffany",
        lastName: "Ogburn",
        Show: "From on High",
        Status: "Active",
    },
    {
        firstName: "Joe",
        lastName: "Davis",
        Show: "Test Kitchen 3",
        Status: "Inactive",
    }
]

function findByShow(showTitle) {
    const results = productionData.filter(member => member.Show.toLowerCase() === showTitle.toLowerCase());
    if (results.length === 0) {
        return "Show not found. Please try again.";
    }

    return results;
}


console.log(findByShow("Good Bones"));
console.log(findByShow("Test Kitchen 3"));
console.log(findByShow("3"));

function findByName(name) {
    const lowerName = name.toLowerCase();
    const results = productionData.find(member => member.firstName.toLowerCase() === lowerName ||
    member.lastName.toLowerCase() === lowerName);
    return results ? results : "No Cast Member found. Please try again.";
}


console.log(findByName("Tiffany"));
console.log(findByName("Ching Ching"));
console.log(findByName("Davis"));
console.log(findByName("noName"));
