import { Order } from "../../domain/entities/Order";
import { OrderDatasource } from "../../domain/datasources/OrderDatasource";
import { supabase } from "@/utils/supabaseClient";

export class OrderDatasourceImp extends OrderDatasource {
    async create(order: Order): Promise<Order> {
        const { data, error } = await supabase
            .from("order")
            .insert(order)
            .single();

        if (error) throw error;
        return data;
    }

    async findById(id: number): Promise<Order | null> {
        const { data, error } = await supabase
            .from("order")
            .select("*")
            .eq("id", id)
            .single();

        if (error) throw error;
        return data;
    }

    async findAll(): Promise<Order[]> {
        const { data, error } = await supabase
            .from("order")
            .select("*");

        if (error) throw error;
        return data;
    }

    async update(id: number, order: Partial<Order>): Promise<Order> {
        const { data, error } = await supabase
            .from("order")
            .update(order)
            .eq("id", id)
            .single();

        if (error) throw error;
        return data;
    }

    async delete(id: number): Promise<void> {
        const { error } = await supabase
            .from("order")
            .delete()
            .eq("id", id);

        if (error) throw error;
    }

    async createMany(orders: Order[]): Promise<Order[]> {
        const { data, error } = await supabase
            .from("order")
            .insert(orders);

        if (error) throw error;
        return data || [];
    }
}
