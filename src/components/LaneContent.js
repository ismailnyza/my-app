import { Navbar, Table } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";

function LaneContent() {
  return (
    <>
      <Table>
        <tr>
          <td>Gel (letter or number):</td>
          <td>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </td>
        </tr>
        <tr>
          <td>Date gel run:</td>
          <td>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </td>
        </tr>
      </Table>
      <Table striped bordered hover>
        <thead>
          <tr>
            <td>Lane</td>
            <td>Sample & concentration </td>
            <td>Dilution Level</td>
          </tr>
        </thead>
        <tbody></tbody>
        <tr>
          <td>Lane</td>
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
            <button>Add Sample</button>
          </td>
        </tr>
        {/* for loop to generate  */}
      </Table>
    </>
  );
}

export default LaneContent;
