import React from 'react'
import { client, urlFor } from '@/app/lib/sanity'
import { blog } from '@/app/lib/interface'
import Navbar from '@/app/components/Navbar'
import { PortableText } from '@portabletext/react'

const getData = async (id: any) => {

    const query = `
    *[_type == "blogs" && _id == "${id}"]{
        title,
          description,
          createdAt,
          image,
          content,
          _id
    }`

    const data = await client.fetch(query)

    return data
}

const BlogPage = async (props: any) => {

    const id = props.params._id

    const resp: blog[] = await getData(id)
    const data: blog = resp[0]

    if (!data) {
        return (
            <>
                <Navbar />
                <div className='w-full h-full mt-[8rem] flex flex-col justify-center items-center'>
                    <h1 className='w-full text-center text-[3rem] font-extrabold text-zinc-800'>404</h1>
                    <h1 className='w-full text-center text-xl font-extrabold text-zinc-800'>No Blog Found</h1>
                </div>
            </>
        )
    }

    return (
        <>
            <Navbar />
            <div className='w-full flex flex-col gap-4 p-4'>
                <h1 className='w-full text-center font-extrabold text-blue-600'>STS-Blogs</h1>
                <h2 className='w-full text-center text-2xl font-extrabold text-zinc-700'>{data?.title}</h2>
                <img className='w-[90%] mx-auto h-[200px] object-cover rounded-md' src={urlFor(data?.image).url()} alt="image" />
                <p className='w-[90%] mx-auto font-bold text-center text-sm text-zinc-700'>{data?.description}</p>
                <div className="prose prose-blue-600 w-[90%] mx-auto prose-headings:font-extrabold mt-4 prose-p:text-sm prose-a:text-blue-600">
                    <PortableText value={data?.content} />
                </div>
            </div>
        </>
    )
}

export default BlogPage