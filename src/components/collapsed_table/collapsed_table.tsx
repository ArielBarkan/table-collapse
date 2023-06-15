import { Table, Tr, Th, Td } from "./collapsed_tableWrappers"




const CollapsedTable = () => {


  return (

    <Table>
      <Tr>
        <Th>Header 1</Th>
        <Th>Header 2</Th>
        <Th>Header 3</Th>
        <Th>Header 4</Th>
      </Tr>
      <Tr>
        <Td>content 1</Td>
        <Td>content 1</Td>
        <Td>content 1</Td>
        <Td>content 1</Td>
      </Tr>
      <Tr>
        <Td>content 2 content 2</Td>
        <Td>content 2 content 2</Td>
        <Td>content 2 content 2</Td>
        <Td>content 2 content 2</Td>
      </Tr>
      <Tr>
        <Td>content 3 content 3</Td>
        <Td>content 3 content 3</Td>
        <Td>content 3 content 3</Td>
        <Td>content 3 content 3</Td>
      </Tr>
      <Tr>
        <Td>content 4 content 4</Td>
        <Td>content 4 content 4</Td>
        <Td>content 4 content 4</Td>
        <Td>content 4 content 4</Td>
      </Tr>

    </Table>

  )


}

export { CollapsedTable }