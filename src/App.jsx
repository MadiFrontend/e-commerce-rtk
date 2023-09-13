import "./App.css";
import Card from "./card/Card";
import { Header } from "./header/Header";
import Slider from "./heroSection/Slider";
import { Provider } from "react-redux";
import { store } from "./redux/Store";

function App() {
  return (
    <Provider store={store}>
      <div className="flex flex-col items-center justify-center text-[#222] ">
        <Header />
        <div className=" text-myFont w-[85%] ">
          <Slider />
          <Card filterName="jewelery" titleName="Jewelery Products" />
          <Card filterName="electronics" titleName="Electronics Products" />
          <Card filterName="women's clothing" titleName="Women's clothing" />
        </div>
      </div>
    </Provider>
  );
}

export default App;
