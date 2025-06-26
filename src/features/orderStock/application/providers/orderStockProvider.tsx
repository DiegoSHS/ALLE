import { createContext, useContext } from "react";
import { OrderStock } from "../../domain/entities/OrderStock";
import { Action, BaseState, useBaseReducer } from "@/utils";
import { OrderStockRepositoryImp } from "../../infrastructure/repository/OrderStockRepositoryImp";
import { OrderStockDatasourceImp } from "../../infrastructure/datasources/OrderStockDatasourceImp";

const orderStockRepository = new OrderStockRepositoryImp(new OrderStockDatasourceImp());

const fetchOrderStocks = async () => {
    return await orderStockRepository.findAll();
};

interface OrderStockContextType {
    state: BaseState<OrderStock>;
    dispatch: React.Dispatch<Action<OrderStock>>;
    fetchOrderStocks: () => Promise<OrderStock[]>;
}

const OrderStockContext = createContext<OrderStockContextType | undefined>(undefined);

export function OrderStockProvider({ children }: { children: React.ReactNode }) {
    const { state, dispatch } = useBaseReducer<OrderStock>();
    return (
        <OrderStockContext.Provider value={{ state, dispatch, fetchOrderStocks }}>
            {children}
        </OrderStockContext.Provider>
    );
}

export const useOrderStock = () => {
    const context = useContext(OrderStockContext);
    if (!context) throw new Error("useOrderStock must be used within a OrderStockProvider");
    return context;
};
