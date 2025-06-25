import { createContext, useContext } from "react";
import { Order } from "../../domain/entities/Order";
import { Action, BaseState, useBaseReducer } from "@/utils";

interface OrderContextType {
    state: BaseState<Order>;
    dispatch: React.Dispatch<Action<Order>>;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export function OrderProvider({ children }: { children: React.ReactNode }) {
    const { state, dispatch } = useBaseReducer<Order>();
    return (
        <OrderContext.Provider value={{ state, dispatch }}>
            {children}
        </OrderContext.Provider>
    );
}

export const useOrder = () => {
    const context = useContext(OrderContext);
    if (!context) throw new Error("useOrder must be used within a OrderProvider");
    return context;
};
