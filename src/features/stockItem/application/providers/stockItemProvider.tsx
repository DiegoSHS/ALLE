import { createContext, useContext } from "react";
import { StockItem } from "../../domain/entities/StockItem";
import { Action, BaseState, useBaseReducer } from "@/utils";
import { StockItemRepositoryImp } from "../../infrastructure/repository/StockItemRepositoryImp";
import { StockItemDatasourceImp } from "../../infrastructure/datasources/StockItemDatasourceImp";

const stockItemRepository = new StockItemRepositoryImp(new StockItemDatasourceImp());

const fetchStockItems = async () => {
    return await stockItemRepository.findAll();
};

interface StockItemContextType {
    state: BaseState<StockItem>;
    dispatch: React.Dispatch<Action<StockItem>>;
    fetchStockItems: () => Promise<StockItem[]>;
}

const StockItemContext = createContext<StockItemContextType | undefined>(undefined);

export function StockItemProvider({ children }: { children: React.ReactNode }) {
    const { state, dispatch } = useBaseReducer<StockItem>();
    return (
        <StockItemContext.Provider value={{ state, dispatch, fetchStockItems }}>
            {children}
        </StockItemContext.Provider>
    );
}

export const useStockItem = () => {
    const context = useContext(StockItemContext);
    if (!context) throw new Error("useStockItem must be used within a StockItemProvider");
    return context;
};
