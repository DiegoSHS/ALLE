import { OrderStock } from "../../domain/entities/OrderStock";
import { OrderStockDatasource } from "../../domain/datasources/OrderStockDatasource";

export class OrderStockDatasourceImp extends OrderStockDatasource {
    async create(orderStock: OrderStock): Promise<OrderStock> {
        throw new Error('Not implemented');
    }
    async findById(id: number): Promise<OrderStock | null> {
        throw new Error('Not implemented');
    }
    async findAll(): Promise<OrderStock[]> {
        throw new Error('Not implemented');
    }
    async update(id: number, orderStock: Partial<OrderStock>): Promise<OrderStock> {
        throw new Error('Not implemented');
    }
    async delete(id: number): Promise<void> {
        throw new Error('Not implemented');
    }
}
