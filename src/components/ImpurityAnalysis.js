import { Navbar, Table } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";

function NormalisedDialution() {
  return (
    <>
      <Table striped bordered hover border={1}>
        <thead>
          <tr>
            <td rowSpan={2}></td>
            <td rowSpan={2}>Monomer 14 kDa</td>
            <td colSpan={3}>Oligomers</td>
          </tr>
          <tr>
            <td>Dimer 28 kDa</td>
            <td>Trimer 42 kDa</td>
            <td>Tretramer 56 kDa</td>
            <td colSpan={2}>total</td>
          </tr>
        </thead>
        <tbody></tbody>
        <tr>
            {/* get value from sample concentration */}
          <td>ts D3</td>
          <td>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </td>
          <td>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </td>
          <td>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </td>
          <td>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </td>
         <td></td>
        </tr>
        {/* for loop to generate  */}
      </Table>
    </>
  );
}

export default NormalisedDialution;
