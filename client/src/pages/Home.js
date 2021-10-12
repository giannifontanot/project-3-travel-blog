import React, {useState} from 'react';
import NavigationHeader from '../components/NavigationHeader';

import Dashboard from './Dashboard';
import CreateReview from './CreateReview';
import Login from './Login';

export default function PortfolioContainer() {
  const [pageToDraw, setPageToDraw] = useState('Dashboard');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (pageToDraw === 'Login') {
      return <Login />;
    }
    if (pageToDraw === 'Dashboard') {
      return <Dashboard/>;
    }
    if (pageToDraw === 'CreateReview') {
      return <CreateReview/>;
    }
    return <Dashboard/>;
  };

  const handlePageChange = (page) => setPageToDraw(page);

  return (
      <div>
        {/* We are passing the currentPage from state and the function to update it */}
        <NavigationHeader pageToDraw={pageToDraw} handlePageChange={handlePageChange}/>
        {/* Here we are calling the renderPage method which will return a component  */}
        {renderPage()}
      </div>
  );
}