import { ProductRetriever } from "../../domain/entities/ProductRetriever";
import { ProductRetrieverRepository } from "../../domain/repository/ProductRetrieverRepository";
import { ProductRetrieverDatasourceImp } from "../datasources/ProductRetrieverDatasourceImp";

export class ProductRetrieverRepositoryImp extends ProductRetrieverRepository {
    private datasource: ProductRetrieverDatasourceImp;

    constructor(datasource: ProductRetrieverDatasourceImp) {
        super();
        this.datasource = datasource;
    }

    async create(product: ProductRetriever) {
        return this.datasource.create(product);
    }

    async findById(id: number) {
        return this.datasource.findById(id);
    }

    async findAll() {
        return this.datasource.findAll();
    }

    async update(id: number, product: Partial<ProductRetriever>) {
        return this.datasource.update(id, product);
    }

    async delete(id: number) {
        return this.datasource.delete(id);
    }
}
