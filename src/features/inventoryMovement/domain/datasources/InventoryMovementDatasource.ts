import { InventoryMovement } from "../entities/InventoryMovement";

export abstract class InventoryMovementDatasource {
    abstract create(inventoryMovement: InventoryMovement): Promise<InventoryMovement>;
    abstract findById(id: number): Promise<InventoryMovement | null>;
    abstract findAll(): Promise<InventoryMovement[]>;
    abstract update(id: number, inventoryMovement: Partial<InventoryMovement>): Promise<InventoryMovement>;
    abstract delete(id: number): Promise<void>;
}
