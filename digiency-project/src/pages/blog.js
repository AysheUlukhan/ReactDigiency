import React from 'react'
import BlogCard from '../components/blogCard'
import photo from '../assets/images/foto1.png'
import photo19 from 'C:/Users/HP/Desktop/ReactProjects/digiency-project/src/assets/foto21.jpg'
import photo20 from 'C:/Users/HP/Desktop/ReactProjects/digiency-project/src/assets/foto22.jpg'
import photo21 from 'C:/Users/HP/Desktop/ReactProjects/digiency-project/src/assets/foto23.jpg'
import photo22 from 'C:/Users/HP/Desktop/ReactProjects/digiency-project/src/assets/foto24.jpg'
import photo23 from 'C:/Users/HP/Desktop/ReactProjects/digiency-project/src/assets/foto25.jpg'
import photo24 from 'C:/Users/HP/Desktop/ReactProjects/digiency-project/src/assets/foto13.jpg'
import photo25 from 'C:/Users/HP/Desktop/ReactProjects/digiency-project/src/assets/foto14.jpg'
import photo26 from 'C:/Users/HP/Desktop/ReactProjects/digiency-project/src/assets/foto15.jpg'
import photo27 from 'C:/Users/HP/Desktop/ReactProjects/digiency-project/src/assets/foto26.jpg'
import photo28 from 'C:/Users/HP/Desktop/ReactProjects/digiency-project/src/assets/foto27.jpg'


const Blog = () => {
  return (
    <div>
        <div className='w-full bg-floralWhite dark:bg-raisinBlack'>
                <div className='container max-w-screen-sm mx-auto text-center pb-5'>
                    <div className='p-20'>
                        <h2 className='text-4xl text-onyx font-bold dark:text-white'>Our Blog</h2>
                        <p className='leading-7 text-base pt-5 dark:text-white'>Home - Blog Page</p>
                    </div>
                </div>
            
        </div>
        <div >
        <div className="bg-white dark:bg-black">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-8 lg:py-16 lg:grid-cols-12 ">
          <div className="mr-auto place-self-center lg:col-span-7">
            <BlogCard/>
            {/* <BlogCard img={photo25} cardTitle = "How to set up Square Online store: a step-by-step guide" 
                  cardText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices facilisi sed tincidunt mauris duis pulvinar convallis eu. Lobortis scelerisque aliquam massa arcu, eget. Sociis odio quis eget lacus. Dolor at enim viverra laoreet molestie amet cursus et. Sed lacus, viverra lacinia scelerisque cras aliquam blandit."/>
            <BlogCard img={photo26} cardTitle = "Memphis Design: the defining look of the 1980s" 
                  cardText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices facilisi sed tincidunt mauris duis pulvinar convallis eu. Lobortis scelerisque aliquam massa arcu, eget. Sociis odio quis eget lacus. Dolor at enim viverra laoreet molestie amet cursus et. Sed lacus, viverra lacinia scelerisque cras aliquam blandit."/>
            <BlogCard img={photo27} cardTitle = "These 3 tips helped RollWorks find the perfect designer on 99designs" 
                  cardText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices facilisi sed tincidunt mauris duis pulvinar convallis eu. Lobortis scelerisque aliquam massa arcu, eget. Sociis odio quis eget lacus. Dolor at enim viverra laoreet molestie amet cursus et. Sed lacus, viverra lacinia scelerisque cras aliquam blandit."/>
            <BlogCard img={photo28} cardTitle = "What is Design Thinking and how does it create innovation?" 
                  cardText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices facilisi sed tincidunt mauris duis pulvinar convallis eu. Lobortis scelerisque aliquam massa arcu, eget. Sociis odio quis eget lacus. Dolor at enim viverra laoreet molestie amet cursus et. Sed lacus, viverra lacinia scelerisque cras aliquam blandit."/> */}


          </div>
          <div className="lg:mt-0 lg:col-span-5  lg:flex flex-col">
          <form>   
    <label for="simple-search" className="sr-only">Search</label>
    <div className="relative w-full">
        
        <input type="text" id="simple-search" className="drop-shadow-md text-gray text-sm outline-0  rounded-sm  block w-full pl-10 p-2.5 dark:bg-raisinBlack  dark:placeholder-gray dark:text-gray " placeholder="Search here..." required/>
        <div className="absolute inset-y-0 right-3 pt-3 flex  pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray dark:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
    </div>
</form>

<div className="w-full max-w-md p-4 mt-5 bg-white  rounded-sm drop-shadow-md  sm:p-8 dark:bg-raisinBlack">
    <div className="flex items-center justify-between mb-4">
        <h5 className="text-3xl font-medium leading-none text-onyx dark:text-white">Letest Post</h5>

   </div>
   <div className="flow-root">
        <ul role="list">
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src={photo19} alt="Neil image"/>
                    </div>
                    <div className="flex-1 min-w-0">
                        <h2 className="text-lg font-medium text-onyx truncate dark:text-white">
                        Minimal Post With A <br/> Preview Image
                        </h2>

                    </div>

                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src={photo20} alt="Bonnie image"/>
                    </div>
                    <div className="flex-1 min-w-0">
                        <h2 className="text-md font-medium text-onyx truncate dark:text-white">
                        Good Design Makes Me <br/> Happy
                        </h2>
   
                    </div>
                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src={photo21} alt="Michael image"/>
                    </div>
                    <div className="flex-1 min-w-0">
                    <h2 className="text-md font-medium text-onyx truncate dark:text-white">
                    Best 27 Design Blogs for <br/> 2021
                        </h2>
                    </div>

                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src={photo22} alt="Lana image"/>
                    </div>
                    <div className="flex-1 min-w-0">
                    <h2 className="text-md font-medium text-onyx truncate dark:text-white">
                    Creative Ways To Use <br/> Infographics For Your <br/> Business
                        </h2>

                    </div>

                </div>
            </li>
            <li className="pt-3 pb-0 sm:pt-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src={photo23} alt="Thomas image"/>
                    </div>
                    <div className="flex-1 min-w-0">
                    <h2 className="text-md font-medium text-onyx truncate dark:text-white">
                    Tumblr Banner <br/> Templates : Tips To Get <br/> Better Engagement
                        </h2>

                    </div>
                </div>
            </li>
        </ul>
   </div>
</div>

<div className='w-full max-w-md  bg-white  rounded-sm drop-shadow-md mt-5 p-5 dark:bg-raisinBlack'>
    <h5 className="text-2xl font-medium leading-none text-onyx dark:text-white">Categories</h5>
    <div className="flex items-center justify-between pt-5 ">
            <span className="text-xl font-medium text-gray dark:text-white">Business</span>
            <div className="text-gray border border-gray font-medium rounded-xs text-xs p-2 text-center dark:text-white dark:border-white dark:focus:ring-gray">05</div>
        </div>
        <div className="flex items-center justify-between pt-5 ">
            <span className="text-xl font-medium text-gray dark:text-white">Introductions</span>
            <div className="text-gray border border-gray font-medium rounded-xs text-xs p-2 text-center dark:text-white dark:border-white dark:focus:ring-gray">15</div>
        </div>
        <div className="flex items-center justify-between pt-5 ">
            <span className="text-xl font-medium text-gray dark:text-white">Design Blog</span>
            <div className="text-gray border border-gray font-medium rounded-xs text-xs p-2 text-center dark:text-white dark:border-white dark:focus:ring-gray">65</div>
        </div>
        <div className="flex items-center justify-between pt-5 ">
            <span className="text-xl font-medium text-gray dark:text-white">UI/UX Design</span>
            <div className="text-gray border border-gray font-medium rounded-xs text-xs p-2 text-center dark:text-white dark:border-white dark:focus:ring-gray">08</div>
        </div>
        <div className="flex items-center justify-between pt-5 ">
            <span className="text-xl font-medium text-gray dark:text-white">App Development</span>
            <div className="text-gray border border-gray font-medium rounded-xs text-xs p-2 text-center dark:text-white dark:border-white dark:focus:ring-gray">16</div>
        </div>
</div>

<div className='w-full max-w-md  bg-white  rounded-sm drop-shadow-md mt-5 p-5 dark:bg-raisinBlack'>
    <h5 className="text-2xl font-medium leading-none text-onyx dark:text-white">Tags</h5>
    <div className="flex items-center pt-5 ">
            <div className="text-gray px-5 bg-floralWhite  font-normal rounded-xs text-lg p-2 text-center dark:bg-BlackOlive ">Business</div>
            <div className="text-gray px-5 mx-5 bg-floralWhite font-normal rounded-xs text-lg p-2 text-center dark:bg-BlackOlive">Graphic Design</div>
        </div>
        <div className="flex items-center pt-5 ">
        
            <div className="text-gray px-5 bg-floralWhite  font-normal rounded-xs text-lg p-2 text-center dark:bg-BlackOlive ">Technology</div>
            <div className="text-gray px-5 mx-5 bg-floralWhite font-normal rounded-xs text-lg p-2 text-center dark:bg-BlackOlive ">App Development</div>
        </div>
        <div className="flex items-center pt-5 ">
            <div className="text-gray px-5 bg-floralWhite  font-normal rounded-xs text-lg p-2 text-center dark:bg-BlackOlive">Website Design</div>
            <div className="text-gray px-5 mx-5 bg-floralWhite font-normal rounded-xs text-lg p-2 text-center dark:bg-BlackOlive">Business Idea</div>
        </div>

</div>


          </div>
        </div>
      </div>


</div>

    </div>
  )
}

export default Blog