import { createContext, useContext } from "react";
import { StockItem } from "../../domain/entities/StockItem";
import { Action, BaseState, useBaseReducer } from "@/utils";

interface StockItemContextType {
    state: BaseState<StockItem>;
    dispatch: React.Dispatch<Action<StockItem>>;
}

const StockItemContext = createContext<StockItemContextType | undefined>(undefined);

export function StockItemProvider({ children }: { children: React.ReactNode }) {
    const { state, dispatch } = useBaseReducer<StockItem>();
    return (
        <StockItemContext.Provider value={{ state, dispatch }}>
            {children}
        </StockItemContext.Provider>
    );
}

export const useStockItem = () => {
    const context = useContext(StockItemContext);
    if (!context) throw new Error("useStockItem must be used within a StockItemProvider");
    return context;
};
