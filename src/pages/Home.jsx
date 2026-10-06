import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/hero.png';

const courses = [
  {
    id: 1,
    title: '100 Days of Code: The Complete Python Pro Bootcamp',
    instructor: 'Dr. Angela Yu',
    rating: 4.8,
    reviews: '(244,152)',
    currentPrice: '$14.99',
    originalPrice: '$84.99',
    badge: 'Bestseller',
    img: 'https://img-c.udemycdn.com/course/480x270/2776760_f176_10.jpg'
  },
  {
    id: 2,
    title: 'The Complete Web Development Bootcamp 2024',
    instructor: 'Dr. Angela Yu',
    rating: 4.7,
    reviews: '(312,890)',
    currentPrice: '$16.99',
    originalPrice: '$94.99',
    badge: 'Bestseller',
    img: 'https://img-c.udemycdn.com/course/480x270/1565838_e54e_16.jpg'
  },
  {
    id: 3,
    title: 'Machine Learning A-Z™: AI, Python & R + ChatGPT',
    instructor: 'Kirill Eremenko, Hadelin de Ponteves',
    rating: 4.6,
    reviews: '(182,400)',
    currentPrice: '$19.99',
    originalPrice: '$109.99',
    badge: 'Highest Rated',
    img: 'https://img-c.udemycdn.com/course/480x270/903744_8eb2.jpg'
  },
  {
    id: 4,
    title: 'React - The Complete Guide (incl Hooks, React Router, Redux)',
    instructor: 'Maximilian Schwarzmüller',
    rating: 4.8,
    reviews: '(215,901)',
    currentPrice: '$14.99',
    originalPrice: '$89.99',
    badge: 'Bestseller',
    img: 'https://img-c.udemycdn.com/course/480x270/1362070_b9a1_2.jpg'
  },
  {
    id: 5,
    title: 'The Ultimate Drawing Course - Beginner to Advanced',
    instructor: 'Jaysen Batchelor',
    rating: 4.7,
    reviews: '(120,444)',
    currentPrice: '$12.99',
    originalPrice: '$74.99',
    badge: 'Hot & New',
    img: 'https://img-c.udemycdn.com/course/480x270/874012_c7f2_3.jpg'
  }
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-bg">
          <img src={heroImg} alt="Hero Background" />
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Master new skills. <br/>Unlock your future.</h1>
          <p>Access world-class courses, expert instructors, and a vibrant community. Start learning today with our advanced e-learning platform.</p>
          <div className="hero-search">
            <input type="text" placeholder="What do you want to learn?" />
            <button>Explore Courses</button>
          </div>
        </div>
      </header>

      {/* Courses Section */}
      <section className="section">
        <h2 className="section-title">A broad selection of courses</h2>
        <p className="section-subtitle">Choose from over 210,000 online video courses with new additions published every month</p>
        
        <div className="course-grid">
          {courses.map(course => (
            <Link to={`/course/${course.id}`} style={{ textDecoration: 'none', color: 'inherit' }} key={course.id}>
              <div className="course-card">
                <div className="course-img-wrapper">
                <img src={course.img} alt={course.title} />
                <div className="course-overlay">
                  <div className="play-icon">▶</div>
                </div>
              </div>
              <div className="course-content">
                <h3 className="course-title">{course.title}</h3>
                <p className="course-author">{course.instructor}</p>
                <div className="course-stats">
                  <span className="rating">★ {course.rating}</span>
                  <span className="reviews">{course.reviews}</span>
                </div>
                <div className="price-container">
                  <span className="current-price">{course.currentPrice}</span>
                  <span className="original-price">{course.originalPrice}</span>
                </div>
                {course.badge && <div className={`badge ${course.badge === 'Bestseller' ? 'bestseller' : ''}`}>{course.badge}</div>}
              </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
