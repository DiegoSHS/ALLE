import { UserProvider } from "./features/user/application/providers/userProvider";
import { FranchiseBranchProvider } from "./features/franchiseBranch/application/providers/franchiseBranchProvider";
import { StoreProvider } from "./features/store/application/providers/storeProvider";
import { StockItemProvider } from "./features/stockItem/application/providers/stockItemProvider";
import { StockMovementProvider } from "./features/stockMovement/application/providers/stockMovementProvider";
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
                            <StockMovementProvider>
                                <ClientProvider>
                                    <OrderProvider>
                                        <OrderStockProvider>
                                            {children}
                                        </OrderStockProvider>
                                    </OrderProvider>
                                </ClientProvider>
                            </StockMovementProvider>
                        </StockItemProvider>
                    </StockProvider>
                </StoreProvider>
            </FranchiseBranchProvider>
        </UserProvider>
    );
}
