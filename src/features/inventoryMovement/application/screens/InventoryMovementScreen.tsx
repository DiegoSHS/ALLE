import Table from "@/components/Table";
import { supabase } from "@/utils/supabaseClient";
import { useEffect, useState } from "react";

interface InventoryMovement {
    id: number;
    product: string;
    movementType: string;
}

const InventoryMovementScreen = () => {
    const [inventoryMovements, setInventoryMovements] = useState<InventoryMovement[]>([]);

    useEffect(() => {
        const fetchInventoryMovements = async () => {
            const { data, error } = await supabase.from("inventoryMovement").select("*");
            if (error) console.error(error);
            else setInventoryMovements(data || []);
        };

        fetchInventoryMovements();
    }, []);

    const columns: { key: keyof InventoryMovement; label: string }[] = [
        { key: "id", label: "ID" },
        { key: "product", label: "Product" },
        { key: "movementType", label: "Movement Type" },
    ];

    return (
        <div>
            <h1>Inventory Movements</h1>
            <Table data={inventoryMovements} columns={columns} />
        </div>
    );
};

export default InventoryMovementScreen;
