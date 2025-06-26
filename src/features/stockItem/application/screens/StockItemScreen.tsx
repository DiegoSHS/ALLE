import Table from "@/components/Table";
import { useStockItem } from "../providers/stockItemProvider";

interface StockItem {
    id: number;
    name: string;
    quantity: number;
}

const StockItemScreen = () => {
    const { state: { items } } = useStockItem();

    const columns: { key: keyof StockItem; label: string }[] = [
        { key: "id", label: "ID" },
        { key: "name", label: "Name" },
        { key: "quantity", label: "Quantity" },
    ];

    return (
        <div>
            <h1>Stock Items</h1>
            <Table data={items || []} columns={columns} />
        </div>
    );
};

export default StockItemScreen;
