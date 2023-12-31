const model = require("../models");
const { Op } = require("sequelize");
const { Community } = require("../models");
const multer = require('multer')
const setUpload = require('../Util/upload');

// 커뮤니티 전체 조회
exports.getCommunity = async (req, res) => {
  try {
    const community = await Community.findAll();
    res.send({ result: true, data: community });
  } catch (error) {
    res.send({ result: false, data: error });
  }
};
// 커뮤니티 상세 조회
exports.getCommunitySeg = async (req, res) => {
  try {
    const communitySeg = await Community.findOne({
      attributes: ["title", "img", "content"],
      where: {
        id: Number(req.params.id)
      },
    });
    res.send({ result: true, data: communitySeg });
  } catch (error) {
    res.send({ result: false, data: error });
  }
};
//게시글 작성
exports.postCommunity = async (req, res) => {
  try {
    const { title, img, content } = req.body;
    console.log('1', req.body, 'title=', title)
    const mycommunity = await Community.create({
      title,
      img,
      content,
    });
    console.log('mycommunity', mycommunity)
    res.send({ result: true, data: mycommunity });
  } catch (error) {
    res.send({ result: false, data: error });
  }
};

// 로컬 이미지 처리
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'image/')
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + '-' + file.originalname)
//   }
// })

// const upload = multer({ storage: storage }).single("file")

// exports.postUpload = (req, res) => {
//   upload(req, res, (err) => {
//     if (err) {
//       console.log(err);
//       res.status(500).json({ message: 'Failed to upload image' });
//     } else {
//       res.json({ message: 'Image uploaded successfully', success: true, filepath : res.req.file.path});
//     }
//   });
// };

// S3 이미지 처리
exports.postUpload = (req, res, next) => {
  const upload = setUpload('fanda-community/post');
  upload(req, res, (err) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: 'Failed to upload image' });
    }
    res.status(200).json({ message: 'Image uploaded successfully', filePath : res.req.file.location });
  });
};




//게시글 수정
exports.patchCommunity = async (req, res) => {
  const { title, img, comment } = req.body;
  try {
    const patchCommunity = await Community.update(
      {
        title,
        img,
        comment,
      },
      {
        where: {
          id: Number(req.params.id),
        },
      }
    );
    res.send({ result: true, data: patchCommunity });
  } catch (error) {
    res.send({ result: false, data: error });
  }
};
//게시글 삭제
exports.deleteCommunity = async (req, res) => {
  console.log(req.params.id);
  try {
    const deleteCommunity = await Community.destroy({
      where: {
        id: Number(req.params.id),
      },
    });
    res.send({ result: true, data: deleteCommunity });
  } catch (error) {
    res.send({ result: false, data: error });
  }
};
