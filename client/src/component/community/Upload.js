import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import Galley from "./Galley";
import ImageUpload from "./ImageUpload";

import {
  UploadDiv,
  UploadForm,
  UploadButtonDiv,
} from '../../Style/UploadCSS.';

export default function Upload() {
  const [Title, setTitle] = useState('');
  const [Content, setContent] = useState('');
  const [Image, setImage] = useState('');

  let navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    if (Title === '' || Content === '') {
      return alert('모든 항목을 채워주세요');
    }

    let body = {
      title: Title,
      content: Content,
      img: Image,
    };
    console.log('body title content img입니다', body.title);

    axios
      .post('http://localhost:8000/community/lounge', body)
      .then((response) => {
          alert('작성 성공');
          window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <UploadDiv>
      <UploadForm>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={Title}
          onChange={(e) => {
            setTitle(e.currentTarget.value);
          }}
        />
        {/* <Galley /> */}
        <ImageUpload setImage={setImage} />
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          value={Content}
          onChange={(e) => {
            setContent(e.currentTarget.value);
          }}
        />
        <UploadButtonDiv>
          <button
            onClick={(e) => {
              onSubmit(e);
            }}
          >
            Submit
          </button>
        </UploadButtonDiv>
      </UploadForm>
    </UploadDiv>
  );
}
