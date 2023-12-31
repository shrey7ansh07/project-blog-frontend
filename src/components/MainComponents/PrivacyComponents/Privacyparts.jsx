import React from 'react'
const flexClassname = 'flex flex-col items-center justify-center gap-[15px]'
const h1classname = 'gradient-install font-semibold md:text-[22px] text-[15px]'
const p1classname = 'md:text-[15px] text-[10px] text-gray-300 text-center'

function Privacyparts({ heading, text }) {
    return (
        <li className={`${flexClassname}`}>
            <h1 className={h1classname}>{heading}</h1>
            <p className={p1classname}>{text}</p>
        </li >)
}

export default Privacyparts