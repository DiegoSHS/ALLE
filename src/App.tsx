import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import { QrPage } from "./pages/qrvisor";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<QrPage></QrPage>} path="/qr"></Route>
    </Routes>
  );
}

export default App;
