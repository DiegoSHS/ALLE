import { UserProvider } from "./features/user/application/providers/userProvider";
import { FranchiseBranchProvider } from "./features/franchiseBranch/application/providers/franchiseBranchProvider";
import { StoreProvider } from "./features/store/application/providers/storeProvider";
import { StockItemProvider } from "./features/stockItem/application/providers/stockItemProvider";
import { InventoryMovementProvider } from "./features/inventoryMovement/application/providers/inventoryMovementProvider";
import { ClientProvider } from "./features/client/application/providers/clientProvider";
import { OrderProvider } from "./features/order/application/providers/orderProvider";
import { OrderStockProvider } from "./features/orderStock/application/providers/orderStockProvider";
import { StockProvider } from "./features/stock/application/providers/stockProvider";

export function AppProviders({ children }: { children: React.ReactNode }) {
    return (
        <UserProvider>
            <FranchiseBranchProvider>
                <StoreProvider>
                    <StockProvider>
                        <StockItemProvider>
                            <InventoryMovementProvider>
                                <ClientProvider>
                                    <OrderProvider>
                                        <OrderStockProvider>
                                            {children}
                                        </OrderStockProvider>
                                    </OrderProvider>
                                </ClientProvider>
                            </InventoryMovementProvider>
                        </StockItemProvider>
                    </StockProvider>
                </StoreProvider>
            </FranchiseBranchProvider>
        </UserProvider>
    );
}
