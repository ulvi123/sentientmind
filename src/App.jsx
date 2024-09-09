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
            <Route path="/company" element={<Company />} />
            <Route path="/education" element={<Education />} />
            <Route
              path="/software-engineering"
              element={<SoftwareEngineering />}
            />
            <Route path="/healthcare" element={<Healthcare />} />
          </Routes>
        </main>
        <Footer />
      </motion.div>
    </Router>
  );
};

export default App;
