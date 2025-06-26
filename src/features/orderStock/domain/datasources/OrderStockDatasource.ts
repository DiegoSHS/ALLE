import { OrderStock } from "../entities/OrderStock";

export abstract class OrderStockDatasource {
    abstract create(orderStock: OrderStock): Promise<OrderStock>;
    abstract findById(id: number): Promise<OrderStock | null>;
    abstract findAll(): Promise<OrderStock[]>;
    abstract update(id: number, orderStock: Partial<OrderStock>): Promise<OrderStock>;
    abstract delete(id: number): Promise<void>;
}
