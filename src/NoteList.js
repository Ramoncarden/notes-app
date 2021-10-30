import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

const NoteList = () => {
  const [ notes, setNotes ] = useState([]);

  useEffect(() => {
    async function getNotes() {
      try {
        const res = await axios.get('http://localhost:8000/notes');
        setNotes(res.data);
        console.log(res.data)
      } catch (err) {
        console.error(err);
      }
    } getNotes()
  }, [ setNotes ])

  return (
    <section className="text-gray-500 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto ">

        <div className="-my-8 divide-y-2 divide-gray-300 ">
          {notes.map((note) => (
            <div key={note.id} className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-600">{note.date}</span>
                <span className="mt-1 text-gray-500 text-sm">9:07 PM</span>
              </div>
              <div className="md:flex-grow text-left max-w-4xl -mt-1 ml-6 pl-3">
                <h2 className="text-2xl font-medium text-sky-600 title-font mb-2 ">{note.title}</h2>
                <p className="leading-relaxed">{note.content}</p>
                <Link to={`/notes`} className="text-emerald-600 inline-flex items-center mt-4">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
                <span className="text-rose-600 inline-flex items-center mt-4 ml-6">Delete Note
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section >
  )
}

export default NoteList
