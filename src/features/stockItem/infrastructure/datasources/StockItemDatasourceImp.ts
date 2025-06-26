import { StockItem } from "../../domain/entities/StockItem";
import { StockItemDatasource } from "../../domain/datasources/StockItemDatasource";
import { supabase } from "@/utils/supabaseClient";

export class StockItemDatasourceImp extends StockItemDatasource {
    async create(stockItem: StockItem): Promise<StockItem> {
        const { data, error } = await supabase
            .from("stockItem")
            .insert(stockItem)
            .single();

        if (error) throw error;
        return data;
    }

    async findById(id: number): Promise<StockItem | null> {
        const { data, error } = await supabase
            .from("stockItem")
            .select("*")
            .eq("id", id)
            .single();

        if (error) throw error;
        return data;
    }

    async findAll(): Promise<StockItem[]> {
        const { data, error } = await supabase
            .from("stockItem")
            .select("*");

        if (error) throw error;
        return data;
    }

    async update(id: number, stockItem: Partial<StockItem>): Promise<StockItem> {
        const { data, error } = await supabase
            .from("stockItem")
            .update(stockItem)
            .eq("id", id)
            .single();

        if (error) throw error;
        return data;
    }

    async delete(id: number): Promise<void> {
        const { error } = await supabase
            .from("stockItem")
            .delete()
            .eq("id", id);

        if (error) throw error;
    }

    async createMany(stockItems: StockItem[]): Promise<StockItem[]> {
        const { data, error } = await supabase
            .from("stockItem")
            .insert(stockItems);

        if (error) throw error;
        return data || [];
    }
}
