import Table from "@/components/Table";
import { useStore } from "../providers/storeProvider";
import { Store } from "../../domain/entities/Store";

const StoreScreen = () => {
    const { state: { items } } = useStore();

    const columns: { key: keyof Store; label: string }[] = [
        { key: "id", label: "ID" },
        { key: "name", label: "Name" },
        { key: "address", label: "Address" },
        { key: "branchId", label: "Branch ID" },
    ];

    return (
        <div>
            <h1>Stores</h1>
            <Table data={items || []} columns={columns} />
        </div>
    );
};

export default StoreScreen;
