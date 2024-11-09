import  { useState } from 'react';
import { Dropdown } from 'react-bootstrap';

const Select = () => {
  const [selectedCounty, setSelectedCounty] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  const handleSelect = (county) => {
    setSelectedCounty(county);
  };

  const handleClose = () => {
    setIsVisible(false);  // Hides the component
  };

  if (!isVisible) return null; // Renders nothing if the component is hidden

  return (
    <div className="select-county-container">
      <div className="d-flex align-items-center justify-content-center">
        <h6 className="mb-0 mr-2">Select a county to see content specific to your location:</h6>
        <Dropdown className="d-inline-block mr-2">
          <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
            {selectedCounty || 'Select County'}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleSelect('Nairobi')}>Nairobi</Dropdown.Item>
            <Dropdown.Item onClick={() => handleSelect('Mombasa')}>Mombasa</Dropdown.Item>
            <Dropdown.Item onClick={() => handleSelect('Kisumu')}>Kisumu</Dropdown.Item>
            <Dropdown.Item onClick={() => handleSelect('Nakuru')}>Nakuru</Dropdown.Item>
            {/* Add more counties as needed */}
          </Dropdown.Menu>
        </Dropdown>
        <button className="close-btn" onClick={handleClose}>×</button>
      </div>

      {selectedCounty && (
        <div className="county-content mt-2">
          <p>Showing content for {selectedCounty}. This can be customized further to load location-specific data.</p>
        </div>
      )}
    </div>
  );
};

export default Select;
