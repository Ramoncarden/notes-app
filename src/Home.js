import React from 'react';
import NoteList from './NoteList';

const Home = ({ openModal, setShowModal }) => {


  return (
    <div className="flex flex-col m-0 h-screen min-w-screen shadow-md relative z-0">
      <div className="top-half bg-header-pattern bg-cover text-center h-2/5 w-screen shadow-inner z-0">top content</div>
      <div className="bottom-half w-full text-center h-56 bg-cool-gray-100 h-3/5 w-screen shadow-inner z-0">
        bottom content
      </div>
      <div className="m-auto z-10 text-center bg-warm-gray-50 w-3/6 absolute inset-x-0 inset-y-40 rounded-lg shadow-2xl">
        <h1 className="text-4xl font-medium text-purple-900 mt-5">My Notes</h1>
        <button onClick={openModal} title="Create a new note" className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-emerald-500 hover:to-cyan-800 text-white text-center py-2 px-4 rounded-full h-14 w-14 inline-flex items-center shadow-lg absolute right-8 top-7">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
        <NoteList />
      </div>
    </div>
  );
};

export default Home;
