import { useState } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import jobData from '../jobs.json';

const JobListings = () => {
  const [visibleJobs, setVisibleJobs] = useState(12);
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  const handleShowMore = () => {
    setVisibleJobs(jobData.length);
    setShowAll(true);
  };

  const handleShowLess = () => {
    setVisibleJobs(12);
    setShowAll(false);
  };

  const handleApplyClick = (jobTitle) => {
    navigate(`/job/${encodeURIComponent(jobTitle)}`);
  };

  if (!Array.isArray(jobData) || jobData.length === 0) {
    return <p>No job listings available</p>;
  }

  return (
    <section className="job-listings-section">
      <div className="container">
        <h2 className="job-listings-title">Available Job Opportunities</h2>
        <Row>
          {jobData.slice(0, visibleJobs).map((job, index) => (
            <Col key={index} md={4} sm={6} className="mb-4">
              <Card className="job-card">
                <Card.Body>
                  <Card.Title className="job-title">{job.jobTitle}</Card.Title>
                  <Card.Subtitle className="job-company">{job.companyName}</Card.Subtitle>
                  <div className="job-location">
                    <FaMapMarkerAlt /> {job.location}
                  </div>
                  <div className="job-type">
                    <strong>Type: </strong>{job.type}
                  </div>
                  <Button
                    variant="primary"
                    className="apply-btn"
                    onClick={() => handleApplyClick(job.jobTitle)}
                  >
                    Apply Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {jobData.length > 12 && (
          <div className="text-center mt-4">
            {!showAll ? (
              <Button onClick={handleShowMore} className="view-more-btn">
                View More Jobs
              </Button>
            ) : (
              <Button onClick={handleShowLess} className="view-less-btn">
                View Less Jobs
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;
