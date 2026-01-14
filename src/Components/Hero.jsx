import { Button, Col, Row } from "react-bootstrap";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <Row className="align-items-center">
        
          <Col md={6} className="hero-image">
            <img 
              src="https://i.pinimg.com/736x/be/b7/43/beb743e10a4f5ac0fcd988800c7d44ab.jpg" 
              alt="Job Search Image" 
              className="img-fluid" 
            />
          </Col>
          
        
          <Col md={6} className="hero-text">
            <h1>Welcome to Kazi Pap</h1>
            <p>Your future job awaits! Explore a wide range of career opportunities and take the next step in your career.</p>
            <Button variant="primary" size="lg" className="cta-button">Find Jobs</Button>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Hero;
