import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      {/* <!-- Header --> */}
      <header>
        <div className="container header-container">
          <Link to='/' className="logo">
            <i className="fas fa-calculator"></i>
            StructCalc Pro
          </Link>
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/'>Services</Link></li>
              <li><Link to='/'>Software Tools</Link></li>
              <li><Link to='/'>Resources</Link></li>
              <li><Link to='/'>Case Studies</Link></li>
              <li><Link to='/'>About Us</Link></li>
              <li><Link to='/'>Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* <!-- Hero Section --> */}
      <section className="hero">
        <div className="container">
          <h1>Precision Structural Engineering Solutions</h1>
          <p>Advanced analysis, optimized designs, and reliable calculations for your projects</p>
          <div className="hero-btns">
            <Link to="/" className="btn btn-accent">Get Started with a Free Analysis</Link>
            <Link to="/" className="btn btn-outline">Explore Our Tools</Link>
          </div>
        </div>
      </section>

      {/* <!-- Services Section --> */}
      <section className="container">
        <h2 className="section-title">Our Comprehensive Structural Engineering Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <i className="fas fa-calculator"></i>
            <h3>Structural Analysis</h3>
            <p>Advanced modeling and analysis for all structure types using cutting-edge software and methodologies.</p>
          </div>
          <div className="service-card">
            <i className="fas fa-lightbulb"></i>
            <h3>Design Optimization</h3>
            <p>Cost-effective, material-efficient structural solutions that meet all safety and regulatory requirements.</p>
          </div>
          <div className="service-card">
            <i className="fas fa-wave-square"></i>
            <h3>Seismic Evaluation</h3>
            <p>Earthquake-resistant design and retrofitting services to protect your structures from seismic activity.</p>
          </div>
          <div className="service-card">
            <i className="fas fa-laptop-code"></i>
            <h3>Software Solutions</h3>
            <p>Custom tools and software solutions designed specifically for structural engineers needs.</p>
          </div>
        </div>
      </section>

      {/* <!-- Tools Section --> */}
      <section className="tools-section">
        <div className="container">
          <h2 className="section-title">Powerful Structural Engineering Tools</h2>

          <div className="tool-demo">
            <h3>Beam Load Calculator</h3>
            <div className="calculator">
              <input type="text" id="calc-display" disabled></input>
              <button>7</button>
              <button>8</button>
              <button>9</button>
              <button>÷</button>
              <button>4</button>
              <button>5</button>
              <button>6</button>
              <button>×</button>
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>-</button>
              <button>0</button>
              <button>.</button>
              <button className="equals">=</button>
              <button>+</button>
            </div>
            <p>Try our free beam load calculator to determine stresses and deflections.</p>
            <Link to="/" className="btn">Try Full Version</Link>
          </div>

          <div className="tools-list">
            <div className="tool-item">
              <h4>Frame Analysis Pro</h4>
              <p>Advanced 2D and 3D frame analysis with real-time visualization.</p>
            </div>
            <div className="tool-item">
              <h4>Concrete Design Suite</h4>
              <p>Complete solution for reinforced concrete design and detailing.</p>
            </div>
            <div className="tool-item">
              <h4>Steel Connection Designer</h4>
              <p>Design and analyze steel connections with automated code checks.</p>
            </div>
            <div className="tool-item">
              <h4>Foundation Calculator</h4>
              <p>Quick calculations for various foundation types and soil conditions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Case Studies --> */}
      <section className="container">
        <h2 className="section-title">Success Stories in Structural Engineering</h2>
        <div className="case-studies">
          <div className="case-study">
            <img src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Commercial Building" />
            <div className="case-study-content">
              <h3>Downtown High-Rise Retrofit</h3>
              <p className="challenge">Challenge: Seismic upgrade without disrupting tenants</p>
              <p>Our team developed an innovative phased retrofit approach that allowed the building to remain occupied throughout construction.</p>
            </div>
          </div>
          <div className="case-study">
            <img src="https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Bridge Project" />
            <div className="case-study-content">
              <h3>Long-Span Pedestrian Bridge</h3>
              <p className="challenge">Challenge: Minimizing weight while maintaining stiffness</p>
              <p>Our optimized design used advanced composite materials to achieve a 30% weight reduction while meeting all vibration requirements.</p>
            </div>
          </div>
          <div className="case-study">
            <img src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Stadium Project" />
            <div className="case-study-content">
              <h3>Sports Stadium Roof Design</h3>
              <p className="challenge">Challenge: Large cantilever with strict deflection limits</p>
              <p>Our innovative tension system allowed for an impressive 50m cantilever while keeping deflections within 1/500 of the span.</p>
            </div>
          </div>
        </div>
        <div className="">
          <Link to="/" className="btn">View All Projects</Link>
        </div>
      </section>

      {/* <!-- Testimonials --> */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="testimonial-grid">
            <div className="testimonial">
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p>StructCalc Pro analysis identified critical design flaws that others missed. Their team provided not just problems but practical solutions that saved us time and money.</p>
              <div className="author">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client" />
                <div>
                  <h4>Michael Johnson</h4>
                  <p>Principal Architect, DesignWorks</p>
                </div>
              </div>
            </div>
            <div className="testimonial">
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p>The custom software tools developed by StructCalc Pro have streamlined our design process by 40%. Their understanding of structural engineering workflows is unmatched.</p>
              <div className="author">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Client" />
                <div>
                  <h4>Sarah Chen</h4>
                  <p>Structural Engineer, BuildRight Inc.</p>
                </div>
              </div>
            </div>
            <div className="testimonial">
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <p>Their seismic evaluation report was so thorough that it helped us secure funding for our retrofit project. The city reviewers commented it was the most complete analysis they had seen.</p>
              <div className="author">
                <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Client" />
                <div>
                  <h4>David Rodriguez</h4>
                  <p>Project Manager, Urban Developers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Resources --> */}
      <section className="container">
        <h2 className="section-title">Structural Engineering Resources</h2>
        <div className="resources-grid">
          <div className="resource-card">
            <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Engineering Blog" />
            <div className="resource-content">
              <h4>Understanding Lateral Load Systems</h4>
              <p>A comprehensive guide to designing for wind and seismic forces in modern structures.</p>
              <Link to="/">Read More →</Link>
            </div>
          </div>
          <div className="resource-card">
            <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Webinar" />
            <div className="resource-content">
              <h4>Upcoming Webinar: BIM for Structural Engineers</h4>
              <p>Learn how to integrate BIM workflows into your structural design process.</p>
              <Link to="/">Register Now →</Link>
            </div>
          </div>
          <div className="resource-card">
            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Guide" />
            <div className="resource-content">
              <h4>Free Download: 10 Common Structural Design Mistakes</h4>
              <p>Learn how to avoid costly errors in your structural designs.</p>
              <Link to="/">Download Guide →</Link>
            </div>
          </div>
        </div>

        <div className="newsletter">
          <h3>Stay Updated with Structural Engineering Insights</h3>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>

      {/* <!-- Footer --> */}
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h4>StructCalc Pro</h4>
              <p>Providing advanced structural engineering solutions since 2010. Precision, reliability, innovation.</p>
              <div className="social-links">
                <Link to="/"><i className="fab fa-linkedin"></i></Link>
                <Link to="/"><i className="fab fa-twitter"></i></Link>
                <Link to="/"><i className="fab fa-youtube"></i></Link>
                <Link to="/"><i className="fab fa-github"></i></Link>
              </div>
            </div>
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Services</Link></li>
                <li><Link to="/">Software Tools</Link></li>
                <li><Link to="/">Case Studies</Link></li>
                <li><Link to="/">About Us</Link></li>
                <li><Link to="/">Contact</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                <li><Link to="/">Structural Analysis</Link></li>
                <li><Link to="/">Design Optimization</Link></li>
                <li><Link to="/">Seismic Evaluation</Link></li>
                <li><Link to="/">Software Development</Link></li>
                <li><Link to="/">Training</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact Us</h4>
              <ul>
                <li><i className="fas fa-map-marker-alt"></i> 123 Engineering Way, Suite 400</li>
                <li><i className="fas fa-phone"></i> (555) 123-4567</li>
                <li><i className="fas fa-envelope"></i> info@structcalcpro.com</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2023 StructCalc Pro. All rights reserved. | <Link to="/">Privacy Policy</Link> | <Link to="/">Terms of Service</Link></p>
          </div>
        </div>
      </footer>

    </>

  );
}
