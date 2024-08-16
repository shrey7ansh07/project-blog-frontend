// import React from 'react'
import { Heading } from "../../index"
import Privacyparts from './Privacyparts'

const flexClassname = 'flex flex-col justify-center'

const data = [
    {
        heading: "User's Agreement",
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic debitis, odit inventore facilis non nihil consequuntur molestias quos qui, ducimus consectetur consequatur numquam tempore reprehenderit libero sed ea culpa nisi ex! Voluptatibus recusandae illum quasi debitis. Blanditiis deserunt aliquid omnis.'
    },
    {
        heading: "Security Betterment",
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus harum porro, incidunt repellat qui voluptas odit dolor vitae eligendi mollitia earum quae ab veritatis? Similique quibusdam illo autem placeat id aperiam accusamus, ad voluptatem omnis?'
    },
    {
        heading: 'Cookies',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, dolor. Commodi, quaerat quibusdam molestiae iure rem dicta facilis amet odio voluptatum error velit vitae consectetur numquam temporibus hic. Harum, iusto!'
    }
]

function Privacy() {
    return (
        <div className={`${flexClassname} items-center min-h-[70vh]`}>
            <Heading text="Privacy policy" />
            <ul className={`${flexClassname} tablet:gap-[40px] tablet:max-w-[400px] max-w-[350px] gap-[30px]`}>
                {data.map((privacy) => (
                    <Privacyparts
                        key={privacy.heading}
                        heading={privacy.heading}
                        text={privacy.text}
                    />
                ))}
            </ul>
        </div>
    )
}

export default Privacy
