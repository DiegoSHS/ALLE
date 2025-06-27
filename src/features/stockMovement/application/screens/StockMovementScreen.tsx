import Table from "@/components/Table";
import { useStockMovement } from "../providers/stockMovementProvider";
import { StockMovement } from "../../domain/entities/StockMovement";

const StockMovementScreen = () => {
    const { state: { items } } = useStockMovement();

    const columns: { key: keyof StockMovement; label: string }[] = [
        { key: "id", label: "ID" },
        { key: "type", label: "Type" },
        { key: "quantity", label: "Quantity" },
        { key: "date", label: "Date" },
        { key: "stockItemId", label: "Stock Item ID" },
        { key: "storeId", label: "Store ID" },
        { key: "userId", label: "User ID" },
    ];

    return (
        <div>
            <h1>Stock Movements</h1>
            <Table data={items || []} columns={columns} />
        </div>
    );
};

export default StockMovementScreen;
