import { FranchiseBranch } from "../../domain/entities/FranchiseBranch";
import { FranchiseBranchDatasource } from "../../domain/datasources/FranchiseBranchDatasource";
import { supabase } from "@/utils/supabaseClient";

export class FranchiseBranchDatasourceImp extends FranchiseBranchDatasource {
    async create(franchiseBranch: FranchiseBranch): Promise<FranchiseBranch> {
        const { data, error } = await supabase
            .from("franchiseBranch")
            .insert(franchiseBranch)
            .single();

        if (error) throw error;
        return data;
    }

    async findById(id: number): Promise<FranchiseBranch | null> {
        const { data, error } = await supabase
            .from("franchiseBranch")
            .select("*")
            .eq("id", id)
            .single();

        if (error) throw error;
        return data;
    }

    async findAll(): Promise<FranchiseBranch[]> {
        const { data, error } = await supabase
            .from("franchiseBranch")
            .select("*");

        if (error) throw error;
        return data;
    }

    async update(id: number, franchiseBranch: Partial<FranchiseBranch>): Promise<FranchiseBranch> {
        const { data, error } = await supabase
            .from("franchiseBranch")
            .update(franchiseBranch)
            .eq("id", id)
            .single();

        if (error) throw error;
        return data;
    }

    async delete(id: number): Promise<void> {
        const { error } = await supabase
            .from("franchiseBranch")
            .delete()
            .eq("id", id);

        if (error) throw error;
    }

    async createMany(franchiseBranches: FranchiseBranch[]): Promise<FranchiseBranch[]> {
        const { data, error } = await supabase
            .from("franchiseBranch")
            .insert(franchiseBranches);

        if (error) throw error;
        return data || [];
    }
}
