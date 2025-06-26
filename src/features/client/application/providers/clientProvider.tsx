import { createContext, useContext } from "react";
import { Client } from "../../domain/entities/Client";
import { Action, BaseState, useBaseReducer } from "@/utils";
import { ClientRepositoryImp } from "../../infrastructure/repository/ClientRepositoryImp";
import { ClientDatasourceImp } from "../../infrastructure/datasources/ClientDatasourceImp";

interface ClientContextType {
    state: BaseState<Client>;
    dispatch: React.Dispatch<Action<Client>>;
    fetchClients: () => Promise<Client[]>;
}

const ClientContext = createContext<ClientContextType | undefined>(undefined);

export function ClientProvider({ children }: { children: React.ReactNode }) {
    const { state, dispatch } = useBaseReducer<Client>();

    const clientRepository = new ClientRepositoryImp(new ClientDatasourceImp());

    const fetchClients = async () => {
        const clients = await clientRepository.findAll();
        dispatch({ type: "SET", payload: clients });
        return clients;
    };

    return (
        <ClientContext.Provider value={{ state, dispatch, fetchClients }}>
            {children}
        </ClientContext.Provider>
    );
}

export const useClient = () => {
    const context = useContext(ClientContext);
    if (!context) throw new Error("useClient must be used within a ClientProvider");
    return context;
};
