var age = 25;

// if , else loop
if (age > 18) {
    console.log('User is of legal drinking age!')
} else {
    console.log('User is of not legal drinking age! Do not serve drinks!')
}

// If, Else if, Else
var gender = 'Male';
if (gender== 'Male') {
    console.log('User is a male.');
} else if (gender == 'Female') {
    console.log('User is a female.');
} else {
    console.log('User gender is unkown.');
}

// If, Else with a range

var customerage = 17;

if(customerage >= 18 && customerage <= Infinity){
    console.log('User is of legal drinking age.')
}else {
    console.log("WARNING: This user is not of legal drinking age. DO NOT SERVE HIM!!")
}

// Switch
var fruit = 'Mangoes';

switch (fruit) {
    case 'Oranges':
        console.log('User has bought oranges.');
        break;

    case "Mangoes" :
        console.log('User has bought mangoes.');
        break;

    case "Papayas" :
        console.log('User has bought papayas. ');
        break;

    default :
        console.log('I have no idea what the user has bought.');
        break;
}


console.log(new Date().getDay());

var date = new Date().getDay();

switch (date) {
    case 0:
        console.log('Today is Sunday.');
        break;

    case 1 :
        console.log('Today is Monday.');
        break;
    
    case 2 :
        console.log('Today is Tuesday.');
        break;

    case 3 :
        console.log('Today is Wednesday.');
        break;

    case 4 :
        console.log('Today is Thursday.');
        break;
    
    case 5 :
        console.log('Today is Friday.');
        break;

    case 6 :
        console.log('Today is Saturday.');
        break;
}