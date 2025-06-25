import { Stock } from "../../domain/entities/Stock";
import { StockDatasource } from "../../domain/datasources/StockDatasource";

export class StockDatasourceImp extends StockDatasource {
    async create(stock: Stock): Promise<Stock> {
        throw new Error('Not implemented');
    }
    async findById(id: number): Promise<Stock | null> {
        throw new Error('Not implemented');
    }
    async findAll(): Promise<Stock[]> {
        throw new Error('Not implemented');
    }
    async update(id: number, stock: Partial<Stock>): Promise<Stock> {
        throw new Error('Not implemented');
    }
    async delete(id: number): Promise<void> {
        throw new Error('Not implemented');
    }
}
