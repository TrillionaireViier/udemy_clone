import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function CategoryPage() {
  const { categoryId } = useParams();
  const { addToCart, cart } = useCart();
  
  // Format the category name nicely (e.g., "finance-accounting" -> "Finance Accounting")
  const categoryName = categoryId 
    ? categoryId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : 'Category';

  // Generate some dummy courses for this specific category
  const categoryCourses = Array.from({ length: 8 }).map((_, i) => ({
    id: `${categoryId}-${i + 1}`,
    title: `Complete ${categoryName} Masterclass: Beginner to Advanced`,
    author: 'Top Instructor',
    rating: (4.5 + Math.random() * 0.5).toFixed(1),
    reviews: Math.floor(Math.random() * 15000) + 1000,
    price: 89.99,
    originalPrice: 199.99,
    bestseller: i % 3 === 0,
    image: `https://picsum.photos/seed/${categoryId}${i}/400/225`
  }));

  return (
    <div>
      <div className="category-header" style={{
        background: 'linear-gradient(135deg, #1f2833 0%, #121820 100%)',
        padding: '4rem 4rem',
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}>
        <h1 style={{ color: '#fff', fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}>
          {categoryName} Courses
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '800px' }}>
          Expand your knowledge in {categoryName}. Whether you're a beginner or an advanced professional, we have the right courses to help you achieve your goals.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Popular in {categoryName}</h2>
        <p className="section-subtitle">Learners are highly engaging with these top-rated courses</p>
        
        <div className="course-grid">
          {categoryCourses.map((course) => {
            const inCart = cart.some(item => item.id === course.id);
            return (
              <div className="course-card" key={course.id}>
                <Link to={`/course/${course.id}`} style={{ textDecoration: 'none', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div className="course-img-wrapper">
                    <img src={course.image} alt={course.title} />
                    <div className="course-overlay">
                      <div className="play-icon">▶</div>
                    </div>
                  </div>
                  <div className="course-content">
                    <h3 className="course-title">{course.title}</h3>
                    <div className="course-author">{course.author}</div>
                    <div className="course-stats">
                      <span className="rating">
                        {course.rating} <span style={{fontSize:'0.8rem'}}>★</span>
                      </span>
                      <span className="reviews">({course.reviews.toLocaleString()})</span>
                    </div>
                    <div className="price-container">
                      <span className="current-price">${course.price}</span>
                      <span className="original-price">${course.originalPrice}</span>
                    </div>
                    {course.bestseller && <span className="badge bestseller">Bestseller</span>}
                  </div>
                </Link>
                <div style={{ padding: '0 1.2rem 1.2rem' }}>
                  <button 
                    className={inCart ? "btn-outline full-width" : "btn-primary full-width"}
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(course);
                    }}
                    style={{ marginTop: '0.5rem' }}
                    disabled={inCart}
                  >
                    {inCart ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
