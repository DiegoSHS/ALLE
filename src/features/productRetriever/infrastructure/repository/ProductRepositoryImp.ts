import { ProductRetrieverRepository } from "../../domain/repository/ProductRepository";
import { ProductRetrieverDatasourceImp } from "../datasources/ProductDatasourceImp";

export class ProductRetrieverRepositoryImp extends ProductRetrieverRepository {
    private datasource: ProductRetrieverDatasourceImp;

    constructor(datasource: ProductRetrieverDatasourceImp) {
        super();
        this.datasource = datasource;
    }

    async create(product: import("../../domain/entities/ProductRetriever").ProductRetriever) {
        return this.datasource.create(product);
    }

    async findById(id: number) {
        return this.datasource.findById(id);
    }

    async findAll() {
        return this.datasource.findAll();
    }

    async update(id: number, product: Partial<import("../../domain/entities/ProductRetriever").ProductRetriever>) {
        return this.datasource.update(id, product);
    }

    async delete(id: number) {
        return this.datasource.delete(id);
    }

    async findByCategory(category: string) {
        return this.datasource.findByCategory(category);
    }

    async findByName(name: string) {
        return this.datasource.findByName(name);
    }
}
