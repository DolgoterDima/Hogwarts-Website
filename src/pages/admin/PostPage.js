import React, { useEffect, useState, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";

const PostPage = () => {
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

  const { post } = useParams(); /* get parameter from dynamically route*/
  return (
    <div>
      post title <br />
      {posts?.length
        ? posts?.map((item) => {
            return (
              <article key={item.id}>
                <h5>{item.title}</h5>
              </article>
            );
          })
        : "No post"}
    </div>
  );
};

export default PostPage;
