import React from 'react'
import photo14 from 'C:/Users/HP/Desktop/ReactProjects/digiency-project/src/assets/foto13.jpg'


const Card = (props) => {
  return (
    <div className="max-w-xs  bg-white border border-gray rounded-lg shadow dark:bg-black dark:border-black ">
        <div>
        <img className="rounded-t-lg" src={props.img} alt="" />
        </div>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-lg font-bold  tracking-tight text-onyx dark:text-white">{props.cardTitle}</h5>
        </a>
        <span className='text-xs px-1 text-onyx dark:text-white'>January 25, 2021</span>
        <span className='text-xs px-1 text-onyx dark:text-white'>Cristofer Westervelt</span>
        <span className='text-xs text-onyx dark:text-white'>10 Comment</span>
        <p className="my-3 font-normal text-gray dark:text-gray">{props.cardText}</p>
        <a href="#" className="inline-flex items-center px-5 py-2 text-sm font-medium text-center text-white bg-mysticRed rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
            Read More
        </a>
     </div>
</div>
  )
}

export default Card