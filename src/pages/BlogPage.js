import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  let newData = null;
  const fetchPosts = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    newData = await response.json();
    setPosts(newData);
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      post title <br /> <br />
      {posts?.length
        ? posts?.map((item) => {
            return (
              <article key={item.id}>
                <NavLink to={`/blog/${item.id}`}>{item.title}</NavLink>
              </article>
            );
          })
        : "No post"}
    </div>
  );
};

export default BlogPage;
