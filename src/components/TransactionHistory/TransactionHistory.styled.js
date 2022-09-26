import styled from '@emotion/styled';

export const Table = styled.table`
  margin-top: 50px;
  width: 1000px;
  border-radius: 5px;
  box-shadow: 2px 3px 5px 2px rgba(0, 0, 0, 0.75);
`;

export const TableHead = styled.th`
  font-size: 30px;
  color: #fff;
  background-color: #00bcd5;
  padding: 10px;
`;

export const TableRow = styled.tr`
  :nth-of-type(odd) {
    background-color: #fff;
  }

  :nth-of-type(even) {
    background-color: #ecf1f4;
  }
`;

export const TableCell = styled.td`
  font-size: 20px;
  text-align: center;
  padding: 10px;
  border: 0.5px solid #e5e5e5;
  :first-of-type {
    text-transform: capitalize;
  }
`;
