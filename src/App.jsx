import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Research from "./pages/Research";
import Products from "./pages/Products";
import Company from "./pages/Company";
import { motion } from "framer-motion";
import Education from "./pages/Education";
import SoftwareEngineering from "./pages/SoftwareEngineering";
import Healthcare from "./pages/Healthcare";
import ContactPage from "./components/ContactForm";
import Careers from "./pages/Careers";
import News from "./pages/News";
import About from "./pages/About";
import ApiPage from "./pages/Api";
import Pricing from "./pages/Pricing";
import Privacy from "./pages/Privacy";
import CodeWhisperer from "./pages/CodeWhisperer";
import SentientV1 from "./pages/SentientV1"
import Documentation from "./pages/Documentation"

const App = () => {
  return (
    <Router>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col min-h-screen bg-secondary text-primary"
      >
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<Research />} />
            <Route path="/products" element={<Products />} />
            <Route path="/docs" element={<Documentation/>}/>
            <Route path="/products/codewhisperer" element={<CodeWhisperer/>}/>
            <Route path="/products/sentient-v1" element={<SentientV1 />} />
            <Route path="/company" element={<Company />} />
            <Route path="/company/careers" element={<Careers />} />
            <Route path="/company/news" element ={<News />} />
            <Route path="/company/about" element={<About />} />
            <Route path="/company/security" element={<Privacy />} />
            <Route path="/company/api" element={<ApiPage/>}/>
            <Route path="/company/pricing" element={<Pricing/>}/>
            <Route path="/education" element={<Education />} />
            <Route
              path="/software-engineering"
              element={<SoftwareEngineering />}
            />
            <Route path="/healthcare" element={<Healthcare />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </motion.div>
    </Router>
  );
};

export default App;
