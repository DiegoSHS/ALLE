import { InventoryMovement } from "../../domain/entities/InventoryMovement";
import { InventoryMovementDatasource } from "../../domain/datasources/InventoryMovementDatasource";

export class InventoryMovementDatasourceImp extends InventoryMovementDatasource {
    async create(inventoryMovement: InventoryMovement): Promise<InventoryMovement> {
        throw new Error('Not implemented');
    }
    async findById(id: number): Promise<InventoryMovement | null> {
        throw new Error('Not implemented');
    }
    async findAll(): Promise<InventoryMovement[]> {
        throw new Error('Not implemented');
    }
    async update(id: number, inventoryMovement: Partial<InventoryMovement>): Promise<InventoryMovement> {
        throw new Error('Not implemented');
    }
    async delete(id: number): Promise<void> {
        throw new Error('Not implemented');
    }
}
