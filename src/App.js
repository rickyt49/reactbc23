import logo from "./logo.svg";
import "./App.css";
import CardRCC from "./Components/CardRCC";
import CardRFC from "./Components/CardRFC";
import BTLayout from "./Components/BTLayout/BTLayout.jsx";
import DataBinding from "./DataBinding/DataBinding.jsx";
import HandleEvent from "./HandleEvent/HandleEvent";
import StateDemo from "./StateDemo/StateDemo";
import StyleComponent from "./StyleComponent/StyleComponent";
import RenderArray from "./RenderArray/RenderArray";
import DemoProps from "./Props/DemoProps/DemoProps";
import ShoesShop from "./Props/ShoesShop/ShoesShop";
import BaiTapXemChiTiet from "./Props/BaiTapXemChiTiet/BaiTapXemChiTiet";

function App() {
  return (
    <div className="App">
      {/* <BTLayout /> */}
      {/* <DataBinding /> */}
      {/* <HandleEvent /> */}
      {/* <StateDemo /> */}
      {/* <StyleComponent /> */}
      {/* <RenderArray /> */}
      {/* <DemoProps /> */}
      {/* <ShoesShop /> */}
      <BaiTapXemChiTiet />
    </div>
  );
}

export default App;
