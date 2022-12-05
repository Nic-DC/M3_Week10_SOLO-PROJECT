// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarVreme from "./components/NavbarVreme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainSearch from "./components/MainSearch";
import CityWeather from "./components/CityWeather";
import { useState } from "react";
import Favorite from "./components/Favorite";
import Cities from "./components/Cities";
import NotFound from "./components/NotFound";
import Account from "./components/Account";

function App() {
  const [endpoint, setEndpoint] = useState("");
  const [selectedCity, setSelectedCity] = useState(null);

  console.log({ endpoint });
  console.log({ selectedCity });

  const handleEndpoint = (value) => {
    setEndpoint(value);
  };

  const changeCity = (city) => setSelectedCity(city);

  // const handleCity = (city) => {
  //   setSelectedCity(city);
  //   setEndpoint(city.name);
  // };

  return (
    <BrowserRouter>
      <div className="App App-header">
        <Routes>
          <Route
            path="/"
            element={
              <MainSearch
                query={endpoint}
                handleEndpoint={handleEndpoint}
                changeCity={changeCity}
                // handleCity={handleCity}
                selectedCity={selectedCity}
              />
            }
          />
          {/* <Route path="/city/:cityId" element={<CityWeather endpoint={endpoint} />} /> */}
          <Route path="/favorite" element={<Favorite selectedCity={selectedCity} />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/account" element={<Account />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
