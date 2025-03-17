import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-8 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-10">Skills</h2>
      
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div>
          <h3 className="text-2xl font-semibold mb-4">Programming Languages</h3>
          <p>Python, SQL</p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">Machine Learning & AI</h3>
          <p>Machine Learning, Deep Learning, Data Analysis, Data Visualization, EDA, ETL</p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">Libraries/Frameworks</h3>
          <p>Keras, TensorFlow, PyTorch, NumPy, Pandas, Matplotlib, Seaborn</p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">Tools</h3>
          <p>Jupyter Notebooks, Google Colab, Git, GitHub</p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">Others</h3>
          <p>Data Structures, Algorithms, RESTful APIs</p>
        </div>

      </div>
    </section>
  );
};

export default Skills;
