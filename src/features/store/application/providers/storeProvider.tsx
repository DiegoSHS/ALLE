import { createContext, useContext } from "react";
import { Store } from "../../domain/entities/Store";
import { Action, BaseState, useBaseReducer } from "@/utils";

interface StoreContextType {
    state: BaseState<Store>;
    dispatch: React.Dispatch<Action<Store>>;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: React.ReactNode }) {
    const { state, dispatch } = useBaseReducer<Store>();
    return (
        <StoreContext.Provider value={{ state, dispatch }}>
            {children}
        </StoreContext.Provider>
    );
}

export const useStore = () => {
    const context = useContext(StoreContext);
    if (!context) throw new Error("useStore must be used within a StoreProvider");
    return context;
};
