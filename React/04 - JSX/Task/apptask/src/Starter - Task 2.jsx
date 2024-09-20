export default function Component() {
  const user = {
    firstName: 'Lisa',
    lastName: 'Simpson',
    job: 'Saxophone Player',
    age: 8,
    enrolled: true,
    parents: {
      father: 'Homer Simpson',
      mother: 'Marge Simpson',
    },
    hobbies: ['Reading', 'Playing saxophone', 'Environmental activism'],
  };

  // Da li je starija od 11 godina
  // XXX is in middle school or higher.
  // XXX is still in elementary school.
  function checkSchoolGrade(user) {
    return (user.age >= 11) ? 'User is in elementary school' : 'User is in middle school';
  }

  return <div>
    <p>Hello! {user.firstName} {user.lastName} is {user.age} old, her passion is {user.job} and she is currently enrolled in school. Great!</p>

    <p>Our user has {user.hobbies.length} hobby/hobbies. They are : {user.hobbies.join(', ')}</p>
    <h2>{checkSchoolGrade(user)}</h2>
    <h2>Parents: {user.parents.father} and {user.parents.mother}</h2>
  </div>;
}
