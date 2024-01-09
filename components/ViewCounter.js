import { useState, useEffect } from 'react';

const ViewCounter = () => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    // Fetch view count from the API on each render
    fetch('/api/views')
      .then((response) => response.json())
      .then((data) => setViews(data.views));
  }, []);

  return (
    <div>
      <h1>Page Views: {views}</h1>
    </div>
  );
};

export default ViewCounter;
