import { Store } from "../../domain/entities/Store";
import { StoreDatasource } from "../../domain/datasources/StoreDatasource";

export class StoreDatasourceImp extends StoreDatasource {
    async create(store: Store): Promise<Store> {
        throw new Error('Not implemented');
    }
    async findById(id: number): Promise<Store | null> {
        throw new Error('Not implemented');
    }
    async findAll(): Promise<Store[]> {
        throw new Error('Not implemented');
    }
    async update(id: number, store: Partial<Store>): Promise<Store> {
        throw new Error('Not implemented');
    }
    async delete(id: number): Promise<void> {
        throw new Error('Not implemented');
    }
}
