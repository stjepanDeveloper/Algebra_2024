export default function Events() {
  function handleClick() {
    alert('You have clicked the button!');
  }

  return (
    <>
      <h1>Events</h1>
      <button onClick={handleClick}>Click me</button>
    </>
  );
}
