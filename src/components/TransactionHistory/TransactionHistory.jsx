import PropTypes from 'prop-types';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <tr>
          <TableHead>Type</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Currency</TableHead>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TableRow key={id}>
              <TableCell>{type}</TableCell>
              <TableCell>{amount}</TableCell>
              <TableCell>{currency}</TableCell>
            </TableRow>
          );
        })}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array,
};
