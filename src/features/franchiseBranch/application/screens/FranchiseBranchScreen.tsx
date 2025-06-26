import Table from "@/components/Table";
import { supabase } from "@/utils/supabaseClient";
import { useState, useEffect } from "react";

interface FranchiseBranch {
    id: number;
    name: string;
    address: string;
}

const FranchiseBranchScreen = () => {
    const [franchiseBranches, setFranchiseBranches] = useState<FranchiseBranch[]>([]);

    useEffect(() => {
        const fetchFranchiseBranches = async () => {
            const { data, error } = await supabase.from("franchiseBranch").select("*");
            if (error) console.error(error);
            else setFranchiseBranches(data || []);
        };

        fetchFranchiseBranches();
    }, []);

    const columns: { key: keyof FranchiseBranch; label: string }[] = [
        { key: "id", label: "ID" },
        { key: "name", label: "Name" },
        { key: "address", label: "Address" },
    ];

    return (
        <div>
            <h1>Franchise Branches</h1>
            <Table data={franchiseBranches} columns={columns} />
        </div>
    );
};

export default FranchiseBranchScreen;
