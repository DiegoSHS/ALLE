import { createContext, useContext } from "react";
import { StockMovement } from "../../domain/entities/StockMovement";
import { Action, BaseState, useBaseReducer } from "../../../../utils";

interface StockMovementContextType {
    state: BaseState<StockMovement>;
    dispatch: React.Dispatch<Action<StockMovement>>;
}

const StockMovementContext = createContext<StockMovementContextType | undefined>(undefined);

export function StockMovementProvider({ children }: { children: React.ReactNode }) {
    const { state, dispatch } = useBaseReducer<StockMovement>();
    return (
        <StockMovementContext.Provider value={{ state, dispatch }}>
            {children}
        </StockMovementContext.Provider>
    );
}

export const useStockMovement = () => {
    const context = useContext(StockMovementContext);
    if (!context) throw new Error("useStockMovement must be used within a StockMovementProvider");
    return context;
};
