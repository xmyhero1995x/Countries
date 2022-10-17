import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import { Header } from "./components/Header";
import { Main } from "./components/Main";

import { HomePage } from "./pages/HomePage";
import { Details } from "./pages/Details";
import { NotFound } from "./pages/NotFound";

function App() {
  const [countries, setCountries] = useState([]);

  return (
    <div className="App">
      <Header />
      <Main>
        <Routes>
          <Route exact path="/Countries" element={<HomePage countries={countries} setCountries={setCountries} />} />
          <Route path="/country/:name" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </div>
  );
}

export default App;
