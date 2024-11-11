import { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { FiSearch } from 'react-icons/fi';
import jobsData from '../jobs.json'; 

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredJobs, setFilteredJobs] = useState([]);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim()) {
      const filtered = jobsData.filter((job) =>
        job.jobTitle.toLowerCase().includes(query.toLowerCase()) ||
        job.companyName.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredJobs(filtered);
    } else {
      setFilteredJobs([]);
    }
  };

  return (
    <section className="search-section">
      <div className="container">
        <Row>
          <Col md={8} className="mx-auto">
            <Form className="position-relative">
              <Form.Group controlId="searchBar" className="searchi-input-wrapper">
                <Form.Control
                  type="text"
                  placeholder="Search for job titles or companies"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="searchi-input"
                />
                <FiSearch className="searchi-icon" />
              </Form.Group>
            </Form>
          </Col>
        </Row>

       
        {searchQuery && filteredJobs.length > 0 ? (
          <Row>
            {filteredJobs.map((job, index) => (
              <Col key={index} md={4} className="mb-4">
                <div className={`card-job card-job-${job.jobTitle.replace(/\s+/g, '-').toLowerCase()}`}>
                  <h5>{job.jobTitle}</h5>
                  <p>{job.companyName}</p>
                  <button className="btn btn-primary">Apply Now</button>
                </div>
              </Col>
            ))}
          </Row>
        ) : searchQuery && filteredJobs.length === 0 ? (
          <p>No jobs found. Try searching for a different title or company.</p>
        ) : null}
      </div>
    </section>
  );
};

export default SearchBar;
