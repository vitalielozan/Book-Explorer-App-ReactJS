import { Container, Card, ListGroup, CardTitle } from 'react-bootstrap';
import { FaBookOpen, FaCode, FaGithub, FaServer } from 'react-icons/fa';

function About() {
  return (
    <Container className="d-flex justify-content-center mt-5">
      <Card style={{ maxWidth: '800px' }} className="w-100 shadow-sm p-3">
        <Card.Body>
          <Card.Title className="text-center mb-4">
            <FaBookOpen className="me-2" />
            About Book Explorer
          </Card.Title>

          <Card.Text>
            <strong>Book Explorer</strong> is a React-based application where
            you can discover, save and explore your favorite books. Data is
            provided by the{' '}
            <a
              href="https://openlibrary.org/developers/api"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Library API
            </a>
            .
            <br />
            Saved books, likes and comments are managed locally using{' '}
            <FaServer /> <strong>json-server</strong>.
          </Card.Text>

          <hr />

          <h5 className="mt-4 mb-3">
            <FaCode className="me-2" />
            Technologies used
          </h5>
          <ListGroup variant="flush" className="mb-3">
            <ListGroup.Item>React & Vite</ListGroup.Item>
            <ListGroup.Item>React Router DOM</ListGroup.Item>
            <ListGroup.Item>React Bootstrap</ListGroup.Item>
            <ListGroup.Item>Axios</ListGroup.Item>
            <ListGroup.Item>json-server</ListGroup.Item>
            <ListGroup.Item>Open Library API</ListGroup.Item>
          </ListGroup>

          <p className="mb-0">
            Developed as a learning project by <strong>Vitalie Lozan</strong>.
            You can find the code on{' '}
            <a
              href="https://github.com/vitalielozan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="me-1" />
              GitHub
            </a>
            .
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default About;
