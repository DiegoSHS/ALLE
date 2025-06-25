import { Order } from "../../domain/entities/Order";
import { OrderDatasource } from "../../domain/datasources/OrderDatasource";

export class OrderDatasourceImp extends OrderDatasource {
    async create(order: Order): Promise<Order> {
        throw new Error('Not implemented');
    }
    async findById(id: number): Promise<Order | null> {
        throw new Error('Not implemented');
    }
    async findAll(): Promise<Order[]> {
        throw new Error('Not implemented');
    }
    async update(id: number, order: Partial<Order>): Promise<Order> {
        throw new Error('Not implemented');
    }
    async delete(id: number): Promise<void> {
        throw new Error('Not implemented');
    }
}
