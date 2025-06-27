import Table from "@/components/Table";
import { useStock } from "../providers/stockProvider";
import { useEffect } from "react";
import { Stock } from "../../domain/entities/Stock";

const StockScreen = () => {
    const { state: { items }, fetchStocks } = useStock();

    const columns: { key: keyof Stock; label: string }[] = [
        { key: "id", label: "ID" },
        { key: "storeId", label: "Store ID" },
        { key: "startDate", label: "Start Date" },
        { key: "endDate", label: "End Date" },
    ];

    useEffect(() => {
        fetchStocks();
    }, [fetchStocks]);

    return (
        <div>
            <h1>Stocks</h1>
            <Table data={items || []} columns={columns} />
        </div>
    );
};

export default StockScreen;
