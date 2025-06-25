import { StockItem } from "../../domain/entities/StockItem";
import { StockItemDatasource } from "../../domain/datasources/StockItemDatasource";

export class StockItemDatasourceImp extends StockItemDatasource {
    async create(stockItem: StockItem): Promise<StockItem> {
        throw new Error('Not implemented');
    }
    async findById(id: number): Promise<StockItem | null> {
        throw new Error('Not implemented');
    }
    async findAll(): Promise<StockItem[]> {
        throw new Error('Not implemented');
    }
    async update(id: number, stockItem: Partial<StockItem>): Promise<StockItem> {
        throw new Error('Not implemented');
    }
    async delete(id: number): Promise<void> {
        throw new Error('Not implemented');
    }
}
