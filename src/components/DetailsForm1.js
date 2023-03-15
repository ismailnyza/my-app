import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function MyForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBatchnumber">
        <Form.Label>Batch number</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formDatespreadsheetcompleted">
        <Form.Label>Date spreadsheet completed</Form.Label>
        <Form.Control type="date" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formCheckpoint">
        <Form.Label>Checkpoint</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formAnalyst ">
        <Form.Label>Analyst </Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formChecker ">
        <Form.Label>Checker </Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formNotes">
        <Form.Label>Notes:</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      {/* todo should be an option thing */}

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      {/* 
       */}
      <Button variant="primary" type="submit"> 
        Submit
      </Button>
    </Form>
  );
}

export default MyForm;