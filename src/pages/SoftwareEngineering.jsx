
import UseCaseDetails from '../components/UseCaseDetails';
import code from "../../public/code.png"
import { FaCodepen } from 'react-icons/fa'; // Adjust the path as needed

const SoftwareEngineering = () => {
  return (
    <UseCaseDetails
      title="Making Software Engineering Accessible"
      image={code} // Replace with actual image URL
      introduction="Our AI tools are breaking down barriers to entry in software engineering by simplifying complex concepts, providing real-time feedback, and creating adaptive learning paths for aspiring developers."
      benefits={[
        { icon: { FaCodepen }, title: 'Simplified Coding' },
        { icon: 'chalkboard-teacher', title: 'Real-Time Feedback' },
        { icon: 'brain', title: 'Adaptive Learning' },
        { icon: 'users', title: 'Community Collaboration' },
      ]}
      features={[
        { title: 'Interactive Coding Exercises', description: 'Hands-on coding tasks that adapt to the learner’s level of understanding.' },
        { title: 'AI-Driven Code Analysis', description: 'Provides instant feedback and suggestions for improving code quality.' },
        { title: 'Project-Based Learning', description: 'Real-world projects designed to teach practical software engineering skills.' },
      ]}
      statistics={[
        { value: '85%', label: 'Improvement in Coding Skills' },
        { value: '40%', label: 'Faster Time to Competency' },
        { value: '70%', label: 'Increased Retention Rates' },
      ]}
      testimonials={[
        { quote: 'The AI tools helped me learn coding faster than any traditional course.', author: 'Alice Brown', role: 'Aspiring Developer' },
        { quote: 'Our students have shown remarkable progress thanks to the adaptive learning paths.', author: 'Michael Green', role: 'Instructor' },
      ]}
    />
  );
};

export default SoftwareEngineering;
