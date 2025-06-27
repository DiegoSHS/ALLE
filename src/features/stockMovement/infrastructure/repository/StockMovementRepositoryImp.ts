import { StockMovement } from "../../domain/entities/StockMovement";
import { StockMovementRepository } from "../../domain/repository/StockMovementRepository";
import { StockMovementDatasource } from "../../domain/datasources/StockMovementDatasource";

export class StockMovementRepositoryImp extends StockMovementRepository {
    constructor(private readonly datasource: StockMovementDatasource) {
        super();
    }

    async create(stockMovement: StockMovement): Promise<StockMovement> {
        return this.datasource.create(stockMovement);
    }
    async findById(id: number): Promise<StockMovement | null> {
        return this.datasource.findById(id);
    }
    async findAll(): Promise<StockMovement[]> {
        return this.datasource.findAll();
    }
    async update(id: number, stockMovement: Partial<StockMovement>): Promise<StockMovement> {
        return this.datasource.update(id, stockMovement);
    }
    async delete(id: number): Promise<void> {
        return this.datasource.delete(id);
    }
}
