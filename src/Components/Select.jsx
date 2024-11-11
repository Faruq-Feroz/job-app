import { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import jobsData from '../jobs.json'; 

const Select = () => {
  const [selectedCounty, setSelectedCounty] = useState('');
  const [isVisible, setIsVisible] = useState(true);

 
  const uniqueCounties = [...new Set(jobsData.map((job) => job.location))];

  const handleSelect = (county) => {
    setSelectedCounty(county);
  };

  const handleClose = () => {
    setIsVisible(false);  
  };

  if (!isVisible) return null; 

  return (
    <div className="select-county-container">
      <div className="d-flex align-items-center justify-content-center">
        <h6 className="mb-0 mr-2">Select a county to see content specific to your location:</h6>
        <Dropdown className="d-inline-block mr-2">
          <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
            {selectedCounty || 'Select County'}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {uniqueCounties.map((county, index) => (
              <Dropdown.Item key={index} onClick={() => handleSelect(county)}>
                {county}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <button className="close-btn" onClick={handleClose}>×</button>
      </div>

      {selectedCounty && (
        <div className="county-content mt-2">
          <p>Showing content for {selectedCounty}.</p>
        </div>
      )}
    </div>
  );
};

export default Select;
