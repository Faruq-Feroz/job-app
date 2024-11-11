
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Carousel } from 'react-bootstrap';

const testimonials = [
  {
    name: "Njeri Kamau",
    role: "Job Seeker",
    message: "This platform made my job search easier than I imagined. I’m now employed at my dream company, thanks to the opportunities it provided!",
    photo: "https://media.gettyimages.com/id/1653368202/photo/atrium-portrait-of-cheerful-kenyan-business-professional.jpg?s=612x612&w=0&k=20&c=GMEGHvhKewayec_K6iw9ATpIjWst8T4YvJihiBtT3CE=", 
    rating: 5,
  },
  {
    name: "Jacob Otieno", 
    role: "Hiring Manager",
    message: "As an employer, finding skilled talent through this site has been seamless. The platform is a game changer in recruitment.",
    photo: "https://media.gettyimages.com/id/1653368125/photo/candid-portrait-of-african-professional-using-laptop.jpg?s=612x612&w=0&k=20&c=LkjCdXLvv67gvboJy5-4XvWH8vDk0QOQn03P6HLg36A=", 
    rating: 4,
  },
  {
    name: "Amina Abdi", 
    role: "Freelancer",
    message: "I’ve found amazing freelance work through this platform. It’s been great connecting with clients who value my expertise.",
    photo: "https://media.gettyimages.com/id/1292696460/photo/portrait-of-confident-female-nurse-wearing-hijab-against-wall-in-hospital.jpg?s=612x612&w=0&k=20&c=HtPZPwdUPSnBn8Aqydff2b9YDHsT_2qSaUBX9B0TB2Q=",
    rating: 5,
  },
  {name:"John Mwanggi",
    role: "Employer",
    message: "The ease of posting job openings and getting qualified candidates has made my hiring process much faster. I highly recommend this platform.",
    photo: "https://media.gettyimages.com/id/1574611227/photo/portrait-of-young-male-with-neutral-facial-expression-wearing-blue-denim-shirt-studio.jpg?s=612x612&w=0&k=20&c=tV5KGmd6IpglgtBJG5nZEX9QAQ_9o_q8CBrLKd1wJto=", 
    rating: 5,
  },
  {
    name: "Miriam Wanjala", 
    role: "Job Seeker",
    message: "I’ve been looking for a job for months, but with this platform, I landed an offer within weeks. It really works!",
    photo: "https://media.gettyimages.com/id/1644128335/photo/cheerful-young-business-professional-using-smart-phone.jpg?s=612x612&w=0&k=20&c=6CXMPr5tNQY8LtsAEyL-W05zHO_bfKGSh4brAo1dyew=",
    rating: 4,
  },
  {
    name: "Mark Olwande", 
    role: "Recruitment Consultant",
    message: "This platform has made my job so much easier. I can find the right candidates for my clients quickly and efficiently.",
    photo: "https://media.gettyimages.com/id/1653161036/photo/office-portrait-of-cheerful-kenyan-businessman.jpg?s=612x612&w=0&k=20&c=jvmJGpWAGHr_M2VNL49-w39JgKMJeTXkDKQ42NXNqyM=", 
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-section" id="testimonials">
      <h2 className="section-title">What Our Users Say</h2>
      <Carousel interval={2000}> 
        {testimonials.map((testimonial, index) => (
          <Carousel.Item key={index}>
            <div className="testimonial-card">
              <div className="testimonial-img">
                <img src={testimonial.photo} alt={testimonial.name} />
              </div>
              <div className="testimonial-content">
                <h3>{testimonial.name}</h3>
                <p className="role">{testimonial.role}</p>
                <p className="message">"{testimonial.message}"</p>
                <div className="rating">
                  {"★".repeat(testimonial.rating)}
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonials;
