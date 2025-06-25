import { InventoryMovement } from "../../domain/entities/InventoryMovement";
import { InventoryMovementRepository } from "../../domain/repository/InventoryMovementRepository";
import { InventoryMovementDatasource } from "../../domain/datasources/InventoryMovementDatasource";

export class InventoryMovementRepositoryImp extends InventoryMovementRepository {
    constructor(private readonly datasource: InventoryMovementDatasource) {
        super();
    }

    async create(inventoryMovement: InventoryMovement): Promise<InventoryMovement> {
        return this.datasource.create(inventoryMovement);
    }
    async findById(id: number): Promise<InventoryMovement | null> {
        return this.datasource.findById(id);
    }
    async findAll(): Promise<InventoryMovement[]> {
        return this.datasource.findAll();
    }
    async update(id: number, inventoryMovement: Partial<InventoryMovement>): Promise<InventoryMovement> {
        return this.datasource.update(id, inventoryMovement);
    }
    async delete(id: number): Promise<void> {
        return this.datasource.delete(id);
    }
}
