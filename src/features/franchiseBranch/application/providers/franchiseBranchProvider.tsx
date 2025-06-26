import { createContext, useContext } from "react";
import { FranchiseBranch } from "../../domain/entities/FranchiseBranch";
import { Action, BaseState, useBaseReducer } from "@/utils";

interface FranchiseBranchContextType {
    state: BaseState<FranchiseBranch>;
    dispatch: React.Dispatch<Action<FranchiseBranch>>;
}

const FranchiseBranchContext = createContext<FranchiseBranchContextType | undefined>(undefined);

export function FranchiseBranchProvider({ children }: { children: React.ReactNode }) {
    const { state, dispatch } = useBaseReducer<FranchiseBranch>();
    return (
        <FranchiseBranchContext.Provider value={{ state, dispatch }}>
            {children}
        </FranchiseBranchContext.Provider>
    );
}

export const useFranchiseBranch = () => {
    const context = useContext(FranchiseBranchContext);
    if (!context) throw new Error("useFranchiseBranch must be used within a FranchiseBranchProvider");
    return context;
};
