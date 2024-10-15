import { BaseAPIURL } from '../constant';
import React, { useEffect, useState } from 'react';

const NewsFeed = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const resp = await fetch(BaseAPIURL);
      if (!resp.ok) {
        console.log('respone is not okay');
        throw new Error('Failed to fetch news');
      }

      const data = await resp.json();
      setNews(data);
    } catch (err) {
      setError(err.message);
      console.log(err);
      setLoading(false);
    } finally {
      setLoading(false); // Set loading to false after the request finishes
    }
  };
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div>
      <h1>News Feed</h1>
      {!error && (
        <ul>
          {news.map((article) => (
            <li key={article.id}>
              <h3>{article.title}</h3>
              <p>{article.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NewsFeed;
