import { useState } from 'react';
import { useParams } from 'react-router-dom';
import jobData from '../jobs.json';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';

const JobDetail = () => {
  const { jobTitle } = useParams();
  const job = jobData.find((job) => job.jobTitle === jobTitle);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    coverLetter: '',
    cv: null
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle CV upload
  const handleFileChange = (e) => {
    setFormData({ ...formData, cv: e.target.files[0] });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Here, you'd normally send formData to a server via an API call
    console.log('Form submitted:', formData);
  };

  if (!job) {
    return <p>Job not found</p>;
  }

  return (
    <Container className="job-details-container mt-5">
    <div className="text-center">
        <h2 className="mb-4">{job.jobTitle}</h2>
        <p><strong>Company:</strong> {job.companyName}</p>
        <p><strong>Location:</strong> {job.location}</p>
        <p><strong>Type:</strong> {job.type}</p>
        <p><strong>Description:</strong> {job.description}</p>
      </div>

      <h3 className="apply mt-5 fw-bold text-center">Apply for this job</h3>
      {!submitted ? (
         <Form onSubmit={handleSubmit}>
         <Row>
           <Col md={6}>
             <Form.Group className="mb-3">
               <Form.Label>Name</Form.Label>
               <Form.Control
                 type="text"
                 name="name"
                 value={formData.name}
                 onChange={handleChange}
                 required
                 className="thick-border"
               />
             </Form.Group>
           </Col>
           <Col md={6}>
             <Form.Group className="mb-3">
               <Form.Label>Email</Form.Label>
               <Form.Control
                 type="email"
                 name="email"
                 value={formData.email}
                 onChange={handleChange}
                 required
                 className="thick-border"
               />
             </Form.Group>
           </Col>
         </Row>

         <Form.Group className="mb-3">
           <Form.Label>Cover Letter</Form.Label>
           <Form.Control
             as="textarea"
             name="coverLetter"
             rows={5}
             value={formData.coverLetter}
             onChange={handleChange}
             className="thick-border"
           />
         </Form.Group>

         <Form.Group className="mb-4">
           <Form.Label>Upload CV</Form.Label>
           <Form.Control
             type="file"
             onChange={handleFileChange}
             required
             className="thick-border"
           />
         </Form.Group>

         <Button variant="primary" type="submit">
           Submit Application
         </Button>
       </Form>
      ) : (
        <h4 className="text-success mt-4 fw-bold text-center">Thank you for applying! We will get back to you soon.</h4>
      )}
    </Container>
  );
};

export default JobDetail;
