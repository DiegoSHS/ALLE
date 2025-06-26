import { StockItem } from "../entities/StockItem";

export abstract class StockItemDatasource {
    abstract create(stockItem: StockItem): Promise<StockItem>;
    abstract createMany(stockItems: StockItem[]): Promise<StockItem[]>;
    abstract findById(id: number): Promise<StockItem | null>;
    abstract findAll(): Promise<StockItem[]>;
    abstract update(id: number, stockItem: Partial<StockItem>): Promise<StockItem>;
    abstract delete(id: number): Promise<void>;
}
