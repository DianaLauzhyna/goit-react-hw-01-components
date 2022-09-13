import PropTypes from 'prop-types';
import {
  TransactionsTable,
  TableHead,
  HeadRow,
  OrderNumber,
  HeadData,
  TableBody,
  BodyRow,
  Number,
  Type,
  Amount,
  Currency,
} from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <TransactionsTable>
      <TableHead>
        <HeadRow>
          <OrderNumber>#</OrderNumber>
          <HeadData>Type</HeadData>
          <HeadData>Amount</HeadData>
          <HeadData>Currency</HeadData>
        </HeadRow>
      </TableHead>
      <TableBody>
        {items.map((item, i) => (
          <BodyRow key={item.id} even={(i + 1) % 2 !== 1}>
            <Number>{i + 1}</Number>
            <Type>{item.type}</Type>
            <Amount>{item.amount}</Amount>
            <Currency>{item.currency}</Currency>
          </BodyRow>
        ))}
      </TableBody>
    </TransactionsTable>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf.isRequired,
  items: PropTypes.element.isRequired,
};
