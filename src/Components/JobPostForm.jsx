import { useState } from 'react';

const JobPostForm = () => {
  const [jobPosted, setJobPosted] = useState(false);
  const [formData, setFormData] = useState({
    jobTitle: '',
    jobDescription: '',
    location: '',
    salary: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
   
    setJobPosted(true); 
  };

  return (
    <div className="job-post-form-container">
      <h2>Post Your Job</h2>
      <form onSubmit={handleFormSubmit} className="job-post-form">
        <div className="form-group">
          <label htmlFor="jobTitle">Job Title</label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="jobDescription">Job Description</label>
          <textarea
            id="jobDescription"
            name="jobDescription"
            value={formData.jobDescription}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="salary">Salary</label>
          <input
            type="number"
            id="salary"
            name="salary"
            value={formData.salary}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>

      {jobPosted && <p className="success-message">Job posted successfully!</p>}
    </div>
  );
};

export default JobPostForm;
