import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/react"
import { Stock } from "../../domain/entities/Stock"
import { Empty } from "@/components/Empty"

interface StockTableProps {
    data: Stock[]
}

export const StockTable = ({ data }: StockTableProps) => {
    return (
        <Table>
            <TableHeader>
                <TableColumn key="storeId">Store ID</TableColumn>
                <TableColumn key="startDate">Start Date</TableColumn>
                <TableColumn key="endDate">End Date</TableColumn>
            </TableHeader>
            <TableBody items={data} emptyContent={<Empty />}>
                {(item) => (
                    <TableRow key={item.id}>
                        <TableCell>{item.startDate.toISOString()}</TableCell>
                        <TableCell>{item.storeId}</TableCell>
                        <TableCell>{item.endDate?.toISOString()}</TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    )
}