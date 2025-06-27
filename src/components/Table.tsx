import { BaseItem } from "@/utils";
import { Table as HeroTable, TableHeader, TableRow, TableCell, TableBody } from "@heroui/react";

interface TableProps<T extends BaseItem> {
    data: T[];
    columns: { key: keyof T; label: string }[];
}

export const Table = <T extends BaseItem>({ data, columns }: TableProps<T>) => {
    return (
        <HeroTable>
            <TableHeader>
                <TableRow>
                    {columns.map((column) => (
                        <TableCell key={String(column.key)}>{column.label}</TableCell>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody items={data}>
                {
                    (row) => (
                        <TableRow key={row.id}>
                            {columns.map((column) => (
                                <TableCell key={String(column.key)}>{String(row[column.key])}
                                </TableCell>
                            ))}
                        </TableRow>
                    )
                }
            </TableBody>
        </HeroTable>
    );
};

export default Table;
