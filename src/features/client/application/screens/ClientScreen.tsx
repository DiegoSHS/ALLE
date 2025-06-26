import Table from "@/components/Table";
import { supabase } from "@/utils/supabaseClient";
import { useEffect, useState } from "react";

interface Client {
    id: number;
    name: string;
    contact: string;
}

const ClientScreen = () => {
    const [clients, setClients] = useState<Client[]>([]);

    useEffect(() => {
        const fetchClients = async () => {
            const { data, error } = await supabase.from("client").select("*");
            if (error) console.error(error);
            else setClients(data || []);
        };

        fetchClients();
    }, []);

    const columns: { key: keyof Client; label: string }[] = [
        { key: "id", label: "ID" },
        { key: "name", label: "Name" },
        { key: "contact", label: "Contact" },
    ];

    return (
        <div>
            <h1>Clients</h1>
            <Table data={clients} columns={columns} />
        </div>
    );
};

export default ClientScreen;
