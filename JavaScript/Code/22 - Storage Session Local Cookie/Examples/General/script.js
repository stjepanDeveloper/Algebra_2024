// General

(function storage(){

    localStorage.setItem('user', 'John Doee');
    const user = localStorage.getItem('user');

    document.getElementById('user').innerHTML = user;

    sessionStorage.setItem('session', crypto.randomUUID());

    localStorage.setItem('age', 13);

    // localStorage.clear();

})();

(function cookies(){

    document.cookie = 'username=Nino Škuflić;expires=Thu, 31 Dec 2024 12:00:00 UTC;path=/;Secure;';
    console.log('Cookie is ' + document.cookie);
})();