import { Store } from "../entities/Store";

export abstract class StoreDatasource {
    abstract create(store: Store): Promise<Store>;
    abstract findById(id: number): Promise<Store | null>;
    abstract findAll(): Promise<Store[]>;
    abstract update(id: number, store: Partial<Store>): Promise<Store>;
    abstract delete(id: number): Promise<void>;
}
