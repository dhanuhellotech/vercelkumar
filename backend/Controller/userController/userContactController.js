const contactModel = require("../../Models/userModel/userContact");

//add contact
const UserContact = async (req, res) => {
  const { name, email, phone, category, message, location } = req.body;
  try {
    const contact = new contactModel(req.body);
    await contact.save();
    res
      .status(201)
      .json({ message: "contact successfully send", contact: contact });
  } catch (e) {
    res.status(400).send(e);
  }
};

//get all contact
const GetUserContact = async (req, res) => {
  try {
    const contact = await contactModel.find().sort({ createdAt: -1 });
    res.status(200).json(contact);
  } catch (e) {
    res.status(400).send(e);
  }
};

//update contact
const UpdateContact = async (req, res) => {
  const { id } = req.params;
  try {
    const contact = await contactModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({ message: "update successfully", contact });
  } catch (e) {
    res.status(400).send(e);
  }
};

//delete contact

const DeleteContact = async (req, res) => {
  const { id } = req.params;
  try {
    await contactModel.findByIdAndDelete(id);
    res.status(200).json({ message: "contact deleted successfully" });
  } catch (e) {
    res.status(400).send(e);
  }
};

module.exports = { UserContact, GetUserContact, UpdateContact, DeleteContact };
