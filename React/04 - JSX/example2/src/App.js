import './App.css';

export default function App() {

     const user = {
      firstName : 'Homer',
      lastName : 'Simpson',
      job: 'The Nuclear Safety Inspector',
      age: 15,
      employed: true,
      spouse: {
        firstName: 'Marge',
        lastName: 'Simpson',
      },
      animals : ['Santa"s Little Helper', 'Snowball II'],
     };

     function checkLegalDrinkingAge(user){
        if (user.age >= 21){
        return `${user.firsttName} is of legal drinking age.`;
        } else {
          return `${user.firstName} is not of legal drinking age. Please do not serve them alcoholic beverages.`;
        }
     }


     return <div>
        <h1>{user.firstName} {user.lastName}</h1>
           <h2>
            {`${user.firstName} ${user.lastName}`}  is {user.age} years old, and his job role is {user.job} and they are currently{' '}
          {user.employed ? 'employed. Wohoo.' : 'unemployed . Awh.'}
           </h2>
           <p>Our user has {user.animals.length} animals. They are: {' '} {user.animals.join(', ')}</p>

           <p>{checkLegalDrinkingAge(user)}</p>
           <p>Spouse: {user.spouse.firstName} {user.spouse.lastName}</p>
           
     </div>;
  
}


