import React from 'react';
import './TeachDashboard.css';

const myProducts = [
  {
    id: 1,
    title: '100 Days of Code: The Complete Python Pro Bootcamp',
    students: 244152,
    rating: 4.8,
    revenue: '$1,240,500',
    status: 'Live',
    img: 'https://img-c.udemycdn.com/course/480x270/2776760_f176_10.jpg'
  },
  {
    id: 2,
    title: 'The Complete Web Development Bootcamp 2024',
    students: 312890,
    rating: 4.7,
    revenue: '$1,850,200',
    status: 'Live',
    img: 'https://img-c.udemycdn.com/course/480x270/1565838_e54e_16.jpg'
  },
  {
    id: 3,
    title: 'iOS & Swift - The Complete iOS App Development Bootcamp',
    students: 150200,
    rating: 4.8,
    revenue: '$950,400',
    status: 'Live',
    img: 'https://img-c.udemycdn.com/course/480x270/1778502_f4b9_12.jpg'
  },
  {
    id: 4,
    title: 'Advanced React Design Patterns',
    students: 4500,
    rating: 4.9,
    revenue: '$45,000',
    status: 'Draft',
    img: 'https://img-c.udemycdn.com/course/480x270/1362070_b9a1_2.jpg'
  }
];

export default function TeachDashboard() {
  return (
    <div className="teach-container">
      <div className="teach-header">
        <h1>Instructor Dashboard</h1>
        <button className="btn-primary">New Course</button>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Revenue</h3>
          <p>$4,086,100</p>
        </div>
        <div className="stat-card">
          <h3>Total Enrollments</h3>
          <p>711,742</p>
        </div>
        <div className="stat-card">
          <h3>Instructor Rating</h3>
          <p>4.75 ★</p>
        </div>
      </div>

      <div className="products-section">
        <h2>All Products ({myProducts.length})</h2>
        <div className="table-responsive">
          <table className="products-table">
            <thead>
              <tr>
                <th>Course Name</th>
                <th>Status</th>
                <th>Students</th>
                <th>Rating</th>
                <th>Revenue</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {myProducts.map(product => (
                <tr key={product.id}>
                  <td>
                    <div className="product-info">
                      <img src={product.img} alt={product.title} />
                      <span className="product-title">{product.title}</span>
                    </div>
                  </td>
                  <td>
                    <span className={`status-badge ${product.status.toLowerCase()}`}>
                      {product.status}
                    </span>
                  </td>
                  <td>{product.students.toLocaleString()}</td>
                  <td>{product.rating} ★</td>
                  <td>{product.revenue}</td>
                  <td>
                    <button className="action-btn">Edit</button>
                    <button className="action-btn outline">Stats</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
