import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ListDiv, ListItem } from "../../Style/ListCSS.js";

export default function List() {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/community");
        setPostList(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };


    fetchData();
  }, []);

  return (
    <ListDiv>
      {postList.map((post, idx) => (
        <ListItem key={idx}>
          <Link to={`detail/${post.id}`}>
            <p className="title">{post.title}</p>
            <p>{post.content}</p>
          </Link>
        </ListItem>
      ))}
    </ListDiv>
  );
}
