const reviewsSchema = require("../../Models/adminModel/reviewSchema");
const multer = require("../../Cloudniary/Upload");
const sharp = require("sharp");
const Cloudnary = require("../../Cloudniary/Cloud");
const { model } = require("mongoose");

const uploadImage = multer.single("file");

const getReviews = async (req, res) => {
  let events;
  try {
    events = await reviewsSchema.find();
  } catch (err) {
    console.log(err);
  }
  if (!events) {
    return res.status(404).json({ message: "cannot find vaca\
      ncies" });
  } else {
    return res.status(200).json(events);
  }
};

const resizeImage = async (req, res, next) => {
  try {
    const resizedImage = await sharp(req.file.buffer)
      .resize(300, 250)
      .toFormat("jpeg")
      .jpeg({ quality: 50 })
      .toBuffer();
    req.image = resizedImage.toString("base64");
    next();
  } catch (err) {
    console.log(err);
    return res.status(404).json({ message: "cannot get buffer image" });
  }
};

const addreviewsImagetoCloud = async (req, res, next) => {
  try {
    const result = await Cloudnary.uploader.upload(
      `data:image/jpeg;base64,${req.image}`,
      {
        folder: "To Add reivews",
      }
    );
    req.result = result;
    next();
  } catch (err) {
    //console.log(err)
    return res.status(404).json({ message: "cannot save image" });
  }
};

const addReviews = async (req, res) => {
  console.log(req.body.lastdate);
  let date = new Date(req.body.lastdate);

  try {
    const newJob = new reviewsSchema({
      name: req.body.name,
      image: req.result.secure_url,
      district: req.body.district,
      stars: req.body.stars,
      reviews: req.body.reviews,
    });

    await newJob.save();
    return res.status(200).json(newJob);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const deleteReviews = async (req, res) => {
  const id = req.params.id;
  let del;
  try {
    del = await reviewsSchema.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
  }
  if (!del) {
    return res.status(404).json({ message: "item cannot be removed" });
  } else {
    return res.status(200).json("products deleted successfully");
  }
};

module.exports = {
  getReviews,
  resizeImage,
  uploadImage,
  addreviewsImagetoCloud,
  addReviews,
  deleteReviews,
};
