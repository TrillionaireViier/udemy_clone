import React, { useState } from 'react';
import './App.css';
import heroImg from './assets/hero.png';

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

function App() {
  const [modalType, setModalType] = useState(null); // 'login' | 'signup' | null

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-left">
          <div className="logo">Learnify.</div>
          <button className="categories-btn">Categories</button>
          <div className="search-bar">
            <span className="search-icon">🔍</span>
            <input type="text" placeholder="Search for anything..." />
          </div>
        </div>
        <div className="nav-right">
          <a href="#" className="nav-link">Udemy Business</a>
          <a href="#" className="nav-link">Teach on Udemy</a>
          <button className="btn-outline" onClick={() => setModalType('login')}>Log in</button>
          <button className="btn-primary" onClick={() => setModalType('signup')}>Sign up</button>
        </div>
      </nav>

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
            <div className="course-card" key={course.id}>
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
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-col">
            <div className="logo">Learnify.</div>
            <p>Empowering the world to develop skills for the future.</p>
          </div>
          <div className="footer-col">
            <h3>Learnify Business</h3>
            <a href="#">Teach on Learnify</a>
            <a href="#">Get the app</a>
            <a href="#">About us</a>
            <a href="#">Contact us</a>
          </div>
          <div className="footer-col">
            <h3>Careers</h3>
            <a href="#">Blog</a>
            <a href="#">Help and Support</a>
            <a href="#">Affiliate</a>
            <a href="#">Investors</a>
          </div>
          <div className="footer-col">
            <h3>Terms</h3>
            <a href="#">Privacy policy</a>
            <a href="#">Cookie settings</a>
            <a href="#">Sitemap</a>
            <a href="#">Accessibility statement</a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="lang-btn">🌐 English</div>
          <div className="copyright">© 2026 Learnify, Inc.</div>
        </div>
      </footer>

      {/* Modals */}
      {modalType && (
        <div className="modal-backdrop" onClick={() => setModalType(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setModalType(null)}>✕</button>
            <h2>{modalType === 'login' ? 'Log In to Your Account' : 'Sign Up and Start Learning'}</h2>
            
            <form className="auth-form" onSubmit={(e) => { e.preventDefault(); alert(modalType === 'login' ? 'Logged in successfully!' : 'Account created successfully!'); setModalType(null); }}>
              {modalType === 'signup' && (
                <div className="input-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="John Doe" required />
                </div>
              )}
              <div className="input-group">
                <label>Email</label>
                <input type="email" placeholder="name@example.com" required />
              </div>
              <div className="input-group">
                <label>Password</label>
                <input type="password" placeholder="••••••••" required />
              </div>
              
              <button type="submit" className="btn-primary full-width">
                {modalType === 'login' ? 'Log In' : 'Sign Up'}
              </button>
              
              <div className="auth-divider"><span>or</span></div>
              
              <button type="button" className="btn-social google">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="G" />
                Continue with Google
              </button>
            </form>

            <p className="auth-switch">
              {modalType === 'login' ? "Don't have an account? " : "Already have an account? "}
              <span onClick={() => setModalType(modalType === 'login' ? 'signup' : 'login')}>
                {modalType === 'login' ? 'Sign up' : 'Log in'}
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
