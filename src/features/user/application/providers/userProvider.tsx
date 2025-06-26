import { createContext, useContext } from "react";
import { Action, BaseState, useBaseReducer } from "@/utils";
import { User } from "../../domain/entities/User";
import { UserRepositoryImp } from "../../infrastructure/repository/UserRepositoryImp";
import { UserDatasourceImp } from "../../infrastructure/datasources/UserDatasourceImp";

const userRepository = new UserRepositoryImp(new UserDatasourceImp());

const fetchUsers = async () => {
    return await userRepository.findAll();
};

interface UserContextType {
    state: BaseState<User>;
    dispatch: React.Dispatch<Action<User>>;
    fetchUsers: () => Promise<User[]>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
    const { state, dispatch } = useBaseReducer<User>();
    return (
        <UserContext.Provider value={{ state, dispatch, fetchUsers }}>
            {children}
        </UserContext.Provider>
    );
}

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) throw new Error("useUser must be used within a UserProvider");
    return context;
};
