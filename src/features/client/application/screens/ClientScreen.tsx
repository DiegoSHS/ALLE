import Table from "@/components/Table";
import { useClient } from "../providers/clientProvider";
import { Client } from "../../domain/entities/Client";

const ClientScreen = () => {
    const { state: { items } } = useClient();

    const columns: { key: keyof Client; label: string }[] = [
        { key: "id", label: "ID" },
    ];

    return (
        <div>
            <h1>Clients</h1>
            <Table data={items || []} columns={columns} />
        </div>
    );
};

export default ClientScreen;
