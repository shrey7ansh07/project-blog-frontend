import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
function SocialMediaLinks() {
  return (
    <div>
        <ul className='flex md:gap-6 gap-3 '>
            <li><NavLink to="#"><FaInstagram className='md:w-7 h-auto opacity-50'></FaInstagram></NavLink></li>
            <li><NavLink to="#"><FaFacebookSquare className='md:w-7 h-auto opacity-50'></FaFacebookSquare></NavLink></li>
            <li><NavLink to ="#"><FaGithub className='md:w-7 h-auto opacity-50'></FaGithub></NavLink></li>
        </ul>
    </div>
  )
}

export default SocialMediaLinks