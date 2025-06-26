import { ProductRetriever } from "../../domain/entities/ProductRetriever";
import { ProductRetrieverDatasource } from "../../domain/datasources/ProductDatasource";

export class ProductRetrieverDatasourceImp extends ProductRetrieverDatasource {
    async create(_product: ProductRetriever): Promise<ProductRetriever> {
        throw new Error('Not implemented');
    }

    async findById(_id: number): Promise<ProductRetriever | null> {
        throw new Error('Not implemented');
    }

    async findAll(): Promise<ProductRetriever[]> {
        throw new Error('Not implemented');
    }

    async update(_id: number, _product: Partial<ProductRetriever>): Promise<ProductRetriever> {
        throw new Error('Not implemented');
    }

    async delete(_id: number): Promise<void> {
        throw new Error('Not implemented');
    }

    async findByCategory(_category: string): Promise<ProductRetriever[]> {
        throw new Error('Not implemented');
    }

    async findByName(_name: string): Promise<ProductRetriever[]> {
        throw new Error('Not implemented');
    }
}
