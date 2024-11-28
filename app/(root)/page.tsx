import Image from "next/image";
import SearchForm from "../components/SearchForm";

export default function Home() {
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
        <SearchForm/>
      </section>
    </>
  );
}
