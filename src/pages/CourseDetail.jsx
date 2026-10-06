import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './CourseDetail.css';

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
    img: 'https://img-c.udemycdn.com/course/480x270/2776760_f176_10.jpg',
    description: 'Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!',
    students: '1,024,152',
    lastUpdated: '10/2026',
    language: 'English',
    whatYouWillLearn: [
      'You will master the Python programming language by building 100 unique projects over 100 days.',
      'You will learn automation, game, app and web development, data science and machine learning all using Python.',
      'You will be able to program in Python professionally',
      'You will learn Selenium, Beautiful Soup, Request, Flask, Pandas, NumPy, Scikit Learn, Plotly, and Matplotlib.'
    ]
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
    img: 'https://img-c.udemycdn.com/course/480x270/1565838_e54e_16.jpg',
    description: 'Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps',
    students: '1,200,890',
    lastUpdated: '10/2026',
    language: 'English',
    whatYouWillLearn: [
      'Build 16 web development projects for your portfolio, ready to apply for junior developer jobs.',
      'Learn the latest technologies, including Javascript, React, Node and even Web3 development.',
      'After the course you will be able to build ANY website you want.',
      'Build fully-fledged websites and web apps for your startup or business.'
    ]
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
    img: 'https://img-c.udemycdn.com/course/480x270/903744_8eb2.jpg',
    description: 'Learn to create Machine Learning Algorithms in Python and R from two Data Science experts. Code templates included.',
    students: '982,400',
    lastUpdated: '09/2026',
    language: 'English',
    whatYouWillLearn: [
      'Master Machine Learning on Python & R',
      'Have a great intuition of many Machine Learning models',
      'Make accurate predictions',
      'Make powerful analysis'
    ]
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
    img: 'https://img-c.udemycdn.com/course/480x270/1362070_b9a1_2.jpg',
    description: 'Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!',
    students: '815,901',
    lastUpdated: '10/2026',
    language: 'English',
    whatYouWillLearn: [
      'Build powerful, fast, user-friendly and reactive web apps',
      'Provide amazing user experiences by leveraging the power of JavaScript with ease',
      'Apply for high-paid jobs or work as a freelancer in one the most-demanded sectors you can find in web dev right now',
      'Learn all about React Hooks and React Components'
    ]
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
    img: 'https://img-c.udemycdn.com/course/480x270/874012_c7f2_3.jpg',
    description: 'Learn the #1 most important building block of all art, Drawing. This course will teach you how to draw like a pro!',
    students: '520,444',
    lastUpdated: '08/2026',
    language: 'English',
    whatYouWillLearn: [
      'Draw objects out of your head',
      'Understand the fundamentals of art',
      'Draw the human face and figure',
      'Draw realistic light and shadow'
    ]
  }
];

export default function CourseDetail() {
  const { id } = useParams();
  const course = courses.find(c => c.id === parseInt(id));

  if (!course) {
    return (
      <div className="course-not-found">
        <h2>Course not found</h2>
        <Link to="/">Return to Home</Link>
      </div>
    );
  }

  return (
    <div className="course-detail-container">
      {/* Dark Header Banner */}
      <div className="course-banner">
        <div className="course-banner-content">
          <div className="course-breadcrumb">
            <Link to="/">Development</Link> {'>'} <Link to="/">Web Development</Link> {'>'} <span>{course.title.split(' ')[0]}</span>
          </div>
          <h1 className="course-title-large">{course.title}</h1>
          <p className="course-headline">{course.description}</p>
          
          <div className="course-meta">
            {course.badge && <span className="badge bestseller">{course.badge}</span>}
            <span className="rating-star">★ {course.rating}</span>
            <span className="reviews-link">{course.reviews} ratings</span>
            <span className="students-count">{course.students} students</span>
          </div>
          
          <div className="course-author-line">
            Created by <a href="#">{course.instructor}</a>
          </div>
          
          <div className="course-info-icons">
            <span>⚠️ Last updated {course.lastUpdated}</span>
            <span>🌐 {course.language}</span>
            <span>⌨️ English [Auto]</span>
          </div>
        </div>

        {/* Floating Checkout Card (Desktop) */}
        <div className="checkout-card">
          <div className="checkout-img">
            <img src={course.img} alt={course.title} />
            <div className="play-overlay">▶</div>
          </div>
          <div className="checkout-body">
            <div className="checkout-price">
              <h2>{course.currentPrice}</h2>
              <span className="original">{course.originalPrice}</span>
              <span className="discount">82% off</span>
            </div>
            <p className="time-left">⏱️ 5 hours left at this price!</p>
            
            <button className="btn-primary full-width checkout-btn">Add to cart</button>
            <button className="btn-outline full-width checkout-btn mt-2">Buy now</button>
            <p className="guarantee">30-Day Money-Back Guarantee</p>
            
            <div className="includes-list">
              <h4>This course includes:</h4>
              <ul>
                <li>📺 65 hours on-demand video</li>
                <li>📝 82 articles</li>
                <li>📁 112 downloadable resources</li>
                <li>📱 Access on mobile and TV</li>
                <li>🏆 Certificate of completion</li>
              </ul>
            </div>
            <div className="checkout-links">
              <a href="#">Share</a>
              <a href="#">Gift this course</a>
              <a href="#">Apply Coupon</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="course-body">
        <div className="what-you-learn">
          <h2>What you'll learn</h2>
          <ul>
            {course.whatYouWillLearn.map((item, index) => (
              <li key={index}>✓ {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
