import React, { useState } from 'react';
import './TeachDashboard.css';

const initialProducts = [
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
  const [products, setProducts] = useState(initialProducts);
  const [editingProduct, setEditingProduct] = useState(null);
  const [viewingStats, setViewingStats] = useState(null);

  const handleEditSave = (e) => {
    e.preventDefault();
    setProducts(products.map(p => p.id === editingProduct.id ? editingProduct : p));
    setEditingProduct(null);
  };

  return (
    <div className="teach-container">
      <div className="teach-header">
        <h1>Instructor Dashboard</h1>
        <button className="btn-primary">+ New Course</button>
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
        <h2>All Products ({products.length})</h2>
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
              {products.map(product => (
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
                  <td className="actions-cell">
                    <button className="action-btn edit-btn" onClick={() => setEditingProduct(product)}>✏️ Edit</button>
                    <button className="action-btn stats-btn" onClick={() => setViewingStats(product)}>📊 Stats</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Modal */}
      {editingProduct && (
        <div className="dashboard-modal-backdrop" onClick={() => setEditingProduct(null)}>
          <div className="dashboard-modal" onClick={e => e.stopPropagation()}>
            <h3>Edit Course</h3>
            <form onSubmit={handleEditSave} className="edit-form">
              <div className="form-group">
                <label>Title</label>
                <input 
                  type="text" 
                  value={editingProduct.title}
                  onChange={e => setEditingProduct({...editingProduct, title: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>Status</label>
                <select 
                  value={editingProduct.status}
                  onChange={e => setEditingProduct({...editingProduct, status: e.target.value})}
                >
                  <option value="Live">Live</option>
                  <option value="Draft">Draft</option>
                </select>
              </div>
              <div className="form-group">
                <label>Price / Revenue String</label>
                <input 
                  type="text" 
                  value={editingProduct.revenue}
                  onChange={e => setEditingProduct({...editingProduct, revenue: e.target.value})}
                />
              </div>
              <div className="modal-actions">
                <button type="button" className="action-btn outline" onClick={() => setEditingProduct(null)}>Cancel</button>
                <button type="submit" className="action-btn edit-btn">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Stats Modal */}
      {viewingStats && (
        <div className="dashboard-modal-backdrop" onClick={() => setViewingStats(null)}>
          <div className="dashboard-modal stats-modal" onClick={e => e.stopPropagation()}>
            <h3>Performance: {viewingStats.title}</h3>
            <div className="course-stats-detailed">
              <div className="detail-stat">
                <span>Active Students</span>
                <strong>{viewingStats.students.toLocaleString()}</strong>
              </div>
              <div className="detail-stat">
                <span>Course Rating</span>
                <strong>{viewingStats.rating} ★</strong>
              </div>
              <div className="detail-stat">
                <span>Total Revenue</span>
                <strong style={{ color: '#2ed573' }}>{viewingStats.revenue}</strong>
              </div>
              <div className="detail-stat">
                <span>Completion Rate</span>
                <strong>68%</strong>
              </div>
            </div>
            <button className="btn-primary full-width" onClick={() => setViewingStats(null)} style={{ marginTop: '2rem' }}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
