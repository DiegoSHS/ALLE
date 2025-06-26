import { ProductRetriever } from "../../domain/entities/ProductRetriever";
import { ProductRetrieverDatasource } from "../../domain/datasources/ProductRetrieverDatasource";
import { supabase } from "@/utils/supabaseClient";

export class ProductRetrieverDatasourceImp extends ProductRetrieverDatasource {
    async create(_product: ProductRetriever): Promise<ProductRetriever> {
        const { data, error } = await supabase
            .from("productRetriever")
            .insert(_product)
            .single();

        if (error) throw error;
        return data;
    }

    async findById(_id: number): Promise<ProductRetriever | null> {
        const { data, error } = await supabase
            .from("productRetriever")
            .select("*")
            .eq("id", _id)
            .single();

        if (error) throw error;
        return data;
    }

    async findAll(): Promise<ProductRetriever[]> {
        const { data, error } = await supabase
            .from("productRetriever")
            .select("*");

        if (error) throw error;
        return data;
    }

    async update(_id: number, _product: Partial<ProductRetriever>): Promise<ProductRetriever> {
        const { data, error } = await supabase
            .from("productRetriever")
            .update(_product)
            .eq("id", _id)
            .single();

        if (error) throw error;
        return data;
    }

    async delete(_id: number): Promise<void> {
        const { error } = await supabase
            .from("productRetriever")
            .delete()
            .eq("id", _id);

        if (error) throw error;
    }
}
