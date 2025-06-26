import { useReducer } from "react";

export interface Action<T> {
    type: 'SET' | 'CREATE' | 'UPDATE' | 'DESELECT' | 'DELETE' | 'SELECT' | 'RESET';
    payload?: T | T[];
}

export interface BaseState<T> {
    items: T[];
    selectedItem?: T;
}

export interface BaseItem {
    id?: number;
}

export function BaseReducer<T extends BaseItem>({ items, selectedItem }: BaseState<T>, { type, payload }: Action<T>): BaseState<T> {
    switch (type) {
        case "SET":
            return {
                items: payload as T[],
                selectedItem
            };
        case "CREATE":
            return {
                items: [...items, payload as T],
                selectedItem
            };
        case "UPDATE":
            return {
                items: items.map(item => item.id === selectedItem?.id ? payload as T : item),
                selectedItem
            };
        case "DESELECT":
            return {
                items,
                selectedItem: undefined
            };
        case "DELETE":
            return {
                items: items.filter(item => item.id !== (payload as T).id),
                selectedItem
            };
        case "SELECT":
            return {
                items,
                selectedItem: payload as T
            };
        case "RESET":
            return {
                items: [],
                selectedItem: undefined
            };
        default:
            return {
                items,
                selectedItem
            };
    }
}

export function useBaseReducer<T extends BaseItem>() {
    const [state, dispatch] = useReducer(BaseReducer<T>, {
        items: [],
        selectedItem: undefined
    });
    return { state, dispatch };
}
