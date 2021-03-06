import axios from 'axios';
import React, { useState } from 'react';

const Create = ({ openModal, showModal }) => {
  const currentTime = new Date();
  const [formData, setFormData] = useState({
    title: '',
    date: currentTime.toDateString(),
    content: '',
    time: currentTime.toLocaleTimeString(),
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((item) => ({ ...item, [name]: value }));
  }

  async function handleSubmit(evt) {
    try {
      evt.preventDefault();
      let res = await axios.post('http://localhost:8000/notes', formData);
      console.log(res);
      openModal();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      {showModal ? (
        <div className='modal fixed w-full h-full top-0 left-0 flex items-center justify-center'>
          <div className='modal-overlay absolute w-full h-full bg-gray-900 opacity-50'></div>

          <div className='modal-container bg-white w-11/12 md:max-w-xl mx-auto rounded shadow-lg z-50 overflow-y-auto'>
            <div
              onClick={openModal}
              className='modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50'
            >
              <svg
                className='fill-current text-white'
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='18'
                viewBox='0 0 18 18'
              >
                <path d='M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z'></path>
              </svg>
              <span className='text-sm'>(Esc)</span>
            </div>

            <div className='modal-content py-4 text-left px-6'>
              <div className='flex justify-between items-center pb-3'>
                <p className='text-2xl font-bold text-purple-900'>
                  Add a new note
                </p>
                <div
                  onClick={openModal}
                  className='modal-close cursor-pointer z-50'
                >
                  <svg
                    className='fill-current text-black'
                    xmlns='http://www.w3.org/2000/svg'
                    width='18'
                    height='18'
                    viewBox='0 0 18 18'
                  >
                    <path d='M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z'></path>
                  </svg>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <div className='p-2 w-1/2'>
                  <div className='relative'>
                    <label
                      htmlFor='title'
                      className='leading-7 text-sm text-gray-600'
                    >
                      Title
                    </label>
                    <input
                      type='text'
                      id='title'
                      name='title'
                      value={formData.title}
                      onChange={handleChange}
                      className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                    />
                  </div>
                </div>

                <div className='p-2 w-full'>
                  <div className='relative'>
                    <label
                      htmlFor='content'
                      className='leading-7 text-sm text-gray-600'
                    >
                      Message
                    </label>
                    <textarea
                      id='content'
                      name='content'
                      required
                      value={formData.content}
                      onChange={handleChange}
                      className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
                    ></textarea>
                  </div>
                </div>

                <div className='flex justify-end pt-2'>
                  <button
                    type='submit'
                    className='px-4 bg-transparent p-3 rounded-lg text-emerald-600 hover:bg-gray-100 hover:text-emerald-400 mr-2'
                  >
                    Add
                  </button>
                  <button
                    onClick={openModal}
                    className='px-4 bg-purple-700 p-3 rounded-lg text-white hover:bg-purple-400'
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Create;
