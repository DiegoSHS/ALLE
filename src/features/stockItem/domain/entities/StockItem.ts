export interface StockItem {
    id: number;
    stockId: number;
    name: string;
    publicPrice: number;
    mayorPrice: number;
    quantity: number;
    description?: string;
    quantityBase: number;
}
