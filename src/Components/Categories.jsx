
import { Col, Row, Card } from 'react-bootstrap';
import { FaLaptopCode, FaBullhorn, FaPaintBrush, FaHeadset, FaChartLine, FaChalkboardTeacher, FaDollarSign, FaHeartbeat, FaUsers, FaTasks, FaGavel, FaDatabase } from 'react-icons/fa';

const categories = [
  { title: 'Software Dev', icon: <FaLaptopCode />, jobsAvailable: 20 },
  { title: 'Marketing', icon: <FaBullhorn />, jobsAvailable: 15 },
  { title: 'Design', icon: <FaPaintBrush />, jobsAvailable: 30 },
  { title: 'Customer Support', icon: <FaHeadset />, jobsAvailable: 25 },
  { title: 'Sales', icon: <FaChartLine />, jobsAvailable: 10 },
  { title: 'Education', icon: <FaChalkboardTeacher />, jobsAvailable: 8 },
  { title: 'Finance', icon: <FaDollarSign />, jobsAvailable: 12 },
  { title: 'Healthcare', icon: <FaHeartbeat />, jobsAvailable: 5 },
  { title: 'HR & Recruitment', icon: <FaUsers />, jobsAvailable: 20 },
  { title: 'Project Management', icon: <FaTasks />, jobsAvailable: 18 },
  { title: 'Legal', icon: <FaGavel />, jobsAvailable: 7 },
  { title: 'Data Science', icon: <FaDatabase />, jobsAvailable: 22 },
];

const Categories = () => {
  return (
    <section className="categories-section">
      <div className="container">
        <h2 className="categories-title">Explore Job Categories</h2>
        <Row>
          {categories.map((category, index) => (
            <Col key={index} md={3} sm={6} className="mb-4">
              <Card className="category-card">
                <Card.Body>
                  <div className="category-info">
                    <div className="category-icon-text">
                      <div className="category-icon">{category.icon}</div>
                      <Card.Title className="category-title">{category.title}</Card.Title>
                    </div>
                    <p className="jobs-available">{category.jobsAvailable} Jobs Available</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Categories;
