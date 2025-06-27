import { StockMovement } from "../../domain/entities/StockMovement";
import { StockMovementDatasource } from "../../domain/datasources/StockMovementDatasource";
import { supabase } from "@/utils/supabaseClient";

export class StockMovementDatasourceImp extends StockMovementDatasource {
    async create(stockMovement: StockMovement): Promise<StockMovement> {
        const { data, error } = await supabase
            .from("stockMovement")
            .insert(stockMovement)
            .single();

        if (error) throw error;
        return data;
    }

    async findById(id: number): Promise<StockMovement | null> {
        const { data, error } = await supabase
            .from("stockMovement")
            .select("*")
            .eq("id", id)
            .single();

        if (error) throw error;
        return data;
    }

    async findAll(): Promise<StockMovement[]> {
        const { data, error } = await supabase
            .from("stockMovement")
            .select("*");

        if (error) throw error;
        return data;
    }

    async update(id: number, stockMovement: Partial<StockMovement>): Promise<StockMovement> {
        const { data, error } = await supabase
            .from("stockMovement")
            .update(stockMovement)
            .eq("id", id)
            .single();

        if (error) throw error;
        return data;
    }

    async delete(id: number): Promise<void> {
        const { error } = await supabase
            .from("stockMovement")
            .delete()
            .eq("id", id);

        if (error) throw error;
    }
}
