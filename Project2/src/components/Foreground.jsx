import React, { useRef, useState } from 'react'
import Card from './Card'

const Foreground = () => {

    const ref = useRef(null)

    const data = [
        {
            desc: "This is the background color of the card that will be different",
            filesize: ".9mb",
            close: true,
            tag: {
                isopen: true,
                tagtitle: "Upload",
                tagcolor: "green"
            }
        },
        {
            desc: "This is the background color of the card that will be different",
            filesize: ".9mb",
            close: false,
            tag: {
                isopen: true,
                tagtitle: "Download Now",
                tagcolor: "blue"
            }
        },
        {
            desc: "This is the background color of the card that will be different",
            filesize: ".9mb",
            close: true,
            tag: {
                isopen: false,
                tagtitle: "Upload",
                tagcolor: "green"
            }
        },
    ]

    return (
        <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap mt-5 ml-4'>
            {data.map((item, index) => (
                <Card data={item} reference={ref}/>
            ))}
        </div>
    )
}

export default Foreground