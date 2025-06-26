import Table from "@/components/Table";
import { useFranchiseBranch } from "../providers/franchiseBranchProvider";
import { FranchiseBranch } from "../../domain/entities/FranchiseBranch";

const FranchiseBranchScreen = () => {
    const { state: { items } } = useFranchiseBranch();

    const columns: { key: keyof FranchiseBranch; label: string }[] = [
        { key: "id", label: "ID" },
        { key: "address", label: "Address" },
    ];

    return (
        <div>
            <h1>Franchise Branches</h1>
            <Table data={items || []} columns={columns} />
        </div>
    );
};

export default FranchiseBranchScreen;
