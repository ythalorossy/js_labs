// 1
function showName(firstName, lastName) {
    'use strict';

    var nameIntro = "Your name is ";

    function makeFullName() {
        return nameIntro + firstName + " " + lastName;
    }

    return makeFullName();
}


// 2
function celebrityName(firstName) {
    'use strict';
    
    var nameIntro = "This celebrity is ";
    
    // this inner function has access to the outer function's variables, including the parameter​
    function lastName(theLastName) {
        return nameIntro + firstName + " " + theLastName;
    }
    
    return lastName;
}