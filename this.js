var
    firstName = "Peter",
    lastName = "Ally";

function showFullName() {
    console.log(this.firstName + " " + this.lastName);
}

var person = {
    firstName: "Penelope",
    lastName: "Barrymore",
    showFullName: function () {
        console.log(this.firstName + " " + this.lastName);
    };
}

// Uso do this global
showFullName();

// Uso do this global
window.showFullName();

// Uso do this interno ao objeto person
person.showFullName();