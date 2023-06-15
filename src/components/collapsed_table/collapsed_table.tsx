import { Table, Tr, Th, Td, ColumnName } from "./collapsed_tableWrappers"




const CollapsedTable = () => {


  return (

    <Table>
      <Tr>
        <Th>First name: </Th>
        <Th>Last name: </Th>
        <Th>Main instrument: </Th>
        <Th>Birth day: </Th>
      </Tr>
      <Tr>
        <Td><ColumnName>First name: </ColumnName>Ringo</Td>
        <Td><ColumnName>Last name: </ColumnName>Star</Td>
        <Td><ColumnName>Main instrument: </ColumnName>Drummer</Td>
        <Td><ColumnName>Birth day: </ColumnName>July 7, 1940</Td>
      </Tr>
      <Tr>
        <Td><ColumnName>First name: </ColumnName>George</Td>
        <Td><ColumnName>Last name: </ColumnName>Harrison</Td>
        <Td><ColumnName>Main instrument: </ColumnName>Guitar</Td>
        <Td><ColumnName>Birth day: </ColumnName>February 25, 1943</Td>
      </Tr>
      <Tr>
        <Td><ColumnName>First name: </ColumnName>Paul</Td>
        <Td><ColumnName>Last name: </ColumnName>McCartney</Td>
        <Td><ColumnName>Main instrument: </ColumnName>Bass</Td>
        <Td><ColumnName>Birth day: </ColumnName>June 18, 1942</Td>
      </Tr>
      <Tr>
        <Td><ColumnName>First name: </ColumnName>John</Td>
        <Td><ColumnName>Last name: </ColumnName>Lennon</Td>
        <Td><ColumnName>Main instrument: </ColumnName>Guitar</Td>
        <Td><ColumnName>Birth day: </ColumnName>October 9, 1940</Td>
      </Tr>

    </Table>

  )


}

export { CollapsedTable }