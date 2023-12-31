import React, { useState } from 'react'
import {
    UserImage,
    UserName,
    deleteBlog,
    updatestatus

} from "../../index"
import { MdModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { MdOutlineCloudUpload } from "react-icons/md";
import { ImCross } from "react-icons/im";
import defaultpp from "../../images/defaultpp.png";
import { useDispatch } from 'react-redux';
import { loadBlogData } from '../../../store/blogDataSlice';
import { loadBlogRead } from '../../../store/viewBlogSlice';
import Swal from "sweetalert2"
import "../../../../node_modules/@sweetalert2/theme-dark/dark.css"
import { useNavigate } from 'react-router-dom';

const className = 'flex flex-col md:gap-[10px] justify-center items-center md:px-[50px] px-[30px] '
const iconclassName = 'md:w-6 w-4 h-auto hover:scale-110 transition-all duration-200 ease-out'

function BlogCardUser({
    userimage,
    username,
    blogtitle,
    genre,
    blogcontent,
    blogId,
    isPosted
}) {
    const [post, setpost] = useState(isPosted)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    function sendData() {
        const data = {
            blogtitle,
            genre,
            blogcontent,
            blogId,
        }
        dispatch(loadBlogData({ blogdata: data }))

    }
    function sendViewBlog() {
        const data = {
            blogtitle,
            genre,
            blogcontent,
        }
        dispatch(loadBlogRead({ blog: data }))
    }
    const deleteblog = async () => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#ffc900",
            cancelButtonColor: "#222f3e",
            confirmButtonText: "Delete",
            confirmButtonAriaLabel: "yellow"
        })

        if (result.isConfirmed) {
            try {
                await deleteBlog(blogId)
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            } catch (error) {
                console.log(error);
            }
        }
    }
    const updateStatus = async () => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You need to refresh after success",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#ffc900",
            cancelButtonColor: "#222f3e",
            confirmButtonText: isPosted ? "remove" : "upload",
            confirmButtonAriaLabel: "yellow"
        })
        if (result.isConfirmed) {
            try {
                const response = await updatestatus(blogId)
                Swal.fire({
                    title: response,
                    text: "Your file has been " + isPosted ? "uploaded" : "removed",
                    icon: "success"
                });
                setpost((post) => !post)
            } catch (error) {
                setpost(isPosted)
                console.log(error);
            }
        }
    }
    return (
        <div className='bg-[#222f3e] w-fit rounded-2xl border-gray-500 border-2 cursor-pointer 
        hover:border-2 hover:border-gray-300 hover:scale-105 transition-all duration-200 ease-in-out'>
            <div className={`${className} md:py-[25px] py-[20px] flex flex-col justify-center`}>
                <UserImage imageUrl={userimage || defaultpp} />
                <UserName Username={username} />
            </div>
            <div className={`${className} mb-[20px] h-[90px] `}>
                <h1 className='text-white font-semibold md:text-[18px] text-[14px] text-center w-[200px]'>{blogtitle}</h1>
                <h2 className='text-white font-normal text-center'>{genre}</h2>
            </div>
            <div className='md:px-[40px] px-[20px] py-[15px] flex justify-center 
            items-center gap-[20px] '>
                <FaEye
                    onClick={() => {
                        sendViewBlog();
                        navigate("/readblog")
                    }}
                    className={`${iconclassName} `} />
                <MdModeEditOutline
                    onClick={() => {
                        sendData();
                        navigate("/writeBlog")
                    }}
                    className={iconclassName} />
                {post ?
                    <ImCross
                        className={iconclassName}
                        onClick={updateStatus}
                    />
                    :
                    <MdOutlineCloudUpload
                        className={iconclassName}
                        onClick={updateStatus}
                    />
                }
                <RiDeleteBin6Line
                    onClick={deleteblog}
                    className={iconclassName} />
            </div>
        </div>
    )
}

export default BlogCardUser

