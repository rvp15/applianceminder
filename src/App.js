import "./App.css";
import Navbar1 from "./components/Navbar1";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MyAccount from "./pages/MyAccount";

function App() {
  return (
    <div className="App">
      <Navbar1 />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/myaccount" element={<MyAccount />}></Route>
      </Routes>
    </div>
  );
}

export default App;
