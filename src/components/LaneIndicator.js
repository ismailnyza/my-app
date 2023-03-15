import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function LaneIndicator() {
  return (
    <Card>
      <Card.Header as="h5">LaneIndicator</Card.Header>
      <Card.Body>
        <Card.Title>Paste Gel Image here</Card.Title>
        <Button variant="primary">Upload</Button>
      </Card.Body>
    </Card>
  );
}

export default LaneIndicator;