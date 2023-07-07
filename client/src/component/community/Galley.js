// import React, { useState } from 'react';
// import axios from 'axios';

// export default function Galley() {
//   const [imageFile, setImageFile] = useState('');
//   const [imageUrl, setImageUrl] = useState('');

//   const handleImage = async (e) => {
//     const file = e.target.files[0];
//     setImageFile(file);
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('imageFile', imageFile);
//     const res = await axios.post('/uploadPhoto', formData);
//     console.log('Response from the server', res);
//     setImageUrl(res.data.Location);
//   };

//   return (
//     <div>
//       <label htmlFor="imageFile">Upload Images</label>
//       <input
//         type="file"
//         name="imageFile"
//         accept="image/jpeg, image/jp, image/png"
//         onChange={handleImage}
//       />
//       <button onClick={onSubmit}>Submit</button>

//       <p>Photo</p>
//       <img src={imageUrl} alt="Uploaded to AWS S3" />
//     </div>
//   );
// }
