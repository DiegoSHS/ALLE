import { createContext, useContext } from "react";
import { Action, BaseState, useBaseReducer } from "@/utils";
import { User } from "../../domain/entities/User";

interface UserContextType {
    state: BaseState<User>;
    dispatch: React.Dispatch<Action<User>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
    const { state, dispatch } = useBaseReducer<User>();
    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    );
}

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) throw new Error("useUser must be used within a UserProvider");
    return context;
};
