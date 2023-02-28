import React from 'react'
import Card from '../components/card'

import photo from '../assets/images/foto1.png'
import photo2 from 'C:/Users/HP/Desktop/ReactProjects/digiency-project/src/assets/foto2.png'
import photo3 from 'C:/Users/HP/Desktop/ReactProjects/digiency-project/src/assets/foto2.png'
import photo4 from 'C:/Users/HP/Desktop/ReactProjects/digiency-project/src/assets/foto3.png'

import photo5 from 'C:/Users/HP/Desktop/ReactProjects/digiency-project/src/assets/foto4.jpg'
import photo6 from 'C:/Users/HP/Desktop/ReactProjects/digiency-project/src/assets/foto5.jpg'
import photo7 from 'C:/Users/HP/Desktop/ReactProjects/digiency-project/src/assets/foto6.jpg'
import photo8 from 'C:/Users/HP/Desktop/ReactProjects/digiency-project/src/assets/foto7.jpg'
import photo9 from 'C:/Users/HP/Desktop/ReactProjects/digiency-project/src/assets/foto8.jpg'
import photo10 from 'C:/Users/HP/Desktop/ReactProjects/digiency-project/src/assets/foto9.jpg'
import photo11 from 'C:/Users/HP/Desktop/ReactProjects/digiency-project/src/assets/foto10.jpg'
import photo12 from 'C:/Users/HP/Desktop/ReactProjects/digiency-project/src/assets/foto11.jpg'
import photo13 from 'C:/Users/HP/Desktop/ReactProjects/digiency-project/src/assets/foto12.jpg'
import photo15 from 'C:/Users/HP/Desktop/ReactProjects/digiency-project/src/assets/foto14.jpg'
import photo16 from 'C:/Users/HP/Desktop/ReactProjects/digiency-project/src/assets/foto15.jpg'
import photo17 from 'C:/Users/HP/Desktop/ReactProjects/digiency-project/src/assets/foto13.jpg'
import photo18 from 'C:/Users/HP/Desktop/ReactProjects/digiency-project/src/assets/foto17.jpg'


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
  {
    id: 1,
    username: 'Phillip Levin',
    testimonial: 'Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus.',
    work: 'CEO / Creative IT'
  },
  {
    id: 2,
    username: 'Lincoln Lipshutz',
    testimonial: 'Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus.',
    work: 'CEO / Creative IT'
  },
  {
    id: 3,
    username: 'Craig Siphron',
    testimonial: 'Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus.',
    work: 'CEO / Creative IT'
  },
  {
    id: 4,
    username: 'Craig Siphron',
    testimonial: 'Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus.',
    work: 'CEO / Creative IT'
  },
  {
    id: 5,
    username: 'Craig Siphron',
    testimonial: 'Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus.',
    work: 'CEO / Creative IT'
  }
]


const Home = () => {
  return (
    <div>
      <div className="bg-white dark:bg-raisinBlack">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h2 className='py-3 max-w-2xl mb-4 leading-none md:text-5xl xl:text-5xl dark:text-white text-3xl font-bold text-onyx'>Choose What Matters <br /> To You Business & Your <br /> Customers</h2>
            <p className=' text-gray max-w-2xl mb-6 font-light  lg:mb-4 md:text-lg lg:text-md dark:text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam <br />
              in digni ssim euismod purus donec mus vulputate habitant iaculis. Com <br />
              odo enim ornare turpis tempus enim, nibh nulla. Rhoncus sed.</p>

            <a href="#" className="inline-flex items-center px-5 py-3 my-5 text-sm font-medium text-center text-white bg-mysticRed rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
              Get Started Now

            </a>

          </div>
          <div className=" lg:mt-0 lg:col-span-5 lg:flex">
            <img src={photo} alt="/" />
          </div>
        </div>
      </div>

      <div className='w-full bg-floralWhite dark:bg-black'>
        <div className='text-center pt-6'>
          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-64 h-px bg-mysticRed border-0 dark:bg-mysticRed" />
            <p className="absolute px-3 text-xs font-medium text-mysticRed -translate-x-1/2 bg-floralWhite dark:bg-black left-1/2 dark:text-white ">Our Services</p>
          </div>
          <h2 className='text-2xl font-bold text-onyx dark:text-white pt-5 pb-5'>What We Do</h2>

        </div>


        <div className='flex items-center justify-center container mx-auto  pb-8'>
          <div className='gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>

            <div className="max-w-sm p-6  bg-white border border-gray rounded-lg shadow dark:bg-BlackOlive dark:border-BlackOlive">
              <div >
                <img className='w-12 h-12 mb-2' src={photo3} alt="" />
              </div>
              <a href="#">
                <h6 className="mb-2  font-semibold tracking-tight text-onyx dark:text-white">UX Design</h6>
              </a>
              <p className="mb-3 text-xs text-gray dark:text-white">Mobile App, Website</p>
              <p className='mb-3 text-sm text-gray dark:text-white'>Lorem ipsum dolor sit amet, consec tet <br /> ur adipiscing elit. Accumsan sed faucibu <br /> s faucibus augue. Cras ut.</p>

            </div>
            <div className="max-w-sm p-6 bg-white border border-gray rounded-lg shadow dark:bg-BlackOlive dark:border-BlackOlive">
              <div>
                <img className='w-12 h-12 mb-2' src={photo3} alt="" />
              </div>
              <a href="#">
                <h6 className="mb-2  font-semibold tracking-tight text-onyx dark:text-white">Game Design</h6>
              </a>
              <p className="mb-3 text-xs text-gray dark:text-white">Mobile App, Website</p>
              <p className='mb-3 text-sm text-gray dark:text-white'>Lorem ipsum dolor sit amet, consec tet <br /> ur adipiscing elit. Accumsan sed faucibu <br /> s faucibus augue. Cras ut.</p>

            </div>
            <div className="max-w-sm p-6 bg-white border border-gray rounded-lg shadow dark:bg-BlackOlive dark:border-BlackOlive">
              <div >
                <img className='w-12 h-12 mb-2' src={photo3} alt="" />
              </div>
              <a href="#">
                <h6 className="mb-2  font-semibold tracking-tight text-onyx dark:text-white">Graphic Design</h6>
              </a>
              <p className="mb-3 text-xs text-gray dark:text-white">Mobile App, Website</p>
              <p className='mb-3 text-sm text-gray dark:text-white'>Lorem ipsum dolor sit amet, consec tet <br /> ur adipiscing elit. Accumsan sed faucibu <br /> s faucibus augue. Cras ut.</p>


            </div>



            <div className=" max-w-sm p-6 bg-white border border-gray rounded-lg shadow dark:bg-BlackOlive dark:border-BlackOlive">

              <div >
                <img className='w-12 h-12 mb-2' src={photo3} alt="" />
              </div>
              <a href="#">
                <h6 className="mb-2  font-semibold tracking-tight text-onyx dark:text-white">UX Design</h6>
              </a>
              <p className="mb-3 text-xs text-gray dark:text-white">Mobile App, Website</p>
              <p className='mb-3 text-sm text-gray dark:text-white'>Lorem ipsum dolor sit amet, consec tet <br /> ur adipiscing elit. Accumsan sed faucibu <br /> s faucibus augue. Cras ut.</p>

            </div>
            <div className=" max-w-sm p-6 bg-white border border-gray rounded-lg shadow dark:bg-BlackOlive dark:border-BlackOlive">
              <div >
                <img className='w-12 h-12 mb-2' src={photo3} alt="" />
              </div>
              <a href="#">
                <h6 className="mb-2  font-semibold tracking-tight text-onyx dark:text-white">Game Design</h6>
              </a>
              <p className="mb-3 text-xs text-gray dark:text-white">Mobile App, Website</p>
              <p className='mb-3 text-sm text-gray dark:text-white'>Lorem ipsum dolor sit amet, consec tet <br /> ur adipiscing elit. Accumsan sed faucibu <br /> s faucibus augue. Cras ut.</p>

            </div>
            <div className="max-w-sm p-6 bg-white border border-gray rounded-lg shadow dark:bg-BlackOlive dark:border-BlackOlive">
              <div >
                <img className='w-12 h-12 mb-2' src={photo3} alt="" />
              </div>
              <a href="#">
                <h6 className="mb-2  font-semibold tracking-tight text-onyx dark:text-white">Graphic Design</h6>
              </a>
              <p className="mb-3 text-xs text-gray dark:text-white">Mobile App, Website</p>
              <p className='mb-3 text-sm text-gray dark:text-white'>Lorem ipsum dolor sit amet, consec tet <br /> ur adipiscing elit. Accumsan sed faucibu <br /> s faucibus augue. Cras ut.</p>

            </div>

          </div>
        </div>

      </div>

      <div className='w-full dark:bg-raisinBlack'>
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <p className='text-mysticRed'>About Us</p>
            <h2 className='py-3 max-w-2xl mb-4 leading-none md:text-5xl xl:text-5xl dark:text-white text-3xl font-bold text-onyx'>Grow Your Business With <br /> Our Agency</h2>
            <p className=' text-gray max-w-2xl mb-6 font-light  lg:mb-4 md:text-lg lg:text-md dark:text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam <br />
              in digni ssim euismod purus donec mus vulputate habitant iaculis. Com <br />
              odo enim ornare turpis tempus enim, nibh nulla. Rhoncus sed.</p>

            <ul>
              <li className='text-onyx dark:text-gray' > <i className="fa-solid fa-circle-check text-mysticRed"></i> Innovative website design</li>
              <li className='text-onyx dark:text-gray'><i className="fa-solid fa-circle-check text-mysticRed"></i> UI/UX design with global trends</li>
              <li className='text-onyx dark:text-gray'><i className="fa-solid fa-circle-check text-mysticRed"></i> Web and email hosting service</li>
            </ul>

          </div>
          <div className=" lg:mt-0 lg:col-span-5 lg:flex">
            <img src={photo2} alt="/" />
          </div>
        </div>
      </div>



      <div className='w-full bg-floralWhite dark:bg-black pb-5'>
        <div className='text-center py-6'>

          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-64 h-px bg-mysticRed border-0 dark:bg-mysticRed" />
            <p className="absolute px-3 text-xs font-medium text-mysticRed -translate-x-1/2 bg-floralWhite left-1/2  dark:bg-black">Our Case Study</p>
          </div>
          <h2 className='text-2xl font-bold text-onyx dark:text-white'>Our Case Study</h2>
        </div>


        <div>
          <div className=' flex items-center justify-center container mx-auto'>
            <ul className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6'>
              <li className='bg-mysticRed text-white w-24 h-13 text-center '>All</li>
              <li className='text-gray dark:text-white'>UX Design</li>
              <li className='text-gray dark:text-white'>Web Design</li>
              <li className='text-gray dark:text-white'>App Development</li>
              <li className='text-gray dark:text-white'>Game Design</li>
              <li className='text-gray dark:text-white'>Graphic Design</li>
            </ul>
          </div>
          <div className='my-4 flex items-center justify-center container mx-auto'>

            <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 '>

              <div>
                <img src={photo5} alt="" />
                <img src={photo6} alt="" />
                <img src={photo7} alt="" />
              </div>
              <div>
                <img src={photo8} alt="" />
                <img src={photo9} alt="" />
                <img src={photo10} alt="" />
              </div>
              <div>
                <img src={photo11} alt="" />
                <img src={photo12} alt="" />
                <img src={photo13} alt="" />
              </div>
            </div>
          </div>
        </div>

      </div>


      <div className='w-full dark:bg-raisinBlack pb-5'>
        <div className='text-center py-6'>
          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-64 h-px bg-mysticRed border-0 dark:bg-mysticRed" />
            <p className="absolute px-3 text-xs font-medium text-mysticRed -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-raisinBlack">Our Testimonial</p>
          </div>
          <h2 className='text-2xl font-bold text-onyx dark:text-white pt-4'>What Our Client Saying</h2>
        </div>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={20}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {data.map(user => (
            <SwiperSlide key={user.id}>

              <div className='w-full'>
                <div className='flex justify-center '>

                  <div className=' max-w-sm  bg-white border border-white rounded-lg shadow dark:bg-black dark:border-black'>
                    <div className='p-5'>
                      <p className='text-gray pb-5 dark:text-white'>{user.testimonial}</p>
                      <div className='flex'>
                        <div>
                          <img className='rounded-full' src={photo18} alt="" />
                        </div>
                        <div className='px-3'>
                          <h6 className='text-mysticRed block text-bold'>{user.username}</h6>
                          <p className='text-gray text-xs'>{user.work}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </SwiperSlide>


          ))}
        </Swiper>
      </div>

      <div className='w-full flex flex-col justify-between bg-floralWhite dark:bg-black pb-5'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
          <div className='md:items-start w-full px-2 py-10'>

            <p className='text-mysticRed text-xs '>Our Capabilities</p>


            <h2 className='py-3 text-4xl font-bold text-onyx dark:text-white'>Forward Thinking Team Of <br />Designers & Developers</h2>
            <p className='font-light text-gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus ut nisi, <br /> amet rhoncus volutpat neque. Ipsum in aliquam
              eget vitae purus felis eget massa felis. <br /> Eu mattis in malesuada facilisi proin vel.</p>
            <div className=' gap-4 py-10 grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'>
              <div className=' text-center w-32 p-2 bg-white border border-gray-200 rounded-lg shadow  dark:bg-raisinBlack dark:border-raisinBlack'>
                <h5 className="mb-2 text-mysticRed text-xl font-bold tracking-tight">80%</h5>
                <p className="font-normal text-onyx dark:text-white">Softwer <br /> Development</p>
              </div>
              <div className=' text-center w-32 p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-raisinBlack dark:border-raisinBlack'>
                <h5 className="mb-2 text-mysticRed text-xl font-bold tracking-tight">90%</h5>
                <p className="font-normal text-onyx dark:text-white">Graphic Design</p>
              </div>
              <div className=' text-center w-32 p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-raisinBlack dark:border-raisinBlack'>
                <h5 className="mb-2 text-mysticRed text-xl font-bold tracking-tight">85%</h5>
                <p className="font-normal text-onyx dark:text-white">Game Deisgn</p>
              </div>
              <div className=' text-center w-32 p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-raisinBlack dark:border-raisinBlack'>
                <h5 className="mb-2 text-mysticRed text-xl font-bold tracking-tight">100%</h5>
                <p className="font-normal text-onyx dark:text-white">Web <br /> Development</p>
              </div>

            </div>
          </div>
          <div className='py-10 px-2'>
            <img src={photo4} alt="" />
          </div>

        </div>
        <div className='content-center bg-mysticRed text-white max-w-[1171px] max-h-[273px] m-auto rounded-lg  '>
          <div className="grid grid-cols-4 divide-x p-8">
            <div className='text-center p-8'>
              <i className="fa-solid fa-sliders text-3xl"></i>
              <h2 className='text-xl font-bold'>120</h2>
              <p className='text-sm'>Top Experts</p>
            </div>
            <div className='text-center p-8'>
              <i className="fa-solid fa-sliders text-3xl"></i>
              <h2 className='text-xl font-bold'>500</h2>
              <p className='text-sm'>Strategies</p>
            </div>
            <div className='text-center p-8'>
              <i className="fa-solid fa-sliders text-3xl"></i>
              <h2 className='text-xl font-bold'>347</h2>
              <p className='text-sm'>Great Results</p>
            </div>
            <div className='text-center p-8'>
              <i className="fa-solid fa-sliders text-3xl"></i>
              <h2 className='text-xl font-bold'>120</h2>
              <p className='text-sm'>Hight Rankings</p>
            </div>
          </div>
        </div>

      </div>



      <div className='w-full dark:bg-raisinBlack pb-5 '>
            <div className='text-center py-6'>
            <div className="inline-flex items-center justify-center w-full">
    <hr className="w-64 h-px bg-mysticRed border-0 dark:bg-mysticRed"/>
    <p className="absolute px-3 text-xs font-medium text-mysticRed -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-raisinBlack">Our Blog</p>
        </div>
                
                <h2 className='text-2xl font-bold text-onyx dark:text-white pt-4'>Every Singel Update From Here</h2>
            </div>

        <div className='my-4 flex items-center justify-center container mx-auto '>

        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8'>
                
            <Card img={photo17} cardTitle = "35 Stellar Graphic Design Blogs to Keep YouEducated and Inspired" 
                  cardText = "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
                   />
                  

            <Card img={photo15} cardTitle = "Ridiculously powerful 2021 iPad Pro may drop this month" 
                  cardText = "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."/>

            <Card img={photo16} cardTitle = "Memphis Design: the defining look of the 1980s" 
                  cardText = "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."/>




            </div>
        </div>

        </div>

        <div className='w-full dark:bg-black pt-20 pb-20'>
            <div className='bg-mysticRed grid md:grid-cols-2 max-w-[900px] m-auto h-32 rounded-lg'>
                <div className='items-start m-auto text-white'>
                    <p className='text-xs '>Subscribe Newsletter</p>
                    <h2 className='text-2xl font-bold'>Lets Stay In Touch</h2>
                </div>
                <div className='m-auto'>
                    <input className='h-9 rounded-lg' type="email" placeholder='Enter your email' />
                    <button className='bg-mysticRed text-white hover:bg-mysticRed text-white '>Subscribe Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home