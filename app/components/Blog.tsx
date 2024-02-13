import Link from "next/link"
import { urlFor } from '../lib/sanity'
import moment from 'moment'

const Blog = (props: any) => {

    return (
        <div className='w-[200px] flex flex-col p-4 border shadow-sm rounded-lg'>
            <img src={urlFor(props?.image).url()} alt="image" className='w-full h-[120px] object-cover rounded-md mb-4' />
            <h2 className='font-bold text-lg w-full text-left text-zinc-800 mb-2'>
                {props?.title}
            </h2>
            <p className='text-[0.7rem] text-left w-full h-fit text-zinc-600 mb-2'>{moment(props?.createdAt).fromNow()}</p>
            <p className='text-[0.8rem] text-left w-full h-fit text-zinc-700 mb-4'>{(props?.text).split("").slice(0, 70)} ...</p>
            <Link href={`/blog/${props?._id}`} className='cursor-pointer w-full mt-[auto] bg-blue-600 text-white text-center p-2 rounded-md text-[0.6rem]'>Read More</Link>
        </div>
    )
}

export default Blog