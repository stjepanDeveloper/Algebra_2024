const apiUrl = 'https://api.edu.skuflic.com/users';

const requestData = {
    name: 'James Bond',
    birthday: '06/03/1996',
    address: {
        street: 'Gradišćanska 24',
        city: 'Zagreb',
        zip: '10000',
        country: 'Hrvatska'
    },
    email : 'nino.skuflic@tratincica.hr',
    phone: '+3851234567'
};

const requestOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'appplication/json',
    },
    body: JSON.stringify(requestData),
};

document.querySelector('button').addEventListener('click', () => {
    fetch(apiUrl, requestOptions)
    .then((response) => {
        if (!Response.ok) {
            throw new Error('Network response was not OK');
        }
        return response.json();
    })
    .then((data) => console.log('Response data:', data))
    .catch((error) => {
        console.error(error);
    });
        
})