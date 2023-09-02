import "./App.css";
import { Header } from "./header/Header";

function App() {
  return (
    <div className="flex flex-col items-center justify-center text-[#222] ">
      <div className=" text-myFont w-[85%]">
        <Header />
      </div>
    </div>
  );
}

export default App;
