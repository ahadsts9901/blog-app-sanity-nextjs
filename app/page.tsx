import Blog from "./components/Blog";
import Navbar from "./components/Navbar";
import { blogCard } from "./lib/interface";
import { client } from "./lib/sanity";

async function getData() {

  const query = `
  *[_type == "blogs"]|order(_createdAt desc){

      title,
      description,
      "currentSlug": slug.current,
      image,
      "createdAt": _createdAt 

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
              createdAt={blog?.createdAt} currentSlug={blog?.currentSlug} />
          ))
        }
      </div>
    </>
  );
}
