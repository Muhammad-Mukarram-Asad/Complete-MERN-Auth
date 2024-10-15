import { Container, Card, Button, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Hero = () => {
  return (
    <div className=" py-5">
      <Container className="d-flex justify-content-center">
        <Card className="p-5 d-flex flex-column align-items-center hero-card bg-light w-75">
          <h1 className="text-center mb-4 fs-4 fs-md-3 fs-lg-2 fs-xl-1">
            MERN Authentication
          </h1>
          <p className="text-center mb-4 fs-6 fs-md-5 fs-lg-4">
            This is a boilerplate for MERN authentication that stores a JWT in
            an HTTP-Only cookie. It also uses Redux Toolkit and the React
            Bootstrap library.
          </p>

          <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
            <LinkContainer to="/login">
              <Nav.Link>
                <Button variant="primary" className="me-md-3 mb-3 mb-md-0">
                  Sign In
                </Button>
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to="/register">
              <Nav.Link>
                <Button variant="secondary" className="ml-md-3">
                  Sign Up
                </Button>
              </Nav.Link>
            </LinkContainer>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Hero;
