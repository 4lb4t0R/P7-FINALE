
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import APropos from "./APropos";
import PageLogement from "./PageLogement";
import Error from "./Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/page-logement/:id" element={<PageLogement />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
