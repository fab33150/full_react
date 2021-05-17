import { useState } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My date with the president's daughter",
      body: "lorem ipsum...",
      author: "bruce",
      id: 1,
    },
    {
      title: "Welcome to the Woo",
      body: "lorem ipsum...",
      author: "smoke",
      id: 2,
    },
    {
      title: "I love Michigan",
      body: "lorem ipsum...",
      author: "monroe",
      id: 3,
    },
  ]);

  return (
    <div className="home">
      <Bloglist blogs={blogs} title="All Blogs!" />
    </div>
  );
};

export default Home;
