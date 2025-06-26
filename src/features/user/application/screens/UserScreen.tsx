import Table from "@/components/Table";
import { supabase } from "@/utils/supabaseClient";
import { useEffect, useState } from "react";

interface User {
    id: number;
    name: string;
    email: string;
}

const UserScreen = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const { data, error } = await supabase.from("user").select("*");
            if (error) console.error(error);
            else setUsers(data || []);
        };

        fetchUsers();
    }, []);

    const columns: { key: keyof User; label: string }[] = [
        { key: "id", label: "ID" },
        { key: "name", label: "Name" },
        { key: "email", label: "Email" },
    ];

    return (
        <div>
            <h1>Users</h1>
            <Table data={users} columns={columns} />
        </div>
    );
};

export default UserScreen;
