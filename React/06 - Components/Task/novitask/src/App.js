import "./App.css";
import { Component } from "react";
import MainComponent from "./components/MainComponent";

// 1. Komponenta
export default function App() {
  return (
    <div>
      <ClassComponent2 />
      <FunctionalComponent2 />

      <MainComponent />
    </div>
  );
}

// 2. Komponenta
class ClassComponent2 extends Component {
  render() {
    return <h1>Klasna komponenta v2</h1>;
  }
}

// 3. Komponenta
function FunctionalComponent2() {
  return <h1>Nova funkcijska komponenta!!</h1>;
}
