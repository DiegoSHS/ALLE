import Table from "@/components/Table";
import { supabase } from "@/utils/supabaseClient";
import { useEffect, useState } from "react";

interface Stock {
    id: number;
    name: string;
    value: number;
}

const StockScreen = () => {
    const [stocks, setStocks] = useState<Stock[]>([]);

    useEffect(() => {
        const fetchStocks = async () => {
            const { data, error } = await supabase.from("stock").select("*");
            if (error) console.error(error);
            else setStocks(data || []);
        };

        fetchStocks();
    }, []);

    const columns: { key: keyof Stock; label: string }[] = [
        { key: "id", label: "ID" },
        { key: "name", label: "Name" },
        { key: "value", label: "Value" },
    ];

    return (
        <div>
            <h1>Stocks</h1>
            <Table data={stocks} columns={columns} />
        </div>
    );
};

export default StockScreen;
