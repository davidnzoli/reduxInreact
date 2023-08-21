import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Verify from "./components/Verify";
import Admin from "./pages/Admin";

function App() {
  const state = useSelector((state)=> console.log(state))
  return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/Admin" element={<Verify> <Admin /> </Verify>} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
