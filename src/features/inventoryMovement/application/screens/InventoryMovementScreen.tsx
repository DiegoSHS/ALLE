import Table from "@/components/Table";
import { useInventoryMovement } from "../providers/inventoryMovementProvider";
import { InventoryMovement } from "../../domain/entities/InventoryMovement";

const InventoryMovementScreen = () => {
    const { state: { items } } = useInventoryMovement();

    const columns: { key: keyof InventoryMovement; label: string }[] = [
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
            <h1>Inventory Movements</h1>
            <Table data={items || []} columns={columns} />
        </div>
    );
};

export default InventoryMovementScreen;
