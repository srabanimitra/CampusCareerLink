import 'react';
import './InnovationPage.css'; // Add your styles here

const InnovationPage = () => {
  return (
    <div className="innovation-page">
      <h1>Innovation at Ahsanullah University of Science & Technology</h1>
      <p>
        Ahsanullah University of Science & Technology (AUST) is leading groundbreaking research across diverse fields to tackle
        real-world problems through innovative solutions. We are developing technologies and systems that address urgent societal
        challenges, such as healthcare, energy sustainability, and urban development.
      </p>

      <h2>Innovative Projects</h2>
      
      <div className="innovation-project">
        <h3>AI for Healthcare</h3>
        <p>
          AUST is pioneering the use of AI to revolutionize healthcare diagnostics. Our AI-powered system analyzes medical data to
          detect diseases like cancer and heart conditions at early stages, enabling quicker, more accurate treatment. This project
          is already being tested in partnership with local hospitals and aims to reduce diagnostic errors by over 25%.
        </p>
        <ul>
          <li><strong>Project Goal:</strong> To improve diagnostic accuracy using AI and reduce human errors in healthcare.</li>
          <li><strong>Key Impact:</strong> Clinical trials show a 30% improvement in early-stage cancer detection.</li>
          <li><strong>Partners:</strong> Collaborating with Dhaka Medical College, and AI healthcare startup XHealth.</li>
          <li><strong>Case Study:</strong> “Our AI system detected early-stage breast cancer in 500+ patients last year, saving lives and guiding effective treatments.”</li>
        </ul>
      </div>

      <div className="innovation-project">
        <h3>Smart City Solutions</h3>
        <p>
          With the growth of urban areas, AUST is developing Smart City solutions that leverage IoT and AI to manage traffic,
          reduce waste, and improve energy efficiency. Our pilot smart traffic management system has reduced traffic congestion
          in a test area by 25% by optimizing traffic lights in real-time based on data analytics.
        </p>
        <ul>
          <li><strong>Project Goal:</strong> To enhance urban life through efficient resource management and tech-driven solutions.</li>
          <li><strong>Key Impact:</strong> Over 50% reduction in energy consumption in pilot buildings using smart systems.</li>
          <li><strong>Partners:</strong> Collaborating with the Dhaka City Corporation and global tech companies.</li>
          <li><strong>Visual Example:</strong> Real-time traffic analytics system being used in Dhaka’s busiest areas.</li>
        </ul>
      </div>

      <div className="innovation-project">
        <h3>Renewable Energy Projects</h3>
        <p>
          AUST&apos;s renewable energy projects aim to tackle climate change by providing sustainable energy sources. Our solar energy
          solutions are being implemented in rural schools, and we have already installed solar panels in over 50 schools, providing
          clean energy to thousands of students. These systems not only provide reliable electricity but also reduce dependency on
          fossil fuels, cutting down carbon emissions significantly.
        </p>
        <ul>
          <li><strong>Project Goal:</strong> To create sustainable energy systems that reduce environmental impact and promote green energy.</li>
          <li><strong>Key Impact:</strong> Over 50 schools now have access to free, clean electricity, benefiting over 10,000 students.</li>
          <li><strong>Partners:</strong> Government of Bangladesh, local renewable energy firms.</li>
          <li><strong>Case Study:</strong> “The introduction of solar power has transformed education in rural areas, where power cuts were frequent.”</li>
        </ul>
      </div>
    </div>
  );
};

export default InnovationPage;
