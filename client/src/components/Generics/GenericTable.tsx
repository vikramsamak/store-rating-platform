import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

interface GenericTableProps<T> {
  tableCaption?: string;
  tableHeaders: string[];
  data: T[];
  renderRow: (item: T, index: number) => React.ReactNode;
}

export const GenericTable = <T,>({
  tableCaption,
  tableHeaders,
  data,
  renderRow,
}: GenericTableProps<T>) => {
  return (
    <Table>
      {tableCaption && <TableCaption>{tableCaption}</TableCaption>}

      <TableHeader>
        <TableRow>
          {tableHeaders.map((header, i) => (
            <TableHead key={i}>{header}</TableHead>
          ))}
        </TableRow>
      </TableHeader>

      <TableBody>
        {data.map((item, index) => (
          <React.Fragment key={index}>{renderRow(item, index)}</React.Fragment>
        ))}
      </TableBody>
    </Table>
  );
};

export default GenericTable;
