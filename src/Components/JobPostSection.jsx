import { useState } from 'react';

const JobPostSection = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);  
  const [jobPosted, setJobPosted] = useState(false); 
  const [formData, setFormData] = useState({
    jobTitle: '',
    jobDescription: '',
    location: '',
    salary: ''
  });

  
  const handlePostJobClick = () => {
    setIsFormVisible(true); 
  };

 
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

   
    setTimeout(() => {
      setIsFormVisible(false);  
    }, 2000);
  };

 
  const handleReturnToImage = () => {
    setIsFormVisible(false); 
  };

  return (
    <div className="job-post-container">
      <div className="text-column">
        {!isFormVisible ? (
          <>
            <h1 className="heading">Post Your Job Now</h1>
            <p className="description text-start">
              Finding the right talent has never been easier. Share your job details and let the perfect candidates come to you.
            </p>
            <p className="additional-info text-start">
              With our wide reach and industry connections, we ensure your job post gets the visibility it deserves.
            </p>
            <button className="post-job-btn" onClick={handlePostJobClick}>
              Post Job
            </button>
          </>
        ) : (
          <form onSubmit={handleFormSubmit} className="job-post-form">
            <h2>Post Your Job</h2>

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
        )}

        {jobPosted && <p className="success-message">Job posted successfully!</p>}

        {isFormVisible && (
          <button className="return-to-image-btn" onClick={handleReturnToImage}>
            Exit
          </button>
        )}
      </div>

      {/* Image Column */}
      {!isFormVisible && (
        <div className="image-column">
          <img
            src="https://www.fuzu.com/packs/static/app/assets/images/b2c/landing-page/b2b-offer-people-7b4bce9563c2d749226c.png"
            alt="Job Posting"
            className="image"
          />
        </div>
      )}
    </div>
  );
};

export default JobPostSection;
