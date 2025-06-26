import { useParams } from "react-router-dom";

export function DynamicStock() {
    const { id } = useParams();
    console.log("DinamicStock id:", id);
    return (
        <div>
            dfdf
        </div>
    );

}