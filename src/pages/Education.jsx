
import UseCaseDetails from '../components/UseCaseDetails'; // Adjust the path as needed

const Education = () => {
  return (
    <UseCaseDetails
      title="Education"
      image="your-education-image-url.jpg" // Replace with actual image URL
      introduction="Our AI-driven tools are revolutionizing education by providing personalized learning experiences, automating administrative tasks, and enabling educators to focus on what matters most – teaching."
      benefits={[
        { icon: 'graduation-cap', title: 'Personalized Learning' },
        { icon: 'robot', title: 'Intelligent Tutoring Systems' },
        { icon: 'chart-line', title: 'Advanced Analytics' },
        { icon: 'globe', title: 'Global Accessibility' },
      ]}
      features={[
        { title: 'Adaptive Learning Paths', description: 'AI adjusts learning content and pace based on individual performance and needs.' },
        { title: 'Automated Grading', description: 'Reduces time spent on grading, allowing educators to focus more on students.' },
        { title: 'Content Recommendation', description: 'Provides personalized content suggestions to enhance learning outcomes.' },
      ]}
      statistics={[
        { value: '95%', label: 'Increase in Student Engagement' },
        { value: '50%', label: 'Reduction in Administrative Tasks' },
        { value: '75%', label: 'Faster Learning Completion' },
      ]}
      testimonials={[
        { quote: 'AI tools have transformed our classroom, making learning more engaging and efficient.', author: 'John Doe', role: 'Educator' },
        { quote: 'Personalized learning paths have significantly improved our students’ performance.', author: 'Jane Smith', role: 'Principal' },
      ]}
    />
  );
};

export default Education;
