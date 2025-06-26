import { createContext, useContext } from "react";
import { ProductRetriever } from "../../domain/entities/ProductRetriever";
import { Action, BaseState, useBaseReducer } from "../../../../utils";

interface ProductRetrieverContextType {
    state: BaseState<ProductRetriever>;
    dispatch: React.Dispatch<Action<ProductRetriever>>;
}

const ProductRetrieverContext = createContext<ProductRetrieverContextType | undefined>(undefined);

export function ProductRetrieverProvider({ children }: { children: React.ReactNode }) {
    const { state, dispatch } = useBaseReducer<ProductRetriever>();
    return (
        <ProductRetrieverContext.Provider value={{ state, dispatch }}>
            {children}
        </ProductRetrieverContext.Provider>
    );
}

export const useProductRetriever = () => {
    const context = useContext(ProductRetrieverContext);
    if (!context) throw new Error("useProductRetriever must be used within a ProductRetrieverProvider");
    return context;
};
