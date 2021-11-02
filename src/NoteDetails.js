import React, { useState, useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import axios from 'axios';

const NoteDetails = () => {
  const [noteDetails, setNoteDetails] = useState([]);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function populateDetails() {
      try {
        const res = await axios.get(`http://localhost:8000/notes/${id}`);
        setNoteDetails(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    populateDetails();
  }, [id]);

  const deleteNote = async () => {
    try {
      await axios.delete(`http://localhost:8000/notes/${id}`);
      history.push('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className='text-gray-600 body-font mt-10 w-6/12 mx-auto'>
      <div className='container px-5 py-20 mx-auto flex flex-wrap border-2 items-center'>
        <h2 className='sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5 text-center'>
          {noteDetails.date}
          <span className='mt-2 text-gray-500 text-sm block'>
            {noteDetails.time}
          </span>
        </h2>

        <div className='md:w-3/5 md:pl-6 text-center'>
          <h3 className='sm:text-2xl text-xl text-gray-500 font-medium mb-2 text-center'>
            {noteDetails.title}{' '}
          </h3>

          <p className='leading-relaxed text-base mt-4'>
            {noteDetails.content}
          </p>
          <div className='md:mt-10 mt-6 mx-auto'>
            <button
              onClick={deleteNote}
              className='text-white bg-rose-500 border-0 py-1 px-4 focus:outline-none hover:bg-rose-600 rounded'
            >
              Delete Note
            </button>
            <Link
              to='/'
              className='text-emerald-500 inline-flex items-center ml-4 hover:text-emerald-600'
            >
              Back
              <svg
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                className='w-4 h-4 ml-2'
                viewBox='0 0 24 24'
              >
                <path d='M5 12h14M12 5l7 7-7 7'></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoteDetails;
