import React, {useState, useEffect} from 'react';
import Search from './Components/Search.js';
import ArticleContainer from './Components/ArticleContainer.js';
import './App.css';

function App() {

  const [input, setInput] = useState('');
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);

  useEffect(() => {
    getArticles();
  }, []);
  
  const getArticles = () => {
    fetch("https://api.nytimes.com/svc/topstories/v2/science.json?api-key=Gwxln5M3geWlhR6UE0TY1FUWKSG3wCil")
    .then(r => r.json())
    .then(articles => {
      setArticles(articles.results);
      setFilteredArticles(articles.results);
    })
  }
  
  const updateInput = (e) => {
      setInput(e.target.value)
  };

  const handleSubmit = (value, e) => {
    e.preventDefault()
    let searchTerms = input.toLowerCase().split(" ")

    setFilteredArticles(articles.filter(article => {
      let title = article.title.toLowerCase()
      let section = article.section.toLowerCase()
      let byline = article.byline.toLowerCase()
      return searchTerms.some(searchTerm => {
        if (title.includes(searchTerm) || section.includes(searchTerm) || byline.includes(searchTerm)) {
          return true;
        }
        return false;
      })
    }))
  };

  return (
    <div className="App">
      <h1>New York Times Science Section</h1>
      <Search input={input} updateInput={updateInput} handleSubmit={handleSubmit}/>
      <ArticleContainer articles={filteredArticles}/>
    </div>
  );
}

export default App;
