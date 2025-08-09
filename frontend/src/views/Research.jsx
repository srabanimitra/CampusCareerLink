import  { useState } from 'react';
import './Research.css';

const Research = () => {
  const data = {
    title: "Research on AI",
    description: "Various studies on artificial intelligence.",
    researchAreas: [
      { name: "Machine Learning", details: "Details about Machine Learning, including supervised, unsupervised, and reinforcement learning." },
      { name: "Natural Language Processing", details: "Details about NLP, including sentiment analysis, text generation, and machine translation." },
      { name: "Computer Vision", details: "Details about Computer Vision, including image classification, object detection, and facial recognition." }
    ],
    ongoingProjects: [
      { 
        projectName: "AI Research Project", 
        projectDescription: "Exploring the possibilities of AI for healthcare, specifically for diagnostics.",
        detailedDescription: `This project aims to leverage advanced machine learning algorithms, including deep learning models, to assist in diagnosing medical conditions more accurately and quickly. 
        The AI model is being trained on various medical datasets, including X-rays, CT scans, and patient medical records. The goal is to enable early detection of diseases such as cancer, heart disease, and neurological disorders.
        We are collaborating with healthcare institutions for data and real-world testing. The project is being developed by a diverse team of data scientists, healthcare professionals, and software engineers, with plans to conduct clinical trials by the end of 2023.
        Technologies used include TensorFlow, Python, and OpenCV, with an emphasis on explainable AI to ensure trust and reliability in medical decision-making systems.` 
      },
      { 
      
        projectName: "NLP for Social Media", 
        projectDescription: "A project aimed at analyzing user sentiments on social media platforms.",
        detailedDescription: `This project focuses on analyzing user-generated content on platforms like Twitter, Facebook, and Instagram to understand public sentiment and opinions. 
        It uses NLP techniques such as sentiment analysis, keyword extraction, and topic modeling to gauge the overall mood of posts related to specific topics or brands.
        The goal is to provide insights to businesses, political analysts, and researchers about user perceptions, helping them make informed decisions based on social media trends.
        The project utilizes tools like Python, NLTK, and spaCy for text processing and sentiment analysis algorithms like VADER and TextBlob.` 
      }
    ],
    publications: [
      { 
        title: "Deep Learning for Healthcare", 
        year: 2022, 
        link: "https://example.com/publication/deep-learning-healthcare" 
      },
      { 
        title: "Natural Language Understanding for Text Mining", 
        year: 2021, 
        link: "https://example.com/publication/natural-language-text-mining" 
      }
    ],
    collaborations: [
      { institution: "MIT", description: "Collaboration on AI in healthcare." },
      { institution: "Stanford University", description: "Collaboration on NLP and its applications in social media." }
    ]
  };

  const [expandedProjectIndex, setExpandedProjectIndex] = useState(null);

  const toggleProjectDetails = (index) => {
    setExpandedProjectIndex(expandedProjectIndex === index ? null : index);
  };

  return (
    <div className="research-container">
      <h1 className="title">{data.title}</h1>
      <p className="description">{data.description}</p>

      <div className="research-areas">
        <h2>Research Areas</h2>
        <ul>
          {data.researchAreas.map((area, index) => (
            <li key={index} className="area-item">
              <strong>{area.name}:</strong> {area.details}
            </li>
          ))}
        </ul>
      </div>

      <div className="ongoing-projects">
        <h2>Ongoing Projects</h2>
        <ul>
          {data.ongoingProjects.map((project, index) => (
            <li key={index} className="project-item">
              <strong>{project.projectName}:</strong> {project.projectDescription}
              <button
                className="expand-button"
                onClick={() => toggleProjectDetails(index)}
              >
                {expandedProjectIndex === index ? "Collapse" : "Expand"}
              </button>
              {expandedProjectIndex === index && (
                <p className="project-details">{project.detailedDescription}</p>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="publications">
        <h2>Publications</h2>
        <ul>
          {data.publications.map((publication, index) => (
            <li key={index} className="publication-item">
              <strong>{publication.title}</strong> ({publication.year}) -{' '}
              <a href={publication.link} target="_blank" rel="noopener noreferrer" className="publication-link">Read More</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="collaborations">
        <h2>Collaborations</h2>
        <ul>
          {data.collaborations.map((collaboration, index) => (
            <li key={index} className="collaboration-item">
              <strong>{collaboration.institution}:</strong> {collaboration.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Research;
