import { User } from "../../domain/entities/User";
import { UserDatasource } from "../../domain/datasources/UserDatasource";
import { supabase } from "@/utils/supabaseClient";

export class UserDatasourceImp extends UserDatasource {
    async create(user: User): Promise<User> {
        const { data, error } = await supabase
            .from("user")
            .insert(user)
            .single();

        if (error) throw error;
        return data;
    }

    async findById(id: number): Promise<User | null> {
        const { data, error } = await supabase
            .from("user")
            .select("*")
            .eq("id", id)
            .single();

        if (error) throw error;
        return data;
    }

    async findAll(): Promise<User[]> {
        const { data, error } = await supabase
            .from("user")
            .select("*");

        if (error) throw error;
        return data;
    }

    async update(id: number, user: Partial<User>): Promise<User> {
        const { data, error } = await supabase
            .from("user")
            .update(user)
            .eq("id", id)
            .single();

        if (error) throw error;
        return data;
    }

    async delete(id: number): Promise<void> {
        const { error } = await supabase
            .from("user")
            .delete()
            .eq("id", id);

        if (error) throw error;
    }

    async createMany(users: User[]): Promise<User[]> {
        const { data, error } = await supabase
            .from("user")
            .insert(users);

        if (error) throw error;
        return data || [];
    }
}
