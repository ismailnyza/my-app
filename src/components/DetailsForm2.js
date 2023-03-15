import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";

function DetailsForm2() {
  return (
    <>
    {/* // tssf table */}
    <Table striped bordered hover border={1}>
      <thead>
        <tr>
          <th colSpan={2}>Test Sample Stock Formula</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Estimated concentration of Test Sample (mg/mL)</td>
          <td>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </td>
        </tr>
        <tr>
          <td>Total volume (uL)</td>
          <td>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </td>
        </tr>
        <tr>
          <td>Volume of sample (uL)</td>
          <td>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </td>
        </tr>
        <tr>
          <td>Volume of 2X R-SOB (uL)</td>
          <td>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </td>
        </tr>
        <tr>
          <td>Final concentration (mg/mL)</td>
          <td>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </td>
        </tr>
      </tbody>
    </Table>

    {/* // rssf table */}
    <Table striped bordered hover border={1}>
      <thead>
        <tr>
          <th colSpan={2}>Test Sample Stock Formula</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Estimated concentration of Test Sample (mg/mL)</td>
          <td>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </td>
        </tr>
        <tr>
          <td>Total volume (uL)</td>
          <td>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </td>
        </tr>
        <tr>
          <td>Volume of sample (uL)</td>
          <td>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </td>
        </tr>
        <tr>
          <td>Volume of 2X R-SOB (uL)</td>
          <td>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </td>
        </tr>
        <tr>
          <td>Final concentration (mg/mL)</td>
          <td>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </td>
        </tr>
      </tbody>
    </Table>

    {/* dialution table */}

    <Table striped bordered hover border={1}>
      <thead>
        <tr>
          <th colSpan={2}>
          Dilution table
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>

          </td>
          <td colSpan={2}>
          Test sample 	
          </td>
          <td colSpan={2}>
          Reference Standard	
          </td>
        </tr>
        <tr>
          <td>
          </td>
          <td>
          Volume of sample (uL)
          </td>
          <td>
          Total volume (uL)
          </td>
          <td>
          Volume of sample (uL)
          </td>
          <td>
          Total volume (uL)
          </td>
          </tr>
          <tr>
            <td>Stock</td>
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
          
          </tr>
          </tbody>
    </Table>
        
        {/* number of gel runs */}
        <Form.Label htmlFor="inputPassword5">Number of gel runs</Form.Label>
      <Form.Control
        type="text"
        id="gelruns"
      />
    </>
  );
}

export default DetailsForm2;
