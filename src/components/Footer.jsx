
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-primary text-secondary py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold mb-4">Featured</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:underline">LLM Model</Link></li>
            <li><Link to="/" className="hover:underline">API</Link></li>
            <li><Link to="/" className="hover:underline">Enterprise</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><Link to="/company" className="hover:underline">About</Link></li>
            <li><Link to="/company" className="hover:underline">Blog</Link></li>
            <li><Link to="/company" className="hover:underline">Careers</Link></li>
          </ul>
        </div>
        {/* Add more footer sections as needed */}
      </div>
    </div>
  </footer>
);

export default Footer;