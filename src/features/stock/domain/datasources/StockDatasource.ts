import { Stock } from "../entities/Stock";

export abstract class StockDatasource {
    abstract create(stock: Stock): Promise<Stock>;
    abstract findById(id: number): Promise<Stock | null>;
    abstract findAll(): Promise<Stock[]>;
    abstract update(id: number, stock: Partial<Stock>): Promise<Stock>;
    abstract delete(id: number): Promise<void>;
}
