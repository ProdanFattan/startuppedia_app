import Image from "next/image";
import SearchForm from "../components/SearchForm";
import StartupCard from "../components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1,name: "Fattan Prodan" },
      _id: 1,
      description: "This is a description",
      image: "https://picsum.photos/200/300",
      category: "Robots",
      title: "We Robo",
    },
  ];
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch your startup
          <br />
          and connect with <br /> the world
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit your startup ideas, Vote on Pitches, and Get your Startup
          noticed by the world
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search result for ${query} ` : "ALl Startups"}
        </p>
      </section>
      <ul className="mt-7 card_grid">
        {posts?.length > 0 ? (<div className="pl-6">
          {posts.map((post: any, index: number) => (
            <StartupCard key={post?._id} post={post} />
          ))}
          </div>) : (
          <p className="no-results">No startups found</p>
        )}
      </ul>
    </>
  );
}
