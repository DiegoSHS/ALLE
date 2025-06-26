import { Table as HeroTable, TableHeader, TableRow, TableCell, TableBody } from "@heroui/react";

interface TableProps<T> {
    data: T[];
    columns: { key: keyof T; label: string }[];
}

export const Table = <T,>({ data, columns }: TableProps<T>) => {
    return (
        <HeroTable>
            <TableHeader>
                <TableRow>
                    {columns.map((column) => (
                        <TableCell key={String(column.key)}>{column.label}</TableCell>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((row, rowIndex) => (
                    <TableRow key={rowIndex}>
                        {columns.map((column) => (
                            <TableCell key={String(column.key)}>{String(row[column.key])}</TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </HeroTable>
    );
};

export default Table;
