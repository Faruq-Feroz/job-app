import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const partners = [
  { name: 'Partner 1', logo: 'https://s3.amazonaws.com/fuzu.com-carrierwave/employers/medium_70090aa0-a74f-4e52-8b32-23a483108d0b.png' },
  { name: 'Partner 2', logo: 'https://s3.amazonaws.com/fuzu.com-carrierwave/employers/medium_3fdda803-299d-4a63-952b-7c1292b0d41f.jpg' },
  { name: 'Partner 3', logo: 'https://s3.amazonaws.com/fuzu.com-carrierwave/employers/medium_287b9b88-09bd-44ce-ab12-a076a83fcef3.jpg' },
  { name: 'Partner 4', logo: 'https://s3.amazonaws.com/fuzu.com-carrierwave/employers/medium_122866c7-f76f-42d5-bc8e-8f3abf277578.jpg' },
  { name: 'Partner 5', logo: 'https://s3.amazonaws.com/fuzu.com-carrierwave/employers/medium_de96910f-507c-45c4-93f9-afc8caa9bb9d.png' },
  { name: 'Partner 6', logo: 'https://s3.amazonaws.com/fuzu.com-carrierwave/employers/medium_7438dc95-9e51-4795-bc0a-9ca571ddf8f1.png' },
  { name: 'Partner 7', logo: 'https://s3.amazonaws.com/fuzu.com-carrierwave/employers/medium_4487cad5-f686-4eb1-95fc-bd95c4f023d7.jpg' },
  { name: 'Partner 8', logo: 'https://s3.amazonaws.com/fuzu.com-carrierwave/employers/medium_43564d28-8c7e-45f9-8dbd-0446ba3ce04a.jpg' },
  { name: 'Partner 9', logo: 'https://s3.amazonaws.com/fuzu.com-carrierwave/employers/medium_45b75120-639c-41f1-a902-705decfc71bb.png' },
  { name: 'Partner 10', logo: 'https://s3.amazonaws.com/fuzu.com-carrierwave/employers/medium_4101165f-a55b-47e0-b5dd-d828eed98470.png' },
  { name: 'Partner 11', logo: 'https://s3.amazonaws.com/fuzu.com-carrierwave/employers/medium_badb1452-5bef-48f8-968a-97a30342a810.jpg' },
  { name: 'Partner 12', logo: 'https://s3.amazonaws.com/fuzu.com-carrierwave/employers/medium_fd336250-4990-4fc1-8d67-dc20f5184e72.png' },
];

const Partners = () => {
  return (
    <div className="partners-section" id="partners">
      <h2 className="section-title">Our Trusted Partners</h2>
      <div className="row">
        {partners.map((partner, index) => (
          <div key={index} className="col-lg-2 col-md-3 col-sm-6 col-6 mb-4 d-flex justify-content-center">
            <div className="partner-logo">
              <img src={partner.logo} alt={partner.name} className="img-fluid" style={{ maxWidth: '100px' }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
