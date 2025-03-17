import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-800 py-20 px-8">
      <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Plant Disease Detection */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-3">Plant Disease Detection</h3>
          <p>
            Built a PyTorch-based model with 93% accuracy for detecting plant diseases. Deployed with Flask and React.js.
          </p>
          <a href="https://github.com/astrasourav/Plant-Disease-Detection_1" target="_blank" className="text-yellow-400 mt-4 block">GitHub Repo</a>
        </div>

        {/* Breast Cancer Prediction */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-3">Breast Cancer Prediction</h3>
          <p>
            ML models (Logistic Regression, SVM, Random Forest) with 98.24% accuracy for tumor classification. Used Scikit-learn.
          </p>
          <a href="https://github.com/astrasourav/BreastCancer_ML_Model/" target="_blank" className="text-yellow-400 mt-4 block">GitHub Repo</a>
        </div>

        {/* Telecom Churn Prediction */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-3">Telecom Churn Prediction</h3>
          <p>
            A machine learning model that predicts customer churn in telecom industry. Deployed online with an interactive UI for live predictions.
          </p>
          <a href="https://telecom-churn-model.onrender.com/" target="_blank" className="text-yellow-400 mt-4 block">Live Site</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
