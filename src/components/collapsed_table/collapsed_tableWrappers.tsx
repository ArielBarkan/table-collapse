import styled from "styled-components";



const Tr = styled.tr`
 @media screen and (max-width: 768px) {
  display: block;

}
`;

const Th = styled.th`
 @media screen and (max-width: 768px) {
  display: block;

}
`;

const Td = styled.td`
 @media screen and (max-width: 768px) {
  display: block;

}
`;
const Table = styled.table`
width: 100%;
@media screen and (max-width: 768px) {

  ${Td}{
    display: block;
  }
  ${Th}{
    display: none;
  }

}
`;


export { Table, Tr, Th, Td }