import { Stock } from "../../domain/entities/Stock";
import { StockDatasource } from "../../domain/datasources/StockDatasource";
import { supabase } from "@/utils/supabaseClient";

export class StockDatasourceImp extends StockDatasource {
    async create(stock: Stock): Promise<Stock> {
        const { data, error } = await supabase
            .from("stock")
            .insert(stock)
            .single();

        if (error) throw error;
        return data;
    }

    async createMany(stocks: Stock[]): Promise<Stock[]> {
        const { data, error } = await supabase
            .from("stock")
            .insert(stocks);

        if (error) throw error;
        return data || [];
    }

    async findById(id: number): Promise<Stock | null> {
        const { data, error } = await supabase
            .from("stock")
            .select("*")
            .eq("id", id)
            .single();

        if (error) throw error;
        return data;
    }

    async findAll(): Promise<Stock[]> {
        const { data, error } = await supabase
            .from("stock")
            .select("*");

        if (error) throw error;
        return data;
    }

    async update(id: number, stock: Partial<Stock>): Promise<Stock> {
        const { data, error } = await supabase
            .from("stock")
            .update(stock)
            .eq("id", id)
            .single();

        if (error) throw error;
        return data;
    }

    async delete(id: number): Promise<void> {
        const { error } = await supabase
            .from("stock")
            .delete()
            .eq("id", id);

        if (error) throw error;
    }
}
