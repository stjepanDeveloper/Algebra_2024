import logo from "./logo.svg";
import "./App.css";
import { Comment, Student, University } from "./components";

function App() {
  // Definiramo podatke
  const comment = {
    date: new Date(),
    text: "Barf Barf React",
    author: {
      name: "Smol Doge",
      url: "https://images.pexels.com/photos/11959703/pexels-photo-11959703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  };

  return (
    <div>
      <Comment
        author={comment.author}
        date={comment.date}
        text={comment.text}
      />
      <Student firstName="Ivana" lastName="Plenkovic" age={20} uid="12345" />
      <University name="Algebra" location="Zagreb" rank={3} />
    </div>
  );
}

export default App;
