import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import { StockPage } from "./pages/stock";
import { QrPage } from "./pages/qrvisor";
import { QrGenerator } from "./features/qrgenerator";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<StockPage />} path="/stock" />
      <Route element={<QrPage></QrPage>} path="/qr"></Route>
      <Route element={<QrGenerator></QrGenerator>} path="/gene"></Route>
    </Routes>
  );
}

export default App;
