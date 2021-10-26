import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col m-0 h-screen min-w-screen shadow-md">
      <div className="top-half bg-header-pattern text-center h-2/5 w-screen shadow-inner z-0">top content</div>
      <div className="bottom-half w-full text-center h-56 bg-blue-gray-100 h-3/5 w-screen shadow-inner z-0">
        bottom content
      </div>
      <div className="m-auto z-10 text-center bg-lime-500 w-4/6">List Notes Here</div>
    </div>
  );
};

export default Home;
