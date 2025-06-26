import { InventoryMovement } from "../../domain/entities/InventoryMovement";
import { InventoryMovementDatasource } from "../../domain/datasources/InventoryMovementDatasource";
import { supabase } from "@/utils/supabaseClient";

export class InventoryMovementDatasourceImp extends InventoryMovementDatasource {
    async create(inventoryMovement: InventoryMovement): Promise<InventoryMovement> {
        const { data, error } = await supabase
            .from("inventoryMovement")
            .insert(inventoryMovement)
            .single();

        if (error) throw error;
        return data;
    }

    async findById(id: number): Promise<InventoryMovement | null> {
        const { data, error } = await supabase
            .from("inventoryMovement")
            .select("*")
            .eq("id", id)
            .single();

        if (error) throw error;
        return data;
    }

    async findAll(): Promise<InventoryMovement[]> {
        const { data, error } = await supabase
            .from("inventoryMovement")
            .select("*");

        if (error) throw error;
        return data;
    }

    async update(id: number, inventoryMovement: Partial<InventoryMovement>): Promise<InventoryMovement> {
        const { data, error } = await supabase
            .from("inventoryMovement")
            .update(inventoryMovement)
            .eq("id", id)
            .single();

        if (error) throw error;
        return data;
    }

    async delete(id: number): Promise<void> {
        const { error } = await supabase
            .from("inventoryMovement")
            .delete()
            .eq("id", id);

        if (error) throw error;
    }

    async createMany(inventoryMovements: InventoryMovement[]): Promise<InventoryMovement[]> {
        const { data, error } = await supabase
            .from("inventoryMovement")
            .insert(inventoryMovements);

        if (error) throw error;
        return data || [];
    }
}
