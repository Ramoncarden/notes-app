import React from 'react';
import NoteList from './NoteList';

const Home = () => {
  return (
    <div className="flex flex-col m-0 h-screen min-w-screen shadow-md relative z-0">
      <div className="top-half bg-header-pattern bg-cover text-center h-2/5 w-screen shadow-inner z-0">top content</div>
      <div className="bottom-half w-full text-center h-56 bg-cool-gray-100 h-3/5 w-screen shadow-inner z-0">
        bottom content
      </div>
      <div className="m-auto z-10 text-center bg-warm-gray-50 w-3/6 absolute inset-x-0 inset-y-40 rounded-lg shadow-2xl">
        <h1>My Notes</h1>
        <NoteList />
      </div>
    </div>
  );
};

export default Home;
