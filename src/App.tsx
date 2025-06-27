import { Route, Routes } from "react-router-dom";

import { QrPage } from "./pages/qrvisor";
import { QrScanner } from "./features/codescanner";
import { QrGenerator } from "./features/qrgenerator";
import UserScreen from "./features/user/application/screens/UserScreen";
import FranchiseBranchScreen from "./features/franchiseBranch/application/screens/FranchiseBranchScreen";
import StoreScreen from "./features/store/application/screens/StoreScreen";
import StockScreen from "./features/stock/application/screens/StockScreen";
import StockItemScreen from "./features/stockItem/application/screens/StockItemScreen";
import StockMovementScreen from "./features/stockMovement/application/screens/StockMovementScreen";
import ClientScreen from "./features/client/application/screens/ClientScreen";
import OrderScreen from "./features/order/application/screens/OrderScreen";

function App() {
  return (
    <Routes>
      <Route element={<QrScanner />} path="/scan" />
      <Route element={<QrPage />} path="/qr" />
      <Route element={<QrGenerator />} path="/gene" />
      <Route element={<UserScreen />} path="/users" />
      <Route element={<FranchiseBranchScreen />} path="/franchise-branches" />
      <Route element={<StoreScreen />} path="/stores" />
      <Route element={<StockScreen />} path="/" />
      <Route element={<StockItemScreen />} path="/stock-items" />
      <Route element={<StockMovementScreen />} path="/stock-movements" />
      <Route element={<ClientScreen />} path="/clients" />
      <Route element={<OrderScreen />} path="/orders" />
    </Routes>
  );
}

export default App;
