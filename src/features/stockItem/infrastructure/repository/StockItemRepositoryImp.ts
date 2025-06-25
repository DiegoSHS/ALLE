import { StockItem } from "../../domain/entities/StockItem";
import { StockItemRepository } from "../../domain/repository/StockItemRepository";
import { StockItemDatasource } from "../../domain/datasources/StockItemDatasource";

export class StockItemRepositoryImp extends StockItemRepository {
    constructor(private readonly datasource: StockItemDatasource) {
        super();
    }

    async create(stockItem: StockItem): Promise<StockItem> {
        return this.datasource.create(stockItem);
    }
    async findById(id: number): Promise<StockItem | null> {
        return this.datasource.findById(id);
    }
    async findAll(): Promise<StockItem[]> {
        return this.datasource.findAll();
    }
    async update(id: number, stockItem: Partial<StockItem>): Promise<StockItem> {
        return this.datasource.update(id, stockItem);
    }
    async delete(id: number): Promise<void> {
        return this.datasource.delete(id);
    }
}
