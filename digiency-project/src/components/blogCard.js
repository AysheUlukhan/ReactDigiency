import React, { useEffect, useState } from 'react'
import axios, { Axios } from 'axios'
import photo15 from 'C:/Users/HP/Desktop/ReactProjects/digiency-project/src/assets/foto14.jpg'


const BlogCard = (props) => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3005/blog')
        .then(res => {
            console.log("Getting from :::",res.data)
            setData(res.data)
        }).catch(err=> console.log(err))
    }, [])

    console.log(data)

    const arr = data.map((data, index) => {
        return (
            <div className="max-w-3xl bg-white dark:bg-black">
            <div>
                <img className=" w-full" src={data.image} alt=""/>
            </div>
            <div className='flex p-5'>
                <span className='text-md text-gray dark:text-white' ><i className="fa-regular fa-clock px-3"></i> {data.date}</span>
                <span className='text-md px-8 text-gray dark:text-white'><i className="fa-regular fa-user px-3"></i>{data.user}</span>
                <span className='text-md px-8 text-gray dark:text-white'><i className="fa-regular fa-comment px-3"></i>{data.comment}</span>
                
            </div>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-4xl font-bold  tracking-tight text-onyx dark:text-white">{data.title}</h5>
                </a>
                
                <p className="my-3 font-normal text-gray dark:text-white">{data.overview}</p>
                <a href="#" className="inline-flex items-center px-5 py-2 text-sm font-medium text-center text-white bg-mysticRed rounded-lg ">
                    Read More
                </a>
           
            </div>
        </div>
        )
    })
    
    return (
        <div className="max-w-3xl bg-white dark:bg-black">
            {/* <div>
                <img className=" w-full"  alt="" />
            </div>
            <div classNameName='flex p-5'>
                <span classNameName='text-md text-gray' ></span>
                <span classNameName='text-md px-8 text-gray'></span>
                <span classNameName='text-md px-8 text-gray'></span>
                
                </div>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-4xl font-bold  tracking-tight text-onyx dark:text-white"></h5>
                </a>
                
                <p className="my-3 font-normal text-gray dark:text-white"></p>
                <a href="#" className="inline-flex items-center px-5 py-2 text-sm font-medium text-center text-white bg-mysticRed rounded-lg ">
                    
                </a>
            </div> */}
            {arr}
        </div>
        
    )
}

export default BlogCard