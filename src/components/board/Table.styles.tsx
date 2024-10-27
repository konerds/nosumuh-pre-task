import { tw } from '@utils/tw';

const className = {
  DivContainer: 'w-full flex flex-col justify-center gap-x-4',
  DivContainerHeader: 'flex items-center mb-2',
  Table: 'w-full table-fixed text-center bg-[#fafafa] border-b-gray-200',
  TableHead: 'border-b-4',
  TableBody: 'text-nowrap whitespace-nowrap text-ellipsis',
  TableRow: 'border-b-2',
  TableCell: 'p-2 first:w-1/12',
};

export const DivContainer = tw('div', className.DivContainer);

export const DivContainerHeader = tw('div', className.DivContainerHeader);

export const Table = tw('table', className.Table);

export const TableHead = tw('thead', className.TableHead);

export const TableBody = tw('tbody', className.TableBody);

export const TableRow = tw('tr', className.TableRow);

export const TableCell = tw('td', className.TableCell);
