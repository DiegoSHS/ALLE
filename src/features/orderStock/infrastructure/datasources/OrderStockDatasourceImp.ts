import { OrderStock } from "../../domain/entities/OrderStock";
import { OrderStockDatasource } from "../../domain/datasources/OrderStockDatasource";
import { supabase } from "@/utils/supabaseClient";

export class OrderStockDatasourceImp extends OrderStockDatasource {
    async create(orderStock: OrderStock): Promise<OrderStock> {
        const { data, error } = await supabase
            .from("orderStock")
            .insert(orderStock)
            .single();

        if (error) throw error;
        return data;
    }

    async findById(id: number): Promise<OrderStock | null> {
        const { data, error } = await supabase
            .from("orderStock")
            .select("*")
            .eq("id", id)
            .single();

        if (error) throw error;
        return data;
    }

    async findAll(): Promise<OrderStock[]> {
        const { data, error } = await supabase
            .from("orderStock")
            .select("*");

        if (error) throw error;
        return data;
    }

    async update(id: number, orderStock: Partial<OrderStock>): Promise<OrderStock> {
        const { data, error } = await supabase
            .from("orderStock")
            .update(orderStock)
            .eq("id", id)
            .single();

        if (error) throw error;
        return data;
    }

    async delete(id: number): Promise<void> {
        const { error } = await supabase
            .from("orderStock")
            .delete()
            .eq("id", id);

        if (error) throw error;
    }

    async createMany(orderStocks: OrderStock[]): Promise<OrderStock[]> {
        const { data, error } = await supabase
            .from("orderStock")
            .insert(orderStocks);

        if (error) throw error;
        return data || [];
    }
}
