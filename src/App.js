import logo from "./logo.svg";
import "./App.css";
import CardRCC from "./Components/CardRCC";
import CardRFC from "./Components/CardRFC";
import BTLayout from "./Components/BTLayout/BTLayout.jsx";
import DataBinding from "./DataBinding/DataBinding.jsx";
import HandleEvent from "./HandleEvent/HandleEvent";

function App() {
  return (
    <div className="App">
      {/* <BTLayout /> */}
      {/* <DataBinding /> */}
      <HandleEvent />
    </div>
  );
}

export default App;
