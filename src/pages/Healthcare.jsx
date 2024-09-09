
import UseCaseDetails from '../components/UseCaseDetails'; // Adjust the path as needed

const Healthcare = () => {
  return (
    <UseCaseDetails
      title="Healthcare"
      image="your-healthcare-image-url.jpg" // Replace with actual image URL
      introduction="In healthcare, our AI solutions are enhancing diagnostic accuracy, optimizing treatment plans, and enabling predictive analytics. We help medical professionals make data-driven decisions faster, improving patient outcomes and reducing costs."
      benefits={[
        { icon: 'heartbeat', title: 'Improved Diagnostics' },
        { icon: 'stethoscope', title: 'Optimized Treatment Plans' },
        { icon: 'chart-pie', title: 'Predictive Analytics' },
        { icon: 'medkit', title: 'Remote Patient Monitoring' },
      ]}
      features={[
        { title: 'AI-Assisted Diagnosis', description: 'Utilizes machine learning to assist doctors in diagnosing diseases accurately.' },
        { title: 'Patient Risk Assessment', description: 'Predicts potential health risks based on patient data and medical history.' },
        { title: 'Automated Medical Records', description: 'Streamlines administrative tasks and improves patient data management.' },
      ]}
      statistics={[
        { value: '90%', label: 'Improved Diagnostic Accuracy' },
        { value: '60%', label: 'Reduction in Hospital Readmissions' },
        { value: '80%', label: 'Increase in Patient Satisfaction' },
      ]}
      testimonials={[
        { quote: 'AI tools have significantly improved our diagnostic accuracy, leading to better patient outcomes.', author: 'Dr. Emily White', role: 'Cardiologist' },
        { quote: 'The predictive analytics tools are a game-changer for early disease detection.', author: 'Dr. Robert Davis', role: 'Oncologist' },
      ]}
    />
  );
};

export default Healthcare;
