import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <>
      <Container className="mt-5 text-center home-container ">
        <h1 className="fs-1 text-white">Welcome to the Book Store</h1>
        <p className="lead text-white fs-3">
          Discover a world of books and keep track of your reading journey!
        </p>
        <Button
          as={Link}
          to="/books"
          variant="primary"
          className="mt-3"
          size="lg"
        >
          Explore Books
        </Button>
      </Container>
    </>
  );
}

export default Home;
