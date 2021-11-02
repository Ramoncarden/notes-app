import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const NoteList = ({ openModal }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function getNotes() {
      try {
        const res = await axios.get('http://localhost:8000/notes');
        setNotes(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    getNotes();
  }, [openModal]);

  return (
    <section className='text-gray-500 body-font overflow-hidden'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='-my-8 divide-y-2 divide-gray-300'>
          {notes.map((note) => (
            <div key={note.id} className='py-8 flex flex-wrap md:flex-nowrap '>
              <div className='md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col'>
                <span className='font-semibold title-font text-gray-600'>
                  {note.date}
                </span>
                <span className='mt-1 text-gray-500 text-sm'>{note.time}</span>
              </div>
              <div className='md:flex-grow text-left max-w-4xl -mt-1 ml-6 pl-3'>
                <h2 className='text-2xl font-medium text-sky-600 title-font mb-2 '>
                  {note.title}
                </h2>
                <p className='leading-relaxed max-h-44 overflow-hidden'>
                  {note.content}
                </p>
                <Link
                  to={`/notes/${note.id}`}
                  className='text-emerald-600 inline-flex items-center mt-4 hover:text-emerald-800'
                >
                  Learn More
                  <svg
                    className='w-4 h-4 ml-2'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth='2'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path d='M5 12h14'></path>
                    <path d='M12 5l7 7-7 7'></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NoteList;
