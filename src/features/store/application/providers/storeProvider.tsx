import { createContext, useContext } from "react";
import { Store } from "../../domain/entities/Store";
import { Action, BaseState, useBaseReducer } from "@/utils";
import { StoreRepositoryImp } from "../../infrastructure/repository/StoreRepositoryImp";
import { StoreDatasourceImp } from "../../infrastructure/datasources/StoreDatasourceImp";

const storeRepository = new StoreRepositoryImp(new StoreDatasourceImp());

const fetchStores = async () => {
    return await storeRepository.findAll();
};

interface StoreContextType {
    state: BaseState<Store>;
    dispatch: React.Dispatch<Action<Store>>;
    fetchStores: () => Promise<Store[]>;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: React.ReactNode }) {
    const { state, dispatch } = useBaseReducer<Store>();
    return (
        <StoreContext.Provider value={{ state, dispatch, fetchStores }}>
            {children}
        </StoreContext.Provider>
    );
}

export const useStore = () => {
    const context = useContext(StoreContext);
    if (!context) throw new Error("useStore must be used within a StoreProvider");
    return context;
};
