import { Stock } from "../../domain/entities/Stock";
import { StockRepository } from "../../domain/repository/StockRepository";
import { StockDatasource } from "../../domain/datasources/StockDatasource";

export class StockRepositoryImp extends StockRepository {
    constructor(private readonly datasource: StockDatasource) {
        super();
    }

    async create(stock: Stock): Promise<Stock> {
        return this.datasource.create(stock);
    }

    async findById(id: number): Promise<Stock | null> {
        return this.datasource.findById(id);
    }

    async findAll(): Promise<Stock[]> {
        return this.datasource.findAll();
    }

    async update(id: number, stock: Partial<Stock>): Promise<Stock> {
        return this.datasource.update(id, stock);
    }

    async delete(id: number): Promise<void> {
        return this.datasource.delete(id);
    }

    async createMany(stocks: Stock[]): Promise<Stock[]> {
        return this.datasource.createMany(stocks);
    }
}