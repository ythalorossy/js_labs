var allUserData = [ ];

function logStuff(userDate) {
    'use strict';
    if (typeof userDate === "string") {
        console.log(userDate);
    } else if (typeof userDate === "object") {
        for (var prop in userDate) {
            console.log(prop + ": " + userDate[prop]);
        }
    }
}

function getInput(options, callback) {
    allUserData.push(options);
    
    if (typeof callback === 'function') {
        callback(options);
    }
}

// ======================================================

// Uso do "this" com callback.apply

var clientData = {
    id : 094545,
    fullName : 'Not Set',
    setUserName: function (firstName, lastName) {
        this.fullName = firstName + " " + lastName;
    }
};

/*
    callback é a função que será executada como callback
    context é o contexto que deve ser usado
*/
function getUserInput(firstName, lastName, callback, context) {
    callback.apply(context, [firstName, lastName]);
}

/* Dica 

Name your functions and declare them and pass just the name of 
the function as the callback, instead of defining an anonymous 
function in the parameter of the main function.

Modularity: Separate your code into modules, so you can export 
a section of code that does a particular job. Then you can 
import that module into your larger application.
*/
