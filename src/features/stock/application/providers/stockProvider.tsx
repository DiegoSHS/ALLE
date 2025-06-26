import { createContext, useContext } from "react";
import { Stock } from "../../domain/entities/Stock";
import { Action, BaseState, useBaseReducer } from "../../../../utils";
import { StockRepositoryImp } from "../../infrastructure/repository/StockRepositoryImp";
import { StockDatasourceImp } from "../../infrastructure/datasources/StockDatasourceImp";

const stockRepository = new StockRepositoryImp(new StockDatasourceImp());

const fetchStocks = async () => {
    return await stockRepository.findAll();
};

interface StockContextType {
    state: BaseState<Stock>;
    dispatch: React.Dispatch<Action<Stock>>;
    fetchStocks: () => Promise<Stock[]>;
}

const StockContext = createContext<StockContextType | undefined>(undefined);

export function StockProvider({ children }: { children: React.ReactNode }) {
    const { state, dispatch } = useBaseReducer<Stock>();
    return (
        <StockContext.Provider value={{ state, dispatch, fetchStocks }}>
            {children}
        </StockContext.Provider>
    );
}

export const useStock = () => {
    const context = useContext(StockContext);
    if (!context) throw new Error("useStock must be used within a StockProvider");
    return context;
};
