import './App.css';

function App() {

   const name = 'Ivan';
   const user = {
    firstName : 'Luka',
    lastName : 'Horvat',
   }

   function getUserName(user){
    return `Hello ${user.firstName} ˘${user.lastName}`;
   }

   function checkFriend(user){
    return user.lastName ? 'Hello, friend' : 'Hello, stranger';
   }
  return (
    <div>
      <h1>{getUserName(user)}</h1>
      <h2>{checkFriend(user)}</h2>
    </div>
  );
}

export default App;
