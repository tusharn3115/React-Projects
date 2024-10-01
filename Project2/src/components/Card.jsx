import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

const Card = ({ data, reference }) => {
    return (
        <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.1}} dragElastic={0.2} dragTransition={{bounceDamping:10, bounceStiffness:100}} className='relative flex-shrink-0 w-60 h-72 bg-zinc-900/90 rounded-[45px] text-white px-7 py-10 overflow-hidden'>
            <FaFileAlt />
            <p className='text-sm leading-tight mt-5'>{data.desc}</p>
            <div className='footer absolute bottom-0 w-full left-0'>
                <div className='flex items-center justify-between py-3 px-8 mb-5'>
                    <h5>{data.filesize}</h5>
                    <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                        {data.close ? <IoClose /> : <MdOutlineFileDownload size="0.9em" color='#fff' />}
                    </span>
                </div>
                {
                    data.tag.isopen && (<div className={`tag w-full py-4 ${data.tag.tagcolor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                        <h3 className='text-sm font-medium'>{data.tag.tagtitle}</h3>
                    </div>)
                }
            </div>
        </motion.div>
    )
}

export default Card