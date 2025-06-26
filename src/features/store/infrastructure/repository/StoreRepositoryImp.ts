import { Store } from "../../domain/entities/Store";
import { StoreRepository } from "../../domain/repository/StoreRepository";
import { StoreDatasource } from "../../domain/datasources/StoreDatasource";

export class StoreRepositoryImp extends StoreRepository {
    constructor(private readonly datasource: StoreDatasource) {
        super();
    }

    async create(store: Store): Promise<Store> {
        return this.datasource.create(store);
    }
    async findById(id: number): Promise<Store | null> {
        return this.datasource.findById(id);
    }
    async findAll(): Promise<Store[]> {
        return this.datasource.findAll();
    }
    async update(id: number, store: Partial<Store>): Promise<Store> {
        return this.datasource.update(id, store);
    }
    async delete(id: number): Promise<void> {
        return this.datasource.delete(id);
    }
}
