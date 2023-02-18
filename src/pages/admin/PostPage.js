import React, { useEffect, useState, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";

const PostPage = () => {
  const [postData, setPostData] = useState([]);
  let newData = null;
  const { postId } = useParams(); /* get parameter from dynamically route*/

  const fetchPostById = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    newData = await response.json();
    setPostData(newData);
  };
  useEffect(() => {
    fetchPostById();
  }, []);

  return (
    <div>
      post title <br />
      {postData?.title ? (
        <article>
          {postData?.title} <br /> <br />
          {postData?.body}
        </article>
      ) : (
        "No post"
      )}
    </div>
  );
};

export default PostPage;
