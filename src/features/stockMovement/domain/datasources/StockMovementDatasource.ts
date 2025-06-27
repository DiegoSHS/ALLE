import { StockMovement } from "../entities/StockMovement";

export abstract class StockMovementDatasource {
    abstract create(stockMovement: StockMovement): Promise<StockMovement>;
    abstract createMany(stockMovements: StockMovement[]): Promise<StockMovement[]>;
    abstract findById(id: number): Promise<StockMovement | null>;
    abstract findAll(): Promise<StockMovement[]>;
    abstract update(id: number, stockMovement: Partial<StockMovement>): Promise<StockMovement>;
    abstract delete(id: number): Promise<void>;
}
