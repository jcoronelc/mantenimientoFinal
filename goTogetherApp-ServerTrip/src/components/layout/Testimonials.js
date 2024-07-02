import React from 'react'
import StarsRating from "../../components/ui/StarsRating";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";




function Testimonials() {
  return (
<section class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
  <div class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
  <div class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
  

  <div class="flex flex-col mx-auto max-w-2xl lg:max-w-4xl">
    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-center text-blue-900">Cada evaluación nos da más ganas de continuar 💪</h1>



    <div className='mt-12 relative'>
      <img
        src={require('../../assets/img/people.jpg')}
        alt="Carpool Booking"
        style={{ width: '100%', height: 'auto' }}
        className='rounded-3xl'
      />
      

      <div className="absolute top-1/3 left-0 w-full flex px-6 py-4 mb-2">
        <button className="rounded-lg h-12  bg-blue-200 text-blue-900 hover:bg-blue-100 focus:outline-none p-2 m-1 ">
          <MdArrowBackIosNew className='text-blue-900 hover:text-blue-700' />
        </button>
        <button className="rounded-lg h-12  bg-blue-200 text-blue-900 hover:bg-blue-100 focus:outline-none p-2 m-1">
          <MdArrowForwardIos className='text-blue-900  hover:text-blue-700' />
        </button>
      </div>


         
     
      <div className="absolute mt-2 top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full  mx-auto flex space-x-4 justify-between">


      <figure className="relative rounded-2xl bg-gray-50 p-6 shadow-xl shadow-slate-900/10 w-2/3 ">
          <svg aria-hidden="true" width="105" height="78" className="absolute left-6 top-6 fill-blue-100">
            <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
          </svg>
          <blockquote className="relative">
            <p className="text-lg text-gray-700">I love the fitness apparel and gear I purchased from this site. The quality is exceptional and the prices are unbeatable.</p>
          </blockquote>
        
          <figcaption className="relative mt-6 flex items-center justify-between border-t border-blue-400 pt-6">
         
            <div>
              <div className='mb-2'>
              <StarsRating stars={5} color="text-blue-400" />
              </div> 
          

              <label className="font-display text-base text-blue-900">Sheryl Berge</label>
             
            </div>
            <div className="overflow-hidden rounded-full bg-slate-50">
              <img alt="" className="h-14 w-14 object-cover" style={{ color: 'transparent' }} src="https://randomuser.me/api/portraits/men/15.jpg" />
            </div>
          </figcaption>
        </figure>

     


        <figure className="relative rounded-2xl bg-gray-50 p-6 shadow-xl shadow-slate-900/10 w-2/3 ">
          <svg aria-hidden="true" width="105" height="78" className="absolute left-6 top-6 fill-blue-100">
            <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
          </svg>
          <blockquote className="relative">
          <p className="text-lg text-gray-700">I love the fitness apparel and gear I purchased from this site. The quality is exceptional and the prices are unbeatable.</p>
          </blockquote>
        
          <figcaption className="relative mt-6 flex items-center justify-between border-t border-blue-400 pt-6">
         
            <div>
              <div className='mb-2'>
              <StarsRating stars={3} color="text-blue-400" />
              </div> 
          

              <label className="font-display text-base text-blue-900">Sheryl Berge</label>
             
            </div>
            <div className="overflow-hidden rounded-full bg-slate-50">
              <img alt="" className="h-14 w-14 object-cover" style={{ color: 'transparent' }} src="https://randomuser.me/api/portraits/men/15.jpg" />
            </div>
          </figcaption>
        </figure>


        <figure className="relative rounded-2xl bg-gray-50 p-6 shadow-xl shadow-slate-900/10 w-2/3 ">
          <svg aria-hidden="true" width="105" height="78" className="absolute left-6 top-6 fill-blue-100">
            <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
          </svg>
          <blockquote className="relative">
            <p className="text-lg text-gray-700">I love the fitness apparel and gear I purchased from this site. The quality is exceptional and the prices are unbeatable.</p>
          </blockquote>
        
          <figcaption className="relative mt-6 flex items-center justify-between border-t border-blue-400 pt-6">
         
            <div>
              <div className='mb-2'>
              <StarsRating stars={4} color="text-blue-400" />
              </div> 
          

              <label className="font-display text-base text-blue-900">Sheryl Berge</label>
             
            </div>
            <div className="overflow-hidden rounded-full bg-slate-50">
              <img alt="" className="h-14 w-14 object-cover" style={{ color: 'transparent' }} src="https://randomuser.me/api/portraits/men/15.jpg" />
            </div>
          </figcaption>
        </figure>

        
   

        {/* Otras tarjetas */}
      </div>
    </div>
  </div>
</section>


  )
}

export default Testimonials
