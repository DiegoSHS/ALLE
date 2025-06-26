import Table from "@/components/Table";
import { supabase } from "@/utils/supabaseClient";
import { useEffect, useState } from "react";

interface Order {
    id: number;
    product: string;
    quantity: number;
}

const OrderScreen = () => {
    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        const fetchOrders = async () => {
            const { data, error } = await supabase.from("order").select("*");
            if (error) console.error(error);
            else setOrders(data || []);
        };

        fetchOrders();
    }, []);

    const columns: { key: keyof Order; label: string }[] = [
        { key: "id", label: "ID" },
        { key: "product", label: "Product" },
        { key: "quantity", label: "Quantity" },
    ];

    return (
        <div>
            <h1>Orders</h1>
            <Table data={orders} columns={columns} />
        </div>
    );
};

export default OrderScreen;
