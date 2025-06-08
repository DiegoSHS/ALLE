import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import { StockPage } from "./pages/stock";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<StockPage />} path="/stock" />
    </Routes>
  );
}

export default App;
