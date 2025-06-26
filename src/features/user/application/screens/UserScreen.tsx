import Table from "@/components/Table";
import { useUser } from "../providers/userProvider";
import { User } from "../../domain/entities/User";

const UserScreen = () => {
    const { state: { items } } = useUser();

    const columns: { key: keyof User; label: string }[] = [
        { key: "id", label: "ID" },
        { key: "name", label: "Name" },
        { key: "role", label: "Role" },
    ];

    return (
        <div>
            <h1>Users</h1>
            <Table data={items || []} columns={columns} />
        </div>
    );
};

export default UserScreen;
