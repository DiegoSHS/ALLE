import { Order } from "../entities/Order";

export abstract class OrderDatasource {
    abstract create(order: Order): Promise<Order>;
    abstract findById(id: number): Promise<Order | null>;
    abstract findAll(): Promise<Order[]>;
    abstract update(id: number, order: Partial<Order>): Promise<Order>;
    abstract delete(id: number): Promise<void>;
}
