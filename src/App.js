import { NavBar } from "./Components/HomePageComponents/ImportComponents";
import { HomePage, Coin } from "./Pages/ImportPages";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coin" element={<Coin />}>
          <Route path=":id" element={<Coin />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
