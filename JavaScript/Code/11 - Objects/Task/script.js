let car = {
    brand: {
        manufacturer : "Ford",
        model : "Kuga"
    },
    fuel : "diesel",
    price : 19999,
    qty : 1000,
    colors : ['blue', 'red', 'green', 'purple'],
    consumption : function(liter, kilometer){
        return `The car spends ${liter} per ${kilometer}`;
    },
    years: 19,
    members: 7,
    age : function(years){
        if (years < 18){
            return false;
        }else {
            return true;
        }
    },
    family : function(members){
        if(members > 5){
            return false;
        }else {
            return true;
        }
    }

};

console.log(`The car ${car.brand.manufacturer} ${car.brand.model} runs on ${car.fuel} and it costs ${car.price} US dollars.`);
console.log(`If you are over the driving limit you can ${car.age()
    ? 'drive the car.'
    : 'not drive the car.'
    }`);

console.log(`${car.family()
    ? 'the car is full.'
    : 'the car can support more members.'}`);

var myCarJSON = JSON.stringify(car);
console.log(myCarJSON);
