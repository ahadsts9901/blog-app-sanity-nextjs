import Blog from "./components/Blog";
import Navbar from "./components/Navbar";
import { blogCard } from "./lib/interface";
import { client } from "./lib/sanity";

export const revalidate = 30; // revalidate at most 30 seconds
async function getData() {

  const query = `
  *[_type == "blogs"]|order(_createdAt desc){

      title,
      description,
      image,
      "createdAt": _createdAt,
      _id

  }`

  const data = await client.fetch(query)
  return data;
}

export default async function Home() {

  const data: blogCard[] = await getData()
  console.log(data)

  return (
    <>
      <Navbar />
      <div className="flex flex-wrap justify-center md:justify-start p-4 gap-4">
        {
          data.map((blog, index) => (
            <Blog key={index} title={blog?.title}
              text={blog?.description} image={blog?.image}
              createdAt={blog?.createdAt} _id={blog?._id} />
          ))
        }
      </div>
    </>
  );
}
