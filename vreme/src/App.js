// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarVreme from "./components/NavbarVreme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainSearch from "./components/MainSearch";
import CityWeather from "./components/CityWeather";
import { useState } from "react";

function App() {
  const [endpoint, setEndpoint] = useState("");

  console.log({ endpoint });

  const handleEndpoint = (value) => {
    setEndpoint(value);
  };

  return (
    <BrowserRouter>
      <div className="App App-header">
        {/* <NavbarVreme /> */}
        <Routes>
          <Route path="/" element={<MainSearch query={endpoint} handleEndpoint={handleEndpoint} />} />
          <Route path="/city/:cityId" element={<CityWeather endpoint={endpoint} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
