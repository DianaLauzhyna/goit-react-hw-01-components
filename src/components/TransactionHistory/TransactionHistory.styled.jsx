import styled from 'styled-components';

export const TransactionsTable = styled.table`
  overflow: hidden;
  width: 25vw;
  margin-bottom: 2rem;
  border-collapse: collapse;
  border: 1px solid #e3e8eb;
  border-radius: 0.5rem;
  box-shadow: 1px 1px 2px 1px rgba(34, 60, 80, 0.2);
`;

export const TableHead = styled.thead`
  background: #00bcd5;
  color: #ffffff;
  text-transform: uppercase;
`;

export const HeadRow = styled.tr`
  height: 2rem;
`;

export const OrderNumber = styled.th`
  border: 1px solid #e3e8eb;
  width: 10%;
`;

export const HeadData = styled(OrderNumber)`
  width: calc(90% / 3);
`;

export const TableBody = styled.tbody``;

export const BodyRow = styled(HeadRow)`
  background: ${props => (props.even ? '#ecf1f4' : '#ffffff')};
`;

export const Number = styled.td`
  text-align: right;
  padding-right: 0.5rem;
  border: 1px solid #e3e8eb;
`;

export const Type = styled(Number)`
  text-align: left;
  padding-left: 0.5rem;
`;

export const Amount = styled(Number)``;

export const Currency = styled(Number)`
  text-align: center;
`;
