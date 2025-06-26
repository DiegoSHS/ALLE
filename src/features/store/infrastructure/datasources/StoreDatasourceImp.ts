import { Store } from "../../domain/entities/Store";
import { StoreDatasource } from "../../domain/datasources/StoreDatasource";
import { supabase } from "@/utils/supabaseClient";

export class StoreDatasourceImp extends StoreDatasource {
    async create(store: Store): Promise<Store> {
        const { data, error } = await supabase
            .from("store")
            .insert(store)
            .single();

        if (error) throw error;
        return data;
    }

    async findById(id: number): Promise<Store | null> {
        const { data, error } = await supabase
            .from("store")
            .select("*")
            .eq("id", id)
            .single();

        if (error) throw error;
        return data;
    }

    async findAll(): Promise<Store[]> {
        const { data, error } = await supabase
            .from("store")
            .select("*");

        if (error) throw error;
        return data;
    }

    async update(id: number, store: Partial<Store>): Promise<Store> {
        const { data, error } = await supabase
            .from("store")
            .update(store)
            .eq("id", id)
            .single();

        if (error) throw error;
        return data;
    }

    async delete(id: number): Promise<void> {
        const { error } = await supabase
            .from("store")
            .delete()
            .eq("id", id);

        if (error) throw error;
    }

    async createMany(stores: Store[]): Promise<Store[]> {
        const { data, error } = await supabase
            .from("store")
            .insert(stores);

        if (error) throw error;
        return data || [];
    }
}
