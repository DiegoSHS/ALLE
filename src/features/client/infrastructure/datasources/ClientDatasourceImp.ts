import { Client } from "../../domain/entities/Client";
import { ClientDatasource } from "../../domain/datasources/ClientDatasource";
import { supabase } from "@/utils/supabaseClient";

export class ClientDatasourceImp extends ClientDatasource {
    async create(client: Client): Promise<Client> {
        const { data, error } = await supabase
            .from("client")
            .insert(client)
            .single();

        if (error) throw error;
        return data;
    }

    async findById(id: number): Promise<Client | null> {
        const { data, error } = await supabase
            .from("client")
            .select("*")
            .eq("id", id)
            .single();

        if (error) throw error;
        return data;
    }

    async findAll(): Promise<Client[]> {
        const { data, error } = await supabase
            .from("client")
            .select("*");

        if (error) throw error;
        return data;
    }

    async update(id: number, client: Partial<Client>): Promise<Client> {
        const { data, error } = await supabase
            .from("client")
            .update(client)
            .eq("id", id)
            .single();

        if (error) throw error;
        return data;
    }

    async delete(id: number): Promise<void> {
        const { error } = await supabase
            .from("client")
            .delete()
            .eq("id", id);

        if (error) throw error;
    }

    async createMany(clients: Client[]): Promise<Client[]> {
        const { data, error } = await supabase
            .from("client")
            .insert(clients);

        if (error) throw error;
        return data || [];
    }
}
