import Table from "@/components/Table";
import { supabase } from "@/utils/supabaseClient";
import { useEffect, useState } from "react";

interface Store {
    id: number;
    name: string;
    location: string;
}

const StoreScreen = () => {
    const [stores, setStores] = useState<Store[]>([]);

    useEffect(() => {
        const fetchStores = async () => {
            const { data, error } = await supabase.from("store").select("*");
            if (error) console.error(error);
            else setStores(data || []);
        };

        fetchStores();
    }, []);

    const columns: { key: keyof Store; label: string }[] = [
        { key: "id", label: "ID" },
        { key: "name", label: "Name" },
        { key: "location", label: "Location" },
    ];

    return (
        <div>
            <h1>Stores</h1>
            <Table data={stores} columns={columns} />
        </div>
    );
};

export default StoreScreen;
