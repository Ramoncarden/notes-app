import React from 'react'
import { Link, useHistory } from 'react-router-dom'

const NoteList = () => {
  return (
    <section class="text-gray-500 body-font overflow-hidden">
      <div class="container px-5 py-24 mx-auto ">
        <div class="-my-8 divide-y-2 divide-gray-800 ">
          <div class="py-8 flex flex-wrap md:flex-nowrap">
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span class="font-semibold title-font text-gray-600">CATEGORY</span>
              <span class="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
            </div>
            <div class="md:flex-grow text-left max-w-4xl -mt-1 ml-6 pl-3">
              <h2 class="text-2xl font-medium text-sky-600 title-font mb-2 ">Bitters hashtag waistcoat fashion axe chia unicorn</h2>
              <p class="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
              <Link to={`/notes`} class="text-emerald-600 inline-flex items-center mt-4">Learn More
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
              <span class="text-rose-600 inline-flex items-center mt-4 ml-6">Delete Note
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default NoteList
