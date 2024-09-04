// Dohvacanje podataka iz API-a i prikazivanje u tablici

const apiUrl = 'https://api.edu.skuflic.com/billing'

async function getDataFromAPI(){
    try{
        const response = await fetch(apiUrl);
        cards = await response.json();
        if(!response.ok){
            throw new Error ('An error occured!');
        }
        console.log(cards);
        return cards;
    }catch(error){
        throw new Error('Didnt get data from the API!')
    }
    
};

let cards = getDataFromAPI();



//Prikazivanje u tablici

const loadingElement = document.getElementById('loading');
const tableElement = document.getElementById('data');

function displayCardData(cards){
    cards.forEach((card) => {
        const row = document.createElement('tr');
        ['cardholder_name', 'card_number', 'expiration_month', 'expiration_year', 'cvv'].forEach((prop) => {
            const cell = document.createElement('td');
            cell.textContent = card[prop] || 'N/A';
            row.appendChild(cell);
        })
        tableElement.appendChild(row);
    });
}


tableElement.style.display = 'table';
loadingElement.style.display = 'none';

displayCardData();


function expirationDate(cards){
    let currentDate = new Date().toString
    
    cards.forEach((card) => {
        let status;
        if(card.expiration_date > currentDate){
            card.status = 'Expired';
        }else{
            card.status = 'Not expired';
        }
    });
}

function getCardImages(cards){
    switch(card.card_type){
        case 'maestro':
            image = 
    }
}
