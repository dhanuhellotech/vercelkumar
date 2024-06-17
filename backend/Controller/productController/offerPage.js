//this is for admin panel services page

const offerPage = require("../../Models/productModel/productOffers");
const multer = require("../../Cloudniary/Upload");
const sharp = require("sharp");
const Cloudnary = require("../../Cloudniary/Cloud");
const { model } = require("mongoose");

const uploadImage = multer.single("file");

const getOffer = async (req, res) => {
  let events;
  try {
    events = await offerPage.find();
  } catch (err) {
    console.log(err);
  }
  if (!events) {
    return res.status(404).json({ message: "cannot find vacancies" });
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

const addOfferyImagetoCloud = async (req, res, next) => {
  try {
    const result = await Cloudnary.uploader.upload(
      `data:image/jpeg;base64,${req.image}`,
      {
        folder: "To Add Offers",
      }
    );
    req.result = result;
    next();
  } catch (err) {
    //console.log(err)
    return res.status(404).json({ message: "cannot save image" });
  }
};

const addOffer = async (req, res) => {
  // console.log(req.body.lastdate);
  // let date = new Date(req.body.lastdate);
  const { title, offerPercentage, expireDate } = req.body;
  try {
    const newJob = new offerPage({
      title,
      offerPercentage,
      expireDate,
      image: req.result.secure_url,
    });

    await newJob.save();
    return res.status(200).json(newJob);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const updateOffer = async (req, res) => {
  const id = req.params.id;
  const { title, offerPercentage, expireDate } = req.body;

  try {
    // Log the incoming data for debugging
    console.log(`Updating offer with ID: ${id}`);
    console.log(
      `Title: ${title}, Offer Percentage: ${offerPercentage}, Expire Date: ${expireDate}`
    );

    const existingOffer = await offerPage.findById(id);

    if (!existingOffer) {
      return res.status(404).json({ message: "Offer not found" });
    }

    // Update fields only if they are provided
    if (title !== undefined) {
      existingOffer.title = title;
    }
    if (offerPercentage !== undefined) {
      existingOffer.offerPercentage = offerPercentage;
    }
    if (expireDate !== undefined) {
      existingOffer.expireDate = expireDate;
    }
    if (req.result && req.result.secure_url) {
      existingOffer.image = req.result.secure_url;
    }

    // Save the updated offer
    await existingOffer.save();

    // Log success message
    console.log(`Offer with ID: ${id} updated successfully`);

    return res
      .status(200)
      .json({ message: "updated successfully", existingOffer });
  } catch (err) {
    console.error(`Error updating offer with ID: ${id}`, err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const deleteOffer = async (req, res) => {
  const id = req.params.id;
  let del;
  try {
    del = await offerPage.findByIdAndDelete(id);
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
  getOffer,
  uploadImage,
  resizeImage,
  addOfferyImagetoCloud,
  deleteOffer,
  addOffer,
  updateOffer,
};
