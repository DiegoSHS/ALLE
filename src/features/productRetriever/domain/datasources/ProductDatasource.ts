import { ProductRetriever } from "../entities/ProductRetriever";

export abstract class ProductRetrieverDatasource {
    abstract create(product: ProductRetriever): Promise<ProductRetriever>;
    abstract findById(id: number): Promise<ProductRetriever | null>;
    abstract findAll(): Promise<ProductRetriever[]>;
    abstract update(id: number, product: Partial<ProductRetriever>): Promise<ProductRetriever>;
    abstract delete(id: number): Promise<void>;
    abstract findByCategory(category: string): Promise<ProductRetriever[]>;
    abstract findByName(name: string): Promise<ProductRetriever[]>;
}
