import { createContext, useContext } from "react";
import { InventoryMovement } from "../../domain/entities/InventoryMovement";
import { Action, BaseState, useBaseReducer } from "@/utils";
import { InventoryMovementRepositoryImp } from "../../infrastructure/repository/InventoryMovementRepositoryImp";
import { InventoryMovementDatasourceImp } from "../../infrastructure/datasources/InventoryMovementDatasourceImp";

const inventoryMovementRepository = new InventoryMovementRepositoryImp(new InventoryMovementDatasourceImp());

const fetchInventoryMovements = async () => {
    return await inventoryMovementRepository.findAll();
};

interface InventoryMovementContextType {
    state: BaseState<InventoryMovement>;
    dispatch: React.Dispatch<Action<InventoryMovement>>;
    fetchInventoryMovements: () => Promise<InventoryMovement[]>;
}

const InventoryMovementContext = createContext<InventoryMovementContextType | undefined>(undefined);

export function InventoryMovementProvider({ children }: { children: React.ReactNode }) {
    const { state, dispatch } = useBaseReducer<InventoryMovement>();
    return (
        <InventoryMovementContext.Provider value={{ state, dispatch, fetchInventoryMovements }}>
            {children}
        </InventoryMovementContext.Provider>
    );
}

export const useInventoryMovement = () => {
    const context = useContext(InventoryMovementContext);
    if (!context) throw new Error("useInventoryMovement must be used within a InventoryMovementProvider");
    return context;
};
