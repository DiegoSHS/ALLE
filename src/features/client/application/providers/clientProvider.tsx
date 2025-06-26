import { createContext, useContext } from "react";
import { Client } from "../../domain/entities/Client";
import { Action, BaseState, useBaseReducer } from "@/utils";

interface ClientContextType {
    state: BaseState<Client>;
    dispatch: React.Dispatch<Action<Client>>;
}

const ClientContext = createContext<ClientContextType | undefined>(undefined);

export function ClientProvider({ children }: { children: React.ReactNode }) {
    const { state, dispatch } = useBaseReducer<Client>();
    return (
        <ClientContext.Provider value={{ state, dispatch }}>
            {children}
        </ClientContext.Provider>
    );
}

export const useClient = () => {
    const context = useContext(ClientContext);
    if (!context) throw new Error("useClient must be used within a ClientProvider");
    return context;
};
