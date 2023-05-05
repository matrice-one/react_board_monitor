import React from 'react';
import { Link } from 'react-router-dom';

const MainContent = () => {
  return (
  <section>
       Welcome
      <Link to="/dashboard">
        <button>Go to dashboard</button>
      </Link>
    </section>
  )
}

export default MainContent;