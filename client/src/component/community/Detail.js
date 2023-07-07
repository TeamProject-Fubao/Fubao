import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

import {
  PostDiv,
  SpinnerDiv,
  Post,
  BtnDiv,
} from "../../Style/PostDetailCSS";

export default function Detail() {
  let params = useParams();
  let navigate = useNavigate();
  const [PostInfo, setPostInfo] = useState([]);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let body = {
          postNum: params.postNum
        };
        console.log(params.postNum)
        const response = await axios.get(`http://localhost:8000/community/detail/${params.postNum}`, body);
        console.log(response);
          console.log(PostInfo);
          setPostInfo(response.data.data);
          setFlag(true);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [params.postNum]);

  const DeleteHandle = () => {
    console.log("fff",params.postNum);
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      const fetchData = async () => {
        try {
          let body = {
            postNum: params.postNum
          };
          const response = await axios.delete(`http://localhost:8000/community/lounge/${params.postNum}`, body);
          console.log(response);
          if (response.status === 200) {
            alert("게시글이 삭제되었습니다.");
            navigate('/community');
          }
        } catch (err) {
          alert("게시글이 삭제되었습니다.");
        }
      };

      fetchData();
    }
  };
  
  return (
    <div>
      <PostDiv>
        {flag ? (
          <>
            <Post>
              <h1>{PostInfo.title}</h1>
              {PostInfo.img ? (
                <img src={PostInfo.img} alt="" />
              ) : null}
              <p>{PostInfo.content}</p>
            </Post>
            <BtnDiv>
              <Link to={`/edit/${params.postNum}`}>
                <button className="edit">UPDATE</button>
              </Link>
              <button className="delete" onClick={DeleteHandle}>
                DELETE
              </button>
            </BtnDiv>
          </>
        ) : (
          <SpinnerDiv>
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </SpinnerDiv>
        )}
      </PostDiv>
    </div>
  );
}