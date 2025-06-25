import { OrderStock } from "../../domain/entities/OrderStock";
import { OrderStockRepository } from "../../domain/repository/OrderStockRepository";
import { OrderStockDatasource } from "../../domain/datasources/OrderStockDatasource";

export class OrderStockRepositoryImp extends OrderStockRepository {
    constructor(private readonly datasource: OrderStockDatasource) {
        super();
    }

    async create(orderStock: OrderStock): Promise<OrderStock> {
        return this.datasource.create(orderStock);
    }
    async findById(id: number): Promise<OrderStock | null> {
        return this.datasource.findById(id);
    }
    async findAll(): Promise<OrderStock[]> {
        return this.datasource.findAll();
    }
    async update(id: number, orderStock: Partial<OrderStock>): Promise<OrderStock> {
        return this.datasource.update(id, orderStock);
    }
    async delete(id: number): Promise<void> {
        return this.datasource.delete(id);
    }
}
