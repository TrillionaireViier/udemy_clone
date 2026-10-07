import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import './Cart.css';
import Home from './pages/Home';
import { 
  Blog, HelpSupport, Affiliate, Investors, Terms, 
  PrivacyPolicy, CookieSettings, Sitemap, Accessibility 
} from './pages/StaticPages';
import TeachDashboard from './pages/TeachDashboard';
import CourseDetail from './pages/CourseDetail';
import CategoryPage from './pages/CategoryPage';
import { useCart } from './context/CartContext';

function App() {
  const [modalType, setModalType] = useState(null);
  const { cart, isCartOpen, toggleCart, removeFromCart } = useCart();

  const totalCartPrice = cart.reduce((total, item) => {
    return total + parseFloat(item.currentPrice.replace('$', ''));
  }, 0).toFixed(2);

  return (
    <BrowserRouter>
      <div className="app">
        {/* Navbar */}
        <nav className="navbar">
          <div className="nav-left">
            <Link to="/" className="logo" style={{ textDecoration: 'none' }}>Learnify.</Link>
            
            <div className="categories-wrapper">
              <button className="categories-btn">Categories</button>
              <div className="categories-dropdown">
                <ul>
                  <li><Link to="/category/development">Development <span className="arrow">›</span></Link></li>
                  <li><Link to="/category/business">Business <span className="arrow">›</span></Link></li>
                  <li><Link to="/category/finance-accounting">Finance & Accounting <span className="arrow">›</span></Link></li>
                  <li><Link to="/category/it-software">IT & Software <span className="arrow">›</span></Link></li>
                  <li><Link to="/category/office-productivity">Office Productivity <span className="arrow">›</span></Link></li>
                  <li><Link to="/category/personal-development">Personal Development <span className="arrow">›</span></Link></li>
                  <li><Link to="/category/design">Design <span className="arrow">›</span></Link></li>
                  <li><Link to="/category/marketing">Marketing <span className="arrow">›</span></Link></li>
                  <li><Link to="/category/lifestyle">Lifestyle <span className="arrow">›</span></Link></li>
                  <li><Link to="/category/photography-video">Photography & Video <span className="arrow">›</span></Link></li>
                  <li><Link to="/category/health-fitness">Health & Fitness <span className="arrow">›</span></Link></li>
                  <li><Link to="/category/music">Music <span className="arrow">›</span></Link></li>
                  <li><Link to="/category/teaching-academics">Teaching & Academics <span className="arrow">›</span></Link></li>
                </ul>
              </div>
            </div>

            <div className="search-bar">
              <span className="search-icon">🔍</span>
              <input type="text" placeholder="Search for anything..." />
            </div>
          </div>
          <div className="nav-right">
            <Link to="/business" className="nav-link">Udemy Business</Link>
            <Link to="/teach" className="nav-link">Teach on Udemy</Link>
            <div className="cart-icon-wrapper" onClick={toggleCart}>
              🛒
              {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
            </div>
            <button className="btn-outline" onClick={() => setModalType('login')}>Log in</button>
            <button className="btn-primary" onClick={() => setModalType('signup')}>Sign up</button>
          </div>
        </nav>

        {/* Main Content Area */}
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course/:id" element={<CourseDetail />} />
            <Route path="/teach" element={<TeachDashboard />} />
            <Route path="/category/:categoryId" element={<CategoryPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/help-and-support" element={<HelpSupport />} />
            <Route path="/affiliate" element={<Affiliate />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cookie-settings" element={<CookieSettings />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/accessibility-statement" element={<Accessibility />} />
            
            <Route path="*" element={<Home />} />
          </Routes>
        </div>

        {/* Footer Section */}
        <footer className="footer">
          <div className="footer-top">
            <div className="footer-col">
              <div className="logo">Learnify.</div>
              <p>Empowering the world to develop skills for the future.</p>
            </div>
            <div className="footer-col">
              <h3>Learnify Business</h3>
              <Link to="/teach">Teach on Learnify</Link>
              <Link to="/app">Get the app</Link>
              <Link to="/about">About us</Link>
              <Link to="/contact">Contact us</Link>
            </div>
            <div className="footer-col">
              <h3>Careers</h3>
              <Link to="/blog">Blog</Link>
              <Link to="/help-and-support">Help and Support</Link>
              <Link to="/affiliate">Affiliate</Link>
              <Link to="/investors">Investors</Link>
            </div>
            <div className="footer-col">
              <h3>Terms</h3>
              <Link to="/privacy-policy">Privacy policy</Link>
              <Link to="/cookie-settings">Cookie settings</Link>
              <Link to="/sitemap">Sitemap</Link>
              <Link to="/accessibility-statement">Accessibility statement</Link>
              <Link to="/terms">Terms</Link>
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

        {/* Cart Drawer */}
        {isCartOpen && (
          <div className="cart-backdrop" onClick={toggleCart}>
            <div className="cart-drawer" onClick={e => e.stopPropagation()}>
              <div className="cart-header">
                <h2>Your Cart ({cart.length})</h2>
                <button className="close-cart" onClick={toggleCart}>✕</button>
              </div>
              <div className="cart-items">
                {cart.length === 0 ? (
                  <p className="empty-cart">Your cart is empty. Keep shopping to find a course!</p>
                ) : (
                  cart.map(item => (
                    <div className="cart-item" key={item.id}>
                      <img src={item.img} alt={item.title} />
                      <div className="cart-item-details">
                        <h4>{item.title}</h4>
                        <div className="cart-item-price">{item.currentPrice}</div>
                        <button className="remove-item" onClick={() => removeFromCart(item.id)}>Remove</button>
                      </div>
                    </div>
                  ))
                )}
              </div>
              {cart.length > 0 && (
                <div className="cart-footer">
                  <div className="cart-total">
                    <span>Total:</span>
                    <h3>${totalCartPrice}</h3>
                  </div>
                  <button className="btn-primary full-width">Checkout</button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
