import Table from "@/components/Table";
import { useOrder } from "../providers/orderProvider";
import { Order } from "../../domain/entities/Order";

const OrderScreen = () => {
    const { state: { items } } = useOrder();

    const columns: { key: keyof Order; label: string }[] = [
        { key: "id", label: "ID" },
        { key: "clientId", label: "Client ID" },
    ];

    return (
        <div>
            <h1>Orders</h1>
            <Table data={items || []} columns={columns} />
        </div>
    );
};

export default OrderScreen;
