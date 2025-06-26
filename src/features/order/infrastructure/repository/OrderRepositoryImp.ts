import { Order } from "../../domain/entities/Order";
import { OrderRepository } from "../../domain/repository/OrderRepository";
import { OrderDatasource } from "../../domain/datasources/OrderDatasource";

export class OrderRepositoryImp extends OrderRepository {
    constructor(private readonly datasource: OrderDatasource) {
        super();
    }

    async create(order: Order): Promise<Order> {
        return this.datasource.create(order);
    }
    async findById(id: number): Promise<Order | null> {
        return this.datasource.findById(id);
    }
    async findAll(): Promise<Order[]> {
        return this.datasource.findAll();
    }
    async update(id: number, order: Partial<Order>): Promise<Order> {
        return this.datasource.update(id, order);
    }
    async delete(id: number): Promise<void> {
        return this.datasource.delete(id);
    }
}
