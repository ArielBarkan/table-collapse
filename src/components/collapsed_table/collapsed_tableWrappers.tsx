import styled from "styled-components";



const Tr = styled.tr`

`;

const Th = styled.th`
text-align: start;
`;

const Td = styled.td`

`;

const ColumnName = styled.span`
  display: none;
`
const Table = styled.table`
width: 100%;
@media screen and (max-width: 510px) {

  ${Td}{
    display: table-row;
    width: 100%;
    ${ColumnName}{
      display: contents;
      font-weight: bold;
    }
  }

  ${Tr}:first-child {
   display: none;
  }  
  ${Tr} {
    display: table;
    width: 100%;
    border: 2px solid black;
    margin:20px 0;
  }

}
`;


export { Table, Tr, Th, Td, ColumnName }