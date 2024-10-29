import React from 'react';
import PropTypes from 'prop-types';
import '../../src/App.css'

const News = ({ articles }) => {
  return (
    <div className="flex flex-col gap-5 p-5">
      {articles && articles.length > 0 ? (
        articles.map((article, index) => (
          <div key={index} className="flex border border-gray-300 rounded-lg overflow-hidden shadow-lg">
            <img src={article.imageUrl} alt={article.title} className="w-48 h-36 object-cover" />
            <div className="p-4 flex flex-col">
              <h2 className="text-xl font-bold mb-2 text-white">{article.title}</h2>
              <p className="mb-4 text-gray-400">{article.description}</p>
              <a 
                href={article.link} 
                className="text-blue-400 font-semibold hover:underline" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Read more
              </a>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center p-10 bg-gray-800 rounded-lg">
          <h2 className="text-2xl font-bold text-white mb-4">No News Articles Available</h2>
          <p className="text-gray-400 mb-4">It looks like there are no articles to display at the moment. Please check back later for the latest updates.</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Refresh Page
          </button>
        </div>
      )}
    </div>
  );
};

News.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      imageUrl: PropTypes.string,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default News;

// App.css

