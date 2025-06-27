export interface StockMovement {
    id: number;
    type: string; // "in" o "out"
    quantity: number;
    date: Date;
    stockItemId: number;
    storeId: number;
    userId?: number;
}
