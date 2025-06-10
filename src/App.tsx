import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import { StockPage } from "./pages/stock";
import { QrPage } from "./pages/qrvisor";
import { QrScanner } from "./features/codescanner";
import { QrGenerator } from "./features/qrgenerator";
import { Dynamicqr } from "./features/codescanner/dynamix";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<QrScanner />} path="/scan" />
      <Route element={<StockPage />} path="/stock" />
      <Route element={<QrPage></QrPage>} path="/qr"></Route>
      <Route element={<QrGenerator></QrGenerator>} path="/gene"></Route>
      <Route element={<Dynamicqr></Dynamicqr>} path="/qr/:id" />
    </Routes>

  );
}

export default App;
