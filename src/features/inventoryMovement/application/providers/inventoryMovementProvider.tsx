import { createContext, useContext } from "react";
import { InventoryMovement } from "../../domain/entities/InventoryMovement";
import { Action, BaseState, useBaseReducer } from "@/utils";

interface InventoryMovementContextType {
    state: BaseState<InventoryMovement>;
    dispatch: React.Dispatch<Action<InventoryMovement>>;
}

const InventoryMovementContext = createContext<InventoryMovementContextType | undefined>(undefined);

export function InventoryMovementProvider({ children }: { children: React.ReactNode }) {
    const { state, dispatch } = useBaseReducer<InventoryMovement>();
    return (
        <InventoryMovementContext.Provider value={{ state, dispatch }}>
            {children}
        </InventoryMovementContext.Provider>
    );
}

export const useInventoryMovement = () => {
    const context = useContext(InventoryMovementContext);
    if (!context) throw new Error("useInventoryMovement must be used within a InventoryMovementProvider");
    return context;
};
