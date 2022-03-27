import axios from "axios";
import React, { useState } from "react";

function Posting() {

  const [post, setPost] = useState("");

    axios.post('/login', {
        username: 'Mate',
        qualification: 'okeokasdasd'
      })
      .then(function (response) {
        setPost(response.data)
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  

  if (!post) return "No post!"

  return (
    <div>
      <h1>{post.username}</h1>
      <p>{post.qualification}</p>
    </div>
  );
}

export default Posting