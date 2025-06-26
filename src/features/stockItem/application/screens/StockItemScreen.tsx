import Table from "@/components/Table";
import { supabase } from "@/utils/supabaseClient";
import { useEffect, useState } from "react";

interface StockItem {
    id: number;
    name: string;
    quantity: number;
}

const StockItemScreen = () => {
    const [stockItems, setStockItems] = useState<StockItem[]>([]);

    useEffect(() => {
        const fetchStockItems = async () => {
            const { data, error } = await supabase.from("stockItem").select("*");
            if (error) console.error(error);
            else setStockItems(data || []);
        };

        fetchStockItems();
    }, []);

    const columns: { key: keyof StockItem; label: string }[] = [
        { key: "id", label: "ID" },
        { key: "name", label: "Name" },
        { key: "quantity", label: "Quantity" },
    ];

    return (
        <div>
            <h1>Stock Items</h1>
            <Table data={stockItems} columns={columns} />
        </div>
    );
};

export default StockItemScreen;
